/* eslint-disable @typescript-eslint/no-unused-vars */
const fs = require('fs');
const path = require('path');
const glob = require('glob-promise');
const clc = require('cli-color');
const { get } = require('lodash');
const {
  getStories,
  getCustomTag,
  writeFile,
  parseComponentCardProps,
  writeIntroduction
} = require('./utils');

// Component templates
const introComponentsProps = [];
const jsdoc2md = require('jsdoc-to-markdown');
const docgen = require('react-docgen-typescript');
const DocGenMarkdownRenderer = require('./templates/docgen-markdown-renderer.js');
const componentMDTemplate = require('./templates/components.md');
const componentMDXTemplate = require('./templates/components.mdx');
const introductionMDXTemplate = require('./templates/introduction.mdx');

console.log('Generating components documentation...');

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

const generateComponentDocs = async () => {
  try {
    const files = await glob('packages/components/src/**/*.{ts,tsx}', {
      ignore: ['**/*.{test,stories,styled}.{ts,tsx}', '**/index.{ts,tsx}']
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
      introComponentsProps.push(
        parseComponentCardProps('components', componentName, jsdocSchema[0])
      );

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
      writeFile(
        documentationMDPath,
        rendererMD.render(componentPath, {
          ...componentDocs[0],
          import: getCustomTag(get(jsdocSchema, '[0].customTags', []), 'import'),
          examples: get(jsdocSchema, '[0].examples')
        })
      );
    });
  } catch (error) {
    console.log(
      clc.red('There was an error generating the documentation for', componentPath, error)
    );
  }
};

const generateIntroductionDocs = async () => {
  try {
    console.log('Generating introduction documentation...');

    const introductionMDXPath = 'packages/components/src/introduction.stories.mdx';
    const files = await glob(introductionMDXPath);
    const data = fs.readFileSync(files[0], { encoding: 'utf8' });
    const introductionItemsTemplate = introductionMDXTemplate(introComponentsProps);

    writeIntroduction(introductionMDXPath, data, introductionItemsTemplate);
  } catch (error) {
    console.log(
      clc.red('There was an error generating the introduction for', componentPath, error)
    );
  }
};

const generateAllDocs = async () => {
  await generateComponentDocs();
  await generateIntroductionDocs();
  console.log(clc.green('Documentation generated successfully!'));
};

generateAllDocs();
