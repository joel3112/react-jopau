/* eslint-disable @typescript-eslint/no-unused-vars */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const prettier = require('prettier');
const docgen = require('react-docgen-typescript');
const DocGenMarkdownRenderer = require('./templates/docgen-markdown-renderer.js');

// Component templates
const componentMDTemplate = require('./templates/components.md');
const componentMDXTemplate = require('./templates/components.mdx');

console.log('Generating documentation...');

const parseOptions = {
  propFilter: (prop) => {
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
  const stories = {};
  const component = fs.readFileSync(storiesPath).toString();
  const storyRegex = /export const (.*) = Template.bind\({}\);/g;
  let match;
  while ((match = storyRegex.exec(component)) !== null) {
    const storyName = match[1];
    stories[storyName] = {
      name: storyName
    };
  }
  return stories;
};

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
          console.log('-', componentName, '>>', JSON.stringify(componentDocs, null, 2));

          /**
           * Generate file MDX
           */
          const documentationMDXPath = path.join(componentPath, '../') + 'readme.mdx';
          const rendererMDX = new DocGenMarkdownRenderer({
            template: componentMDXTemplate
          });
          writeFile(
            documentationMDXPath,
            rendererMDX.render(componentPath, { ...componentDocs[0], stories })
          );

          /**
           * Generate file markdown
           */
          const documentationMDPath = path.join(componentPath, '../') + 'readme.md';
          const rendererMD = new DocGenMarkdownRenderer({
            template: componentMDTemplate
          });
          writeFile(documentationMDPath, rendererMD.render(componentPath, componentDocs[0]));
        });
      } catch (error) {
        console.error('There was an error generating the documentation for', componentPath, error);
      }
    });
  }
);
