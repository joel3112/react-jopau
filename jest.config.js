module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@jopau-react/utils': '<rootDir>/packages/utils/src',
    '@jopau-react/utils/(.*)$': '<rootDir>/packages/utils/src/$1',
    '@jopau-react/hooks/(.*)$': '<rootDir>/packages/hooks/src/$1'
  }
};
