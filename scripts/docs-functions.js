/* eslint-disable @typescript-eslint/no-unused-vars */
const jsdoc2md = require('jsdoc-to-markdown');
// const tsjsg = require('ts-json-schema-generator');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const clc = require('cli-color');
const prettier = require('prettier');
const { get } = require('lodash');
const DocGenMarkdownRenderer = require('./templates/docgen-markdown-renderer.js');

// Component templates
const functionMDTemplate = require('./templates/functions.md');
const functionMDXTemplate = require('./templates/functions.mdx');

console.log('Generating hooks/functions documentation...');

const writeFile = (filePath, content) => {
  fs.writeFileSync(
    filePath,
    prettier.format(content, {
      parser: 'mdx',
      semi: true,
      tabWidth: 2,
      printWidth: 100,
      singleQuote: true,
      trailingComma: 'none',
      bracketSameLine: true
    })
  );
};

const parseDescription = (description) =>
  description ? description.replace(/(<([^>]+)>)/gi, '') : '';

const getCustomTag = (customTags, tagName) => {
  const tag = customTags.find((tag) => tag.tag === tagName);
  return tag ? tag.value : null;
};

const parseJSONSchemaProps = (prop, requiredProp = true) => {
  const { name, type, description, defaultvalue, optional } = prop;
  return {
    defaultValue: defaultvalue ? { value: defaultvalue } : null,
    description: parseDescription(description),
    name,
    required: requiredProp && !optional,
    type: type
      ? {
          name: get(type, 'names', []).join(' \\| ')
        }
      : null
  };
};

glob(
  'packages/hooks/src/**/use*.ts',
  {
    ignore: ['**/*.{test,stories}.{ts,tsx}', '**/utils.ts']
  },
  function (er, files) {
    files.forEach((componentPath) => {
      try {
        fs.readFile(componentPath, () => {
          const componentName = path.basename(componentPath, path.extname(componentPath));

          console.log(clc.blue('-', componentName, '>>', componentPath));

          /**
           * Generate JSON schema from JSDoc
           */
          const jsdocSchema = jsdoc2md.getTemplateDataSync({
            files: componentPath,
            configure: './jsdoc2md.json'
          });
          // console.log('>> jsdoc', JSON.stringify(jsdocSchema, null, 2));

          /**
           * Generate JSON schema from TypeScript
           */
          /** @type {import('ts-json-schema-generator/dist/src/Config').Config} */
          // const config = {
          //   path: componentPath,
          //   tsconfig: 'tsconfig.json',
          //   type: '*'
          // };
          // const tsSchema = tsjsg.createGenerator(config).createSchema(config.type);
          // console.log('>> tsSchema', JSON.stringify(tsSchema, null, 2));

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
              acc[item.name] = parseJSONSchemaProps(item);
              return acc;
            }, {}),
            returns: get(jsdocSchema, '[0].returns', []).reduce((acc, item) => {
              const returnsCustomType = (jsdocSchema || []).find(
                ({ id }) => id === get(item.type, 'names', [])[0]
              );

              if (returnsCustomType) {
                // Parse custom types
                return {
                  result: { ...parseJSONSchemaProps(item, false), type: { name: 'Object' } },
                  ...returnsCustomType.properties.reduce((acc, item) => {
                    acc[`result.${item.name}`] = parseJSONSchemaProps(item, false);
                    return acc;
                  }, {})
                };
              }
              acc[item.name] = parseJSONSchemaProps(item, false);
              return acc;
            }, {})
          };
          // console.log('>> parsedSchema', JSON.stringify(parsedSchema, null, 2));

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

          console.log(clc.green('Documentation generated successfully!'));
        });
      } catch (error) {
        console.error('There was an error generating the documentation for', componentPath, error);
      }
    });
  }
);
