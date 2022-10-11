module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testRegex: '(/__tests__/.*|\\.tests?)\\.(ts|tsx)$',
  moduleNameMapper: {
    '@react-jopau/utils': '<rootDir>/packages/utils/src',
    '@react-jopau/utils/(.*)$': '<rootDir>/packages/utils/src/$1',
    '@react-jopau/hooks/(.*)$': '<rootDir>/packages/hooks/src/$1'
  }
};
