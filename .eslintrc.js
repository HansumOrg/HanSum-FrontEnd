module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  env: {
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  root: true,
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'warn',
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
    {
      // feel free to replace with your preferred file pattern - eg. 'src/**/*Slice.ts'
      files: ['api/**/*Slice.ts'],
      // avoid state param assignment
      rules: { 'no-param-reassign': ['error', { props: false }] },
    },
  ],
};
