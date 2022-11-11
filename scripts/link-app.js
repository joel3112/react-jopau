const { execSync } = require('child_process');
const clc = require('cli-color');

const separator = () => {
  console.log(
    '===================================================================================================='
  );
};

const getPackageNames = async () => {
  const packages = execSync('lerna ls --json --all --scope @react-jopau/*');
  return JSON.parse(packages.toString()).map((p) => p.name);
};

const buildPackages = async () => {
  console.log(clc.yellow('Building packages...'));
  await execSync('yarn build', { stdio: 'inherit' });
  console.log(clc.green('Build complete!'));
};

const preparePackages = async () => {
  console.log(clc.yellow('Prepare packages...'));
  await execSync('lerna run prepublishOnly --sort --concurrency 1', { stdio: 'inherit' });
  console.log(clc.green('Prepare complete!'));
};

const createLinkPackages = async () => {
  console.log(clc.yellow('Create link packages...'));
  await execSync('lerna exec --scope @react-jopau/* -- "cd dist && yarn link"', {
    stdio: 'inherit'
  });
  console.log(clc.green('Linking complete!'));
};

const installPackages = async (appName) => {
  console.log(clc.yellow(`Installing packages to app "${appName}"...`));
  const packages = await getPackageNames();
  await execSync(`cd apps/${appName} && yarn add ${packages.join(' ')}`, {
    stdio: 'inherit'
  });
  console.log(clc.green('Install complete!'));
};

const linkApp = async () => {
  const appName = process.argv.slice(2)[0];

  separator();
  await buildPackages();
  separator();
  await preparePackages();
  separator();
  await createLinkPackages();
  separator();

  if (appName) {
    await installPackages(appName);
    separator();

    console.log(clc.yellow(`Linking package to app "${appName}"...`));
    const packages = await getPackageNames();
    await execSync(`cd apps/${appName} && yarn link ${packages.join(' ')}`, {
      stdio: 'inherit'
    });
    console.log(clc.green(`Following packages linked to app "${appName}":`));
    console.log(packages);
  }
};

linkApp();
