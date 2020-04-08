module.exports = {
  root: true,

  plugins: ['react'],

  extends: ['contactlab/typescript', 'prettier'],

  env: {
    jest: true
  },

  rules: {
    // --- react
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  },

  settings: {
    react: {
      pragma: 'h'
    }
  },

  overrides: [
    {
      // --- disable typescript rules for tests files
      files: ['*.spec.ts*', '*.e2e.ts*'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
};
