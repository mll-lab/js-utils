module.exports = {
  extends: [
    '@mll-lab/eslint-config',
    'plugin:@mll-lab/recommended',
  ],
  plugins: [],
  ignorePatterns: ['dist'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
  },
  rules: {
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'default-case': 'off', // Replaced by @typescript-eslint/switch-exhaustiveness-check
    'import/no-unresolved': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
  },
};
