module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@react-jopau/utils': '<rootDir>/packages/utils/src',
    '@react-jopau/utils/(.*)$': '<rootDir>/packages/utils/src/$1'
  }
};
