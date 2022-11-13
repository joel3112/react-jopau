const fs = require('fs');
const path = require('path');
const clc = require('cli-color');
const { kebabCase } = require('lodash');
const { promptInput, promptSelect } = require('./utils/prompt');
const RendererGenerator = require('./utils/renderer-generator.js');
const { writeFile } = require('./utils/schema');

const createComponent = async () => {
  console.log(clc.green('Creating component...'));

  const name = await promptInput('Component name', 'my-component', kebabCase);
  const type = await promptSelect('Component category', [
    'display',
    'feedback',
    'forms',
    'layout',
    'media',
    'overlay',
    'typography'
  ]);

  const files = [
    {
      name: 'component',
      path: `packages/components/src/ui/${type}/${name}/${name}.tsx`,
      templatePath: './templates/create/component.tsx.js'
    },
    {
      name: 'stories',
      path: `packages/components/src/ui/${type}/${name}/${name}.stories.tsx`,
      templatePath: './templates/create/component.stories.tsx.js'
    },
    {
      name: 'test',
      path: `packages/components/src/ui/${type}/${name}/${name}.test.tsx`,
      templatePath: './templates/create/component.test.tsx.js'
    },
    {
      name: 'styled',
      path: `packages/components/src/ui/${type}/${name}/${name}.styled.ts`,
      templatePath: './templates/create/component.styled.ts.js'
    }
  ];

  for (const file of files) {
    try {
      fs.mkdirSync(path.parse(file.path).dir, { recursive: true });
      const template = require(file.templatePath);
      const renderer = new RendererGenerator({ template });
      await writeFile(
        file.path,
        renderer.renderComponent(file.templatePath, {
          componentName: name,
          componentType: type
        }),
        'typescript'
      );
      console.log(` * ${file.name} => ${file.path}`, clc.green('✔'));
    } catch (error) {
      console.log(clc.red(`There was an error creating the ${file.name}.`));
      throw error;
    }
  }

  console.log(clc.green('Component created!'));
};

createComponent();
