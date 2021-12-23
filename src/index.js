const rules = require('./rules');
const overrides = require('./overrides');
const { resolvableFileExtensions } = require('./constants');

module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  plugins: [
    'import',
    'simple-import-sort',
    'sonarjs',
    'formatjs',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwind/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: resolvableFileExtensions,
      },
      alias: {
        extensions: resolvableFileExtensions,
      },
    },
    react: {
      version: '17',
    },
  },
  rules,
  overrides,
};
