module.exports = {
    env: {
      es6: true,
      jest: true,
    },
    extends: [
      //Wesbos plugin support
      'wesbos',
      // Provide a set of recommended ESLint rules for ES6 and Jest
      'plugin:jest/recommended'],
    plugins: ['jest'],
    rules: {
      //Does not allow identical test titles
      'jest/no-identical-title': 'error',
      //Enforce valid jest expectations, additional info: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
      'jest/valid-expect': 'error',
    },
};