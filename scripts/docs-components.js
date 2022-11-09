/* eslint-disable @typescript-eslint/no-unused-vars */
const fs = require('fs');
const path = require('path');
const glob = require('glob-promise');
const clc = require('cli-color');
const { get, last } = require('lodash');
const {
  getStories,
  getCustomTag,
  writeFile,
  parseComponentCardProps,
  writeIntroduction
} = require('./utils');

// Component templates
let introComponentsProps = [];
const jsdoc2md = require('jsdoc-to-markdown');
const docgen = require('react-docgen-typescript');
const DocGenMarkdownRenderer = require('./templates/docgen-markdown-renderer.js');
const componentMDTemplate = require('./templates/components.md');
const componentMDXTemplate = require('./templates/components.mdx');
const introductionMDXTemplate = require('./templates/introduction.mdx');

const preffix = clc.yellow('@react-jopau/components:');
console.log(preffix, 'Generating components documentation...');

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

const generateComponentDocs = async (type) => {
  introComponentsProps = [];
  try {
    const files = await glob(`packages/components/src/${type}/**/*.{ts,tsx}`, {
      ignore: ['**/*.{test,stories,styled}.{ts,tsx}', '**/index.{ts,tsx}']
    });

    files.forEach((componentPath) => {
      const componentName = path.basename(componentPath, path.extname(componentPath));

      /**
       * Generate JSON schema from JSDoc
       */
      const jsdocSchema = last(
        jsdoc2md.getTemplateDataSync({
          files: componentPath,
          configure: './jsdoc2md.json'
        })
      );
      introComponentsProps.push(parseComponentCardProps('components', componentName, jsdocSchema));

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
      const componentDocs = last(customParser.parse(componentPath));
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
        rendererMDX.render(componentPath, {
          ...componentDocs,
          imports: getCustomTag(get(jsdocSchema, 'customTags', []), 'imports'),
          stories: stories || {}
        })
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
          ...componentDocs,
          imports: getCustomTag(get(jsdocSchema, 'customTags', []), 'imports'),
          examples: get(jsdocSchema, 'examples')
        })
      );

      console.log(
        preffix,
        clc.blue(componentName, '=>', componentPath),
        !stories ? `(No stories found)` : '',
        clc.green('✔')
      );
    });
  } catch (error) {
    console.log(preffix, clc.red('There was an error generating the documentation for', error));
  }
};

const generateIntroductionDocs = async (type) => {
  try {
    const introductionMDXPath = `packages/components/src/${type}/About.stories.mdx`;
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
  await generateComponentDocs('ui');
  await generateIntroductionDocs('ui');

  await generateComponentDocs('contexts');
  await generateIntroductionDocs('contexts');

  console.log(preffix, clc.green('Documentation generated successfully!'));
};

generateAllDocs();
