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
      testMatch: ['<rootDir>/packages/utils/__tests__/*.test.ts'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
    },
    {
      ...commonConfig('hooks'),
      testMatch: ['<rootDir>/packages/hooks/__tests__/*.test.ts'],
      moduleNameMapper: {
        '@react-jopau/utils/(.*)$': '<rootDir>/packages/utils/src/$1',
        '@react-jopau/hooks/(.*)$': '<rootDir>/packages/hooks/src/$1'
      },
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
    },
    {
      ...commonConfig('components'),
      testMatch: ['<rootDir>/src/**/*.test.tsx'],
      moduleNameMapper: {
        '@types': '<rootDir>/types.d.ts'
      },
      rootDir: 'packages/components'
    }
  ]
};
