module.exports = {
  root: true,

  plugins: ['react'],

  extends: ['contactlab/typescript', 'prettier/@typescript-eslint'],

  env: {
    jest: true
  },

  settings: {
    react: {
      pragma: 'h'
    }
  },

  rules: {
    // --- TypeScript
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false
        },
        extendDefaults: true
      }
    ],

    // --- React
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  },

  overrides: [
    {
      // --- Disable TypeScript rules for tests files
      files: ['*.spec.ts*', '*.e2e.ts*'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
};
