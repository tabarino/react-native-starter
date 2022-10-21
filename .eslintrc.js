module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-alert': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'prettier/prettier': ['error', { jsxSingleQuote: true }],
  },
};
