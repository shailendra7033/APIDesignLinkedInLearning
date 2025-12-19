/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/test/**/*.test.ts'],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  detectOpenHandles: true,
  clearMocks: true,
};
