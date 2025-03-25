module.exports = {
  root: true,
  extends: 'eslint-config-airbnb',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'react/jsx-filename-extension': 'off',
        'react/function-component-definition': 'off',
        'no-use-before-define': 'off',
        semi: 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
