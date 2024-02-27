module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  roots: ['src'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  testPathIgnorePatterns: ['node_modules/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/*.test.ts'],
};
