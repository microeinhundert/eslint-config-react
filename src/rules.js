module.exports = {
  // React
  'react/jsx-sort-props': [
    'error',
    {
      callbacksLast: true,
      shorthandLast: true,
      reservedFirst: true,
    },
  ],
  'react/prop-types': 'off',
  'react/display-name': 'off',
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'react-hooks/exhaustive-deps': 'off',

  // Formatjs
  'formatjs/enforce-id': [
    'error',
    {
      idInterpolationPattern: '[sha512:contenthash:base64:6]',
    },
  ],
  'formatjs/enforce-placeholders': 'error',

  // Import
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    },
  ],
  'import/extensions': [
    'error',
    {
      js: 'never',
      ts: 'never',
      json: 'always',
    },
  ],
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
  'import/prefer-default-export': 'off',
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',

  // Sonarjs
  'sonarjs/no-duplicate-string': 'off',
  'sonarjs/no-nested-template-literals': 'off',

  // Other
  camelcase: 'off',
  'no-shadow': 'off',
  'no-bitwise': 'off',
  'no-nested-ternary': 'off',
  'no-empty-pattern': 'off',
  'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
  'jsx-a11y/anchor-is-valid': 'off',
  'prettier/prettier': [
    'error',
    {
      semi: true,
      trailingComma: 'all',
      singleQuote: true,
      printWidth: 80,
    },
    {
      usePrettierrc: false,
    },
  ],
};
