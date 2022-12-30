const { execSync } = require('child_process');
const clc = require('cli-color');
const { program } = require('commander');

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

const linkApp = async () => {
  program.argument('<appName>', 'application name');
  program.option('-b, --build', 'require build');
  program.parse(process.argv);
  const options = program.opts();
  const args = program.args;
  const appName = args[0];
  const requireBuild = options && options.build;

  separator();

  if (requireBuild) {
    await buildPackages();
    separator();
    await preparePackages();
    separator();
    await createLinkPackages();
    separator();
  }

  if (appName) {
    console.log(clc.yellow(`Linking package to app "${appName}"...`));
    const packages = await getPackageNames();
    const packagesNoApps = packages.filter((p) => !p.includes('@react-jopau/app'));

    if (packages.includes(`@react-jopau/app-${appName}`)) {
      packagesNoApps.forEach((packageName) => {
        execSync(`lerna add ${packageName} --scope=@react-jopau/app-${appName}`, {
          stdio: 'inherit'
        });
      });
      console.log(clc.green(`Following packages linked to app "${appName}":`));
      console.log(packagesNoApps);
      return;
    }
    console.log(clc.red(`App "${appName}" not found!`));
  }
};

linkApp();
