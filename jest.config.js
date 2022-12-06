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
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
    },
    {
      ...commonConfig('styles'),
      testMatch: ['<rootDir>/packages/styles/**/*.test.ts'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      moduleNameMapper: {
        '@react-jopau/utils/(.*)$': '<rootDir>/packages/utils/src/$1'
      }
    },
    {
      ...commonConfig('hooks'),
      testMatch: ['<rootDir>/packages/hooks/**/*.test.ts'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      moduleNameMapper: {
        '@react-jopau/utils/(.*)$': '<rootDir>/packages/utils/src/$1',
        '@react-jopau/styles/(.*)$': '<rootDir>/packages/styles/src/$1'
      }
    },
    {
      ...commonConfig('components'),
      testMatch: ['<rootDir>/packages/components/**/*.test.tsx'],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '@apps/example': '<rootDir>/apps/example/src/App.tsx',
        '@react-jopau/utils/(.*)$': '<rootDir>/packages/utils/src/$1',
        '@react-jopau/styles/(.*)$': '<rootDir>/packages/styles/src/$1',
        '@react-jopau/hooks': '<rootDir>/packages/hooks/src',
        '@react-jopau/components/(.*)$': '<rootDir>/packages/components/src/$1'
      }
    }
  ]
};
