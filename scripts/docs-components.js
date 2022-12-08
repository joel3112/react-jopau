/* eslint-disable @typescript-eslint/no-unused-vars */
const fs = require('fs');
const path = require('path');
const glob = require('glob-promise');
const { program } = require('commander');
const clc = require('cli-color');
const { get, last, capitalize } = require('lodash');
const {
  getStories,
  getCustomTag,
  writeFile,
  parseComponentCardProps,
  writeIntroduction
} = require('./utils/schema');

// Component templates
let introComponentsProps = [];
const jsdoc2md = require('jsdoc-to-markdown');
const docgen = require('react-docgen-typescript');
const RendererGenerator = require('./utils/renderer-generator.js');
const componentMDTemplate = require('./templates/docs/component.md');
const componentMDXTemplate = require('./templates/docs/component.mdx.js');
const introductionMDXTemplate = require('./templates/docs/introduction.mdx.js');

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

const generateComponentDocs = async (type, componentNameOne) => {
  introComponentsProps = [];
  let files = await glob(`packages/components/src/${type}/**/*.{ts,tsx}`, {
    ignore: ['**/*.{test,stories,styled}.{ts,tsx}', '**/index.{ts,tsx}']
  });
  const componentNames = files.map((file) => path.parse(file).name);

  if (componentNameOne) {
    const componentNameFound = files.find((file) => file.includes(`${componentNameOne}.tsx`));
    if (componentNameFound) {
      files = [componentNameFound];
    } else {
      console.log(preffix, clc.red('Component not found'));
      return;
    }
  }

  files.forEach((componentPath, index) => {
    try {
      const componentName = path.basename(componentPath, path.extname(componentPath));
      const componentNamesFilteredByName = componentNames
        .slice(0, index + 1)
        .filter((name) => name.startsWith(componentName.split('-')[0]));
      const isSubComponent = componentNamesFilteredByName.length > 1;
      const componentNameParent = isSubComponent ? componentNamesFilteredByName[0] : null;

      /**
       * Generate JSON schema from JSDoc
       */
      const jsdocSchema = last(
        jsdoc2md.getTemplateDataSync({
          files: componentPath,
          configure: './jsdoc2md.json'
        })
      );
      if (!isSubComponent) {
        introComponentsProps.push(parseComponentCardProps(componentPath, jsdocSchema));
      }

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
      const stories = getStories(componentPath, jsdocSchema, componentNameParent);
      const displayName = !isSubComponent
        ? componentDocs.displayName
        : [componentNameParent, componentName.replace(`${componentNameParent}-`, '')]
            .filter(Boolean)
            .map(capitalize)
            .join('.');

      /**
       * Generate file MDX
       */
      const documentationMDXPath = path.join(componentPath, '../') + 'readme.mdx';
      const rendererMDX = new RendererGenerator({
        template: componentMDXTemplate
      });
      writeFile(
        documentationMDXPath,
        rendererMDX.renderDoc(componentPath, {
          ...componentDocs,
          displayName,
          parentPath: componentNameParent,
          parentName:
            componentNameParent && componentNameParent.split('-').map(capitalize).join(''),
          imports: getCustomTag(jsdocSchema, 'imports'),
          stories: stories || {}
        }),
        'mdx'
      );

      /**
       * Generate file markdown
       */
      const documentationMDPath = path.join(componentPath, '../') + 'readme.md';
      const rendererMD = new RendererGenerator({
        template: componentMDTemplate
      });
      writeFile(
        documentationMDPath,
        rendererMD.renderDoc(componentPath, {
          ...componentDocs,
          displayName,
          parentPath: componentNameParent,
          parentName:
            componentNameParent && componentNameParent.split('-').map(capitalize).join(''),
          imports: getCustomTag(jsdocSchema, 'imports'),
          examples: get(jsdocSchema, 'examples')
        }),
        'mdx'
      );

      if (!isSubComponent) {
        console.log(
          preffix,
          clc.blue(componentName, '=>', componentPath),
          !stories ? `(No stories found)` : '',
          clc.green('✔')
        );
      } else {
        console.log(
          preffix,
          clc.blue(' ↳', componentName, '=>', componentPath),
          !stories ? `(No stories found)` : '',
          clc.green('✔')
        );
      }
    } catch (error) {
      console.log(
        preffix,
        clc.red('There was an error generating the documentation for', componentPath)
      );
      throw error;
    }
  });
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
  program.option('-t, --type <type>', 'component type');
  program.option('-c, --component <component>', 'component name');
  program.parse(process.argv);
  const options = program.opts();

  // Generate docs for custom component
  if (options && Object.keys(options).length > 0) {
    const type = get(options, 'type', '').replace('=', '');
    const componentNameOne = get(options, 'component', '').replace('=', '');

    console.log(preffix, '[UI] Generating documentation...');
    if (['ui', 'contexts'].includes(type)) {
      await generateComponentDocs('ui', componentNameOne);
    } else {
      console.log(preffix, clc.red('Invalid type'));
    }
    return;
  }

  console.log(preffix, '[UI] Generating documentation...');
  await generateComponentDocs('ui');
  await generateIntroductionDocs('ui');

  console.log(preffix, '[Contexts] Generating documentation...');
  await generateComponentDocs('contexts');
  await generateIntroductionDocs('contexts');

  console.log(preffix, clc.green('Documentation generated successfully!'));
};

generateAllDocs();
