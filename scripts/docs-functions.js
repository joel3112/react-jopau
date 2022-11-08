/* eslint-disable @typescript-eslint/no-unused-vars */
const fs = require('fs');
const path = require('path');
const glob = require('glob-promise');
const clc = require('cli-color');
const { get } = require('lodash');
const {
  writeFile,
  parseJSONSchemaProps,
  getCustomTag,
  parseDescription,
  parseComponentCardProps,
  writeIntroduction,
  parseTypes
} = require('./utils');

// Component templates
const introComponentsProps = [];
const jsdoc2md = require('jsdoc-to-markdown');
const DocGenMarkdownRenderer = require('./templates/docgen-markdown-renderer.js');
const functionMDTemplate = require('./templates/functions.md');
const functionMDXTemplate = require('./templates/functions.mdx');
const introductionMDXTemplate = require('./templates/introduction.mdx');

console.log('Generating hooks/functions documentation...');

const generateFunctionDocs = async () => {
  try {
    const files = await glob('packages/hooks/src/**/use*.ts', {
      ignore: ['**/*.{test,stories}.{ts,tsx}', '**/utils.ts']
    });

    files.forEach((componentPath) => {
      const componentName = path.basename(componentPath, path.extname(componentPath));

      console.log(clc.blue('-', componentName, '>>', componentPath));

      /**
       * Generate JSON schema from JSDoc
       */
      const jsdocSchema = jsdoc2md.getTemplateDataSync({
        files: componentPath,
        configure: './jsdoc2md.json'
      });
      introComponentsProps.push(parseComponentCardProps('hooks', componentName, jsdocSchema[0]));

      /**
       * Generate JSON schema to render
       */
      const parsedSchema = {
        path: componentPath,
        package: componentPath.split(path.sep)[1],
        description: parseDescription(get(jsdocSchema, '[0].description'), ''),
        displayName: get(jsdocSchema, '[0].name'),
        import: getCustomTag(get(jsdocSchema, '[0].customTags', []), 'import'),
        examples: get(jsdocSchema, '[0].examples'),
        params: get(jsdocSchema, '[0].params', []).reduce((acc, item) => {
          // Check if param is callback
          const itemIsCallback = get(item, 'type.names', []).join().includes('Callback');
          if (itemIsCallback) {
            const returnsCustomCallback = (jsdocSchema || []).find(
              ({ id }) => id === get(item.type, 'names', [])[0]
            );

            if (returnsCustomCallback) {
              // Check if callback returns or throws
              const params = get(returnsCustomCallback, 'params', []).map((param) => {
                const parseParam = parseJSONSchemaProps(param);
                return `${parseParam.name}: ${parseParam.type.name}`;
              });
              const returns = get(
                parseTypes(get(returnsCustomCallback, 'returns[0].type')),
                'name'
              );
              const exceptions = get(
                parseTypes(get(returnsCustomCallback, 'exceptions[0].type')),
                'name'
              );

              acc[item.name] = {
                ...parseJSONSchemaProps(item),
                type: {
                  name: `(${params.join(',')}) => ${
                    exceptions ? `{ throw ${exceptions} }` : `${returns}`
                  }`
                }
              };
            } else {
              acc[item.name] = parseJSONSchemaProps(item);
            }
          } else {
            acc[item.name] = parseJSONSchemaProps(item);
          }
          return acc;
        }, {}),
        returns: get(jsdocSchema, '[0].returns', []).reduce((acc, item) => {
          const returnsCustomType = (jsdocSchema || []).find(
            ({ id }) => id === get(item.type, 'names', [])[0]
          );

          if (returnsCustomType) {
            // Parse custom types
            const customType = get(returnsCustomType, 'type.names', [])[0];
            return {
              // Parse array of custom types
              ...(customType === 'Array' &&
                returnsCustomType.properties.reduce((acc, item) => {
                  acc[`result[${item.name}]`] = parseJSONSchemaProps(item, false);
                  return acc;
                }, {})),
              // Parse object of custom types
              ...(customType === 'Object' &&
                returnsCustomType.properties.reduce((acc, item) => {
                  acc[`result.${item.name}`] = parseJSONSchemaProps(item, false);
                  return acc;
                }, {}))
            };
          }
          acc[item.name] = parseJSONSchemaProps(item, false);
          return acc;
        }, {})
      };

      /**
       * Generate file markdown
       */
      const documentationMDPath = path.join(componentPath, '../') + 'readme.md';
      const rendererMD = new DocGenMarkdownRenderer({
        template: functionMDTemplate
      });
      writeFile(documentationMDPath, rendererMD.render(componentPath, parsedSchema));

      /**
       * Generate file MDX
       */
      const documentationMDXPath = path.join(componentPath, '../') + 'readme.mdx';
      const rendererMDX = new DocGenMarkdownRenderer({
        template: functionMDXTemplate
      });
      writeFile(documentationMDXPath, rendererMDX.render(componentPath, parsedSchema));
    });
  } catch (error) {
    console.log(clc.red('There was an error generating the documentation for', error));
  }
};

const generateIntroductionDocs = async () => {
  try {
    console.log('Generating introduction documentation...');

    const introductionMDXPath = 'packages/hooks/src/About.stories.mdx';
    const files = await glob(introductionMDXPath);
    const data = fs.readFileSync(files[0], { encoding: 'utf8' });
    const introductionItemsTemplate = introductionMDXTemplate(introComponentsProps);

    writeIntroduction(introductionMDXPath, data, introductionItemsTemplate);
  } catch (error) {
    console.log(clc.red('There was an error generating the introduction for', error));
  }
};

const generateAllDocs = async () => {
  await generateFunctionDocs();
  await generateIntroductionDocs();
  console.log(clc.green('Documentation generated successfully!'));
};

generateAllDocs();
