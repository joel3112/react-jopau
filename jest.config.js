const commonConfig = (name) => ({
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  displayName: `@react-jopau/${name}`,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'
  }
});

/** @type {import('jest').Config} */
module.exports = {
  projects: [
    {
      ...commonConfig('utils'),
      testMatch: ['<rootDir>/packages/utils/**/*.test.ts'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      moduleNameMapper: {
        '^lodash-es$': 'lodash'
      }
    },
    {
      ...commonConfig('styles'),
      testMatch: ['<rootDir>/packages/styles/**/*.test.ts'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      moduleNameMapper: {
        '^lodash-es$': 'lodash',
        '@react-jopau/utils': '<rootDir>/packages/utils/src'
      }
    },
    {
      ...commonConfig('hooks'),
      testMatch: ['<rootDir>/packages/hooks/**/*.test.ts'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      moduleNameMapper: {
        '^lodash-es$': 'lodash',
        '@react-jopau/utils': '<rootDir>/packages/utils/src',
        '@react-jopau/shared/(.*)$': '<rootDir>/packages/shared/src/$1',
        '@react-jopau/styles': '<rootDir>/packages/styles/src',
        '@react-jopau/components/(.*)$': '<rootDir>/packages/components/src/$1'
      }
    },
    {
      ...commonConfig('components'),
      testMatch: ['<rootDir>/packages/components/**/*.test.tsx'],
      moduleNameMapper: {
        '^lodash-es$': 'lodash',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '@react-jopau/utils': '<rootDir>/packages/utils/src',
        '@react-jopau/shared/(.*)$': '<rootDir>/packages/shared/src/$1',
        '@react-jopau/styles': '<rootDir>/packages/styles/src',
        '@/components/(.*)$': '<rootDir>/packages/components/src/$1'
      }
    }
  ]
};
