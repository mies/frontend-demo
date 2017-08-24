module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: ['flowtype', 'react', 'jsx-a11y', 'prettier'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }], // override some prettier defaults
    'react/jsx-filename-extension': 'off', // we're using .js for everything
    'react/sort-comp': 'off', // need to disable this to allow flowtype prop types
    'import/no-extraneous-dependencies': 'off', // disable errors from example dependencies
    'react/display-name': 'warn', // warning is enough
  },
};
