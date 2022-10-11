const commonConfig = (name) => ({
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  displayName: `@react-jopau/${name}`,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [`<rootDir>/packages/${name}/__tests__/*.test.ts`],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'
  }
});

module.exports = {
  projects: [
    {
      ...commonConfig('utils')
    },
    {
      ...commonConfig('hooks'),
      moduleNameMapper: {
        '@react-jopau/utils/(.*)$': '<rootDir>/packages/utils/src/$1',
        '@react-jopau/hooks/(.*)$': '<rootDir>/packages/hooks/src/$1'
      }
    }
  ]
};
