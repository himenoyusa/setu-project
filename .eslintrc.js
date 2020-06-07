module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    'import/resolver': {
      // node: {
      //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
      // },
      webpack: {
        config: './config/webpack.config.js',
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    camelcase: 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
};
