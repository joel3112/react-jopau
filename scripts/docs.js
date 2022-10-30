/* eslint-disable @typescript-eslint/no-unused-vars */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const prettier = require('prettier');
const docgen = require('react-docgen-typescript');
const { kebabCase, lowerCase, upperFirst } = require('lodash');
const ReactDocGenMarkdownRenderer = require('react-docgen-markdown-renderer');

// Component templates
const componentMDTemplate = require('./components.md');
const componentMDXTemplate = require('./components.mdx');

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

const getStories = (componentPath, componentName) => {
  const storiesPath = path.join(componentPath, '../') + componentName + '.stories.tsx';
  const stories = [];
  const component = fs.readFileSync(storiesPath).toString();
  const storyRegex = /export const (.*) = Template.bind\({}\);/g;
  let match;
  while ((match = storyRegex.exec(component)) !== null) {
    const storyName = match[1];
    stories.push({
      storyName: storyName,
      storyId: kebabCase(storyName),
      storyLabel: lowerCase(storyName)
        .split(' ')
        .map((t) => upperFirst(t))
        .join(' ')
    });
  }
  return stories;
};

glob(
  'packages/components/src/**/*.{ts,tsx}',
  {
    ignore: ['**/*.{test,stories,styled}.{ts,tsx}', '**/index.{ts,tsx}']
  },
  function (er, files) {
    files.forEach((componentPath) => {
      try {
        fs.readFile(componentPath, () => {
          const componentName = path.basename(componentPath, path.extname(componentPath));

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
          const stories = getStories(componentPath, componentName);
          console.log('-', componentName, '>>', componentDocs);

          /**
           * Generate file MDX
           */
          const documentationMDXPath = path.join(componentPath, '../') + componentName + '.mdx';
          const rendererMDX = new ReactDocGenMarkdownRenderer({
            template: componentMDXTemplate
          });

          fs.writeFile(
            documentationMDXPath,
            prettier.format(
              rendererMDX.render(
                /* The path to the component, used for linking to the file. */
                componentPath,
                /* The actual react-docgen AST */
                componentDocs[0],
                /* Array of component ASTs that this component composes*/
                stories
              ),
              { parser: 'markdown' }
            ),
            (err) => {
              if (err) {
                console.log('There was an error writing the file', err);
              }
            }
          );

          /**
           * Generate file markdown
           */
          const documentationMDPath = path.join(componentPath, '../') + 'readme.md';
          const rendererMD = new ReactDocGenMarkdownRenderer({
            template: componentMDTemplate
          });

          fs.writeFile(
            documentationMDPath,
            prettier.format(
              rendererMD.render(
                /* The path to the component, used for linking to the file. */
                componentPath,
                /* The actual react-docgen AST */
                componentDocs[0],
                /* Array of component ASTs that this component composes*/
                []
              ),
              { parser: 'markdown' }
            ),
            (err) => {
              if (err) {
                console.log('There was an error writing the file', err);
              }
            }
          );
        });
      } catch (error) {
        console.error('There was an error generating the documentation for', componentPath, error);
      }
    });
  }
);
