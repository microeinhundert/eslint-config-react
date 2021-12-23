const { resolvableFileExtensions } = require('./constants');

module.exports = [
  {
    files: ['*.{test,spec}.{js,jsx,ts,tsx}'],
    plugins: ['cypress'],
    extends: ['plugin:cypress/recommended'],
  },
  {
    files: ['*.fixture.{js,jsx,ts,tsx}'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  {
    files: ['*.{ts,tsx}'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
    ],
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': resolvableFileExtensions,
      },
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];
