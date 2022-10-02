module.exports = {
  '**/*.(ts|tsx)': () => 'yarn type-check',

  '**/*.(ts|tsx|js|jsx)': (filenames) => [
    `yarn lint --fix . ${filenames.join(' ')}`,
    `yarn format ${filenames.join(' ')}`
  ],

  '**/*.(md|json|yml)': (filenames) => `yarn format ${filenames.join(' ')}`
};
