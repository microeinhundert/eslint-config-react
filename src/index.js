const rules = require('./rules');
const overrides = require('./overrides');
const { resolvableFileExtensions } = require('./constants');

module.exports = {
  env: {
    es2021: true,
    browser: true,
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
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: resolvableFileExtensions,
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules,
  overrides,
};
