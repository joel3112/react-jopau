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
  parseComponentCardProps,
  writeIntroduction,
  parseTypes,
  getComponentParsed
} = require('./utils/schema');

// Component templates
const introComponentsProps = [];
const jsdoc2md = require('jsdoc-to-markdown');
const RendererGenerator = require('./utils/renderer-generator.js');
const hookMDTemplate = require('./templates/docs/hook.md');
const hookMDXTemplate = require('./templates/docs/hook.mdx.js');
const introductionMDXTemplate = require('./templates/docs/introduction.mdx.js');

const preffix = clc.yellow('@react-jopau/hooks:');
console.log(preffix, 'Generating hooks documentation...');

const checkIsCallback = (item, jsdocSchema, requiredProp) => {
  const itemIsCallback = get(item, 'type.names', []).join().includes('Callback');
  if (itemIsCallback) {
    const returnsCustomCallback = (jsdocSchema || []).find(
      ({ id }) => id === get(item.type, 'names', [])[0]
    );

    if (returnsCustomCallback) {
      // Check if callback returns or throws
      const params = get(returnsCustomCallback, 'params', []).map((param) => {
        const parseParam = parseJSONSchemaProps(param, requiredProp);
        return `${parseParam.name}: ${parseParam.type.name}`;
      });
      const returns = get(parseTypes(get(returnsCustomCallback, 'returns[0].type')), 'name');
      const exceptions = get(parseTypes(get(returnsCustomCallback, 'exceptions[0].type')), 'name');

      return {
        ...parseJSONSchemaProps(item, requiredProp),
        type: {
          name: `(${params.join(',')}) => ${exceptions ? `{ throw ${exceptions} }` : `${returns}`}`
        }
      };
    } else {
      return parseJSONSchemaProps(item, requiredProp);
    }
  }
  return parseJSONSchemaProps(item, requiredProp);
};

const generateHookDocs = async () => {
  const files = await glob('packages/hooks/src/**/use*.ts', {
    ignore: ['**/*.{test,stories}.{ts,tsx}']
  });

  files.forEach((componentPath) => {
    try {
      const componentName = path.basename(componentPath, path.extname(componentPath));

      /**
       * Generate JSON schema from JSDoc
       */
      const jsdocSchema = jsdoc2md.getTemplateDataSync({
        files: componentPath,
        configure: './jsdoc2md.json'
      });
      introComponentsProps.push(parseComponentCardProps(componentPath, jsdocSchema[0]));

      /**
       * Generate JSON schema to render
       */
      const { description, displayName } = getComponentParsed(componentPath, jsdocSchema[0]);
      const parsedSchema = {
        path: componentPath,
        description,
        displayName,
        imports: getCustomTag(jsdocSchema[0], 'imports'),
        examples: get(jsdocSchema, '[0].examples'),
        params: get(jsdocSchema, '[0].params', []).reduce((acc, item) => {
          // Check if param is callback
          acc[item.name] = checkIsCallback(item, jsdocSchema);
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
                  acc[`result[${item.name}]`] = checkIsCallback(item, jsdocSchema, false);
                  return acc;
                }, {})),
              // Parse object of custom types
              ...(customType === 'Object' &&
                returnsCustomType.properties.reduce((acc, item) => {
                  acc[`result.${item.name}`] = checkIsCallback(item, jsdocSchema, false);
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
      const rendererMD = new RendererGenerator({
        template: hookMDTemplate
      });
      writeFile(documentationMDPath, rendererMD.renderDoc(componentPath, parsedSchema), 'mdx');

      /**
       * Generate file MDX
       */
      const documentationMDXPath = path.join(componentPath, '../') + 'readme.mdx';
      const rendererMDX = new RendererGenerator({
        template: hookMDXTemplate
      });
      writeFile(documentationMDXPath, rendererMDX.renderDoc(componentPath, parsedSchema), 'mdx');

      console.log(preffix, clc.blue(componentName, '=>', componentPath), clc.green('✔'));
    } catch (error) {
      console.log(
        preffix,
        clc.red('There was an error generating the documentation for', componentPath)
      );
      throw error;
    }
  });
};

const generateIntroductionDocs = async () => {
  try {
    const introductionMDXPath = 'packages/hooks/src/About.stories.mdx';
    const files = await glob(introductionMDXPath);
    const data = fs.readFileSync(files[0], { encoding: 'utf8' });
    const introductionItemsTemplate = introductionMDXTemplate(introComponentsProps);

    writeIntroduction(introductionMDXPath, data, introductionItemsTemplate);

    console.log(preffix, clc.blue('Introduction'), clc.green('✔'));
  } catch (error) {
    console.log(preffix, clc.red('There was an error generating the introduction for', error));
  }
};

const generateAllDocs = async () => {
  await generateHookDocs();
  await generateIntroductionDocs();

  console.log(preffix, clc.green('Documentation generated successfully!'));
};

generateAllDocs();
