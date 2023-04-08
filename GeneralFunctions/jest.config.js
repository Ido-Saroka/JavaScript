/**
 * Jest configuration file.
 * 
 * Additional info:  
 * - {@link https://jestjs.io/docs/configuration Jest Docs - Configuring Jest}
 */
module.exports = {
    //Search for specified modules inside the "src" directory (resolves the error Jest failing to recognize path aliases defined inside "jsconfig.json")
    moduleDirectories: ["node_modules","src"],

    //Resolve "jsconfig.js" aliases so they can be used inside Jest test files 
    moduleNameMapper: {
      "@/(.*)": "<rootDir>/src/$1",
    },

    //Only look for test files in the test directory and all subdirectories.
    testMatch: ['**/test/**/*.test.js'],

    //Convert test files using babel so they are es2015 compatible (solves the " SyntaxError: Cannot use import statement outside a module")
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
      }
};