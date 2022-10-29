/* eslint-disable @typescript-eslint/no-unused-vars */
// const reactDocgen = require('react-docgen');
// const { jsdocToJsonSchema } = require('jsdoc-jsonschema');
// const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const prettier = require('prettier');
const docgen = require('react-docgen-typescript');
const ReactDocGenMarkdownRenderer = require('react-docgen-markdown-renderer');
const componentTemplate = require('./components.md');

console.log('Generating documentation...');

const parseOptions = {
  propFilter: (prop, component) => {
    if (prop.declarations !== undefined && prop.declarations.length > 0) {
      const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
        return !declaration.fileName.includes('node_modules');
      });

      return Boolean(hasPropAdditionalDescription);
    }

    return true;
  }
};

glob(
  'packages/{components,hooks}/src/**/*.{ts,tsx}',
  {
    ignore: [
      '**/*.{test,stories,styled}.{ts,tsx}',
      '**/index.{ts,tsx}',
      'packages/hooks/src/**/use*.ts'
    ]
  },
  function (er, files) {
    files.forEach((componentPath) => {
      try {
        fs.readFile(componentPath, (error, content) => {
          const componentName = path.basename(componentPath, path.extname(componentPath));
          const documentationPath = path.join(componentPath, '../') + componentName + '.mdx';

          // Generate documentation from JSDoc comments
          const customParser = docgen.withCompilerOptions(
            {
              esModuleInterop: true
            },
            {
              savePropValueAsString: true,
              ...parseOptions
            }
          );
          const componentDocs = customParser.parse(componentPath);
          const renderer = new ReactDocGenMarkdownRenderer({
            template: componentTemplate
          });
          console.log('-', componentName, '>>', documentationPath, componentDocs);

          // const doc = reactDocgen.parse(content);
          // fs.writeFile(jsdocPath, JSON.stringify(componentDocs[0]), (error) => {
          //   if (error) {
          //     console.log('error', error);
          //   }
          // });

          fs.writeFile(
            documentationPath,
            prettier.format(
              renderer.render(
                /* The path to the component, used for linking to the file. */
                componentPath,
                /* The actual react-docgen AST */
                componentDocs[0],
                /* Array of component ASTs that this component composes*/
                []
              ),
              {
                parser: 'markdown',
                semi: false
              }
            ),
            (err) => {
              if (err) {
                console.log('There was an error writing the file', err);
              }
            }
          );

          // jsdoc2md.render({ files: 'packages/components/src/space/space.tsx' }).then((data) => {
          //   console.log('jsdoc', data);
          // });
        });
      } catch (error) {
        console.error('There was an error generating the documentation for', componentPath, error);
      }
    });
  }
);
