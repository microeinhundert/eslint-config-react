const resolvableFileExtensions = ['.js', '.jsx', '.ts', '.tsx'];

module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  plugins: ['import', 'simple-import-sort', 'sonarjs', 'formatjs', 'prettier'],
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
  rules: {
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
    'prettier/prettier': 'error',
  },
  overrides: [
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
          2,
          {
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
