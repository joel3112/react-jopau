const fs = require('fs');
const path = require('path');
const clc = require('cli-color');
const glob = require('glob-promise');
const { kebabCase, uniq } = require('lodash');
const { promptInput, promptSelect, promptToggle, promptAutoComplete } = require('./utils/prompt');
const RendererGenerator = require('./utils/renderer-generator.js');
const { writeFile } = require('./utils/schema');

const parentComponents = async () => {
  const files = await glob('packages/components/src/ui/**/*.tsx');
  const parents = files
    .map((f) => path.parse(f).dir)
    .map((f) => (f.split('/').length === 6 ? f : null));

  return uniq(parents.filter((p) => p !== null));
};

const generateFiles = async (files, props) => {
  return new Promise(async (resolve, reject) => {
    let currentFile = null;
    try {
      for (const file of files) {
        currentFile = file;
        fs.mkdirSync(path.parse(file.path).dir, { recursive: true });
        const template = require(file.templatePath);
        const renderer = new RendererGenerator({ template });
        await writeFile(file.path, renderer.renderComponent(props), 'typescript');
        console.log(` * ${file.name} => ${file.path}`, clc.green('✔'));
      }
      resolve();
    } catch (error) {
      console.log(
        clc.red(`There was an error creating the ${currentFile.name} in ${currentFile.path}.`)
      );
      reject(error);
    }
  });
};

const createSubComponent = async (name, ref) => {
  const parentPaths = await parentComponents();
  const parentName = await promptAutoComplete(
    'Parent component?',
    parentPaths.map((p) => p.split('/').pop())
  );
  const parentPath = parentPaths.find((p) => p.split('/').includes(parentName));
  const files = [
    {
      name: 'component',
      path: `${parentPath}/${name}/${parentName}-${name}.tsx`,
      templatePath: !ref
        ? './templates/create/component-sub.tsx.js'
        : './templates/create/component-sub-ref.tsx.js'
    },
    {
      name: 'props',
      path: `${parentPath}/${name}/${parentName}-${name}.props.ts`,
      templatePath: './templates/create/component-sub.props.ts.js'
    },
    {
      name: 'stories',
      path: `${parentPath}/${name}/${parentName}-${name}.stories.tsx`,
      templatePath: './templates/create/component-sub.stories.tsx.js'
    }
  ];

  generateFiles(files, {
    parentComponentName: parentName,
    componentName: name,
    type: path.parse(parentPath).dir.split('/').pop()
  })
    .then(() => {
      console.log(clc.green('Component created!'));
    })
    .catch((error) => {
      throw error;
    });
};

const createComponent = async () => {
  console.log(clc.green('Creating component...'));

  const name = kebabCase(await promptInput('Component name', 'example', kebabCase));
  const ref = await promptToggle('Should the component be a ref?', false);
  const isSubComponent = await promptToggle('Is this a subcomponent?', false);

  if (isSubComponent) {
    await createSubComponent(name, ref);
    return;
  }

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
      templatePath: !ref
        ? './templates/create/component.tsx.js'
        : './templates/create/component-ref.tsx.js'
    },
    {
      name: 'props',
      path: `packages/components/src/ui/${type}/${name}/${name}.props.ts`,
      templatePath: './templates/create/component.props.ts.js'
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

  generateFiles(files, { componentName: name, componentType: type })
    .then(() => {
      console.log(clc.green('Component created!'));
    })
    .catch((error) => {
      throw error;
    });
};

const createContextProvider = async () => {
  console.log(clc.green('Creating context provider...'));

  const name = kebabCase(
    await promptInput('Provider name (without "provider" word)', 'example', kebabCase)
  );

  const files = [
    {
      name: 'provider',
      path: `packages/components/src/contexts/${name}/${name}-context.tsx`,
      templatePath: './templates/create/context-provider.tsx.js'
    },
    {
      name: 'props',
      path: `packages/components/src/contexts/${name}/${name}-context.props.ts`,
      templatePath: './templates/create/context-provider.props.ts.js'
    },
    {
      name: 'stories',
      path: `packages/components/src/contexts/${name}/${name}-context.stories.tsx`,
      templatePath: './templates/create/context-provider.stories.tsx.js'
    },
    {
      name: 'test',
      path: `packages/components/src/contexts/${name}/${name}-context.test.tsx`,
      templatePath: './templates/create/context-provider.test.tsx.js'
    }
  ];

  generateFiles(files, { componentName: name })
    .then(() => {
      console.log(clc.green('Context provider created!'));
    })
    .catch((error) => {
      throw error;
    });
};

const createHook = async () => {
  console.log(clc.green('Creating hook...'));

  const name = kebabCase(await promptInput('Hook name (without "use" word)', 'example', kebabCase));

  const files = [
    {
      name: 'hook',
      path: `packages/hooks/src/use-${name}/use-${name}.ts`,
      templatePath: './templates/create/hook.ts.js'
    },
    {
      name: 'stories',
      path: `packages/hooks/src/use-${name}/use-${name}.stories.tsx`,
      templatePath: './templates/create/hook.stories.tsx.js'
    },
    {
      name: 'test',
      path: `packages/hooks/src/use-${name}/use-${name}.test.ts`,
      templatePath: './templates/create/hook.test.ts.js'
    }
  ];

  generateFiles(files, { componentName: name })
    .then(() => {
      console.log(clc.green('Hook created!'));
    })
    .catch((error) => {
      throw error;
    });
};

const create = async () => {
  const type = await promptSelect('What do you want to create?', [
    'component',
    'context provider',
    'hook'
  ]);

  switch (type) {
    case 'component':
      await createComponent();
      break;
    case 'context provider':
      await createContextProvider();
      break;
    case 'hook':
      await createHook();
      break;
    default:
      console.log(clc.red('Invalid selection'));
  }
};

create();
