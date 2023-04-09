/**
 * Jest configuration file.
 * 
 * Additional info:  
 * - {@link https://jestjs.io/docs/configuration Jest Docs - Configuring Jest}
 */

//Needed for resolving vari
const path = require('path');


/**
 * @description Converts aliases specified inside "jsconfig.json" to jest supported regex format.  
 * Function is used to avoid duplicate deceleration of aliases in both "jsconfig.json" and in "jest.config.js" 

 * Additional info:
 * - {@link https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring Jest Docs - Configuring Jest - moduleNameMapper }
 * 
 * @returns {Object} "jsconfig.json" aliases converted to Jest moduleNameMapper regex format.
 * @example
 * //will convert the provided path aliases (jsconfig.json):
 *    "paths": {"@/*": ["src/*"]}
 * //Into: 
 *    {@/(.*): '<rootDir>/src/$1'}
 */
function getAliases() {
  //Get the paths property info from jsconfig.json
  const jsConfigPath = path.resolve(__dirname, 'jsconfig.json');
  const jsConfig = require(jsConfigPath);
  const { paths } = jsConfig.compilerOptions;

  //Convert the aliases to jest supported format
  const aliases = {};
  for (const alias in paths) {
    const aliasPath = paths[alias][0];
    const aliasKey = `${alias.replace('/*', '/(.*)')}`;
    const aliasMapping = `<rootDir>/${aliasPath.replace('/*', '/$1')}`;
    aliases[aliasKey] = aliasMapping;
  }
  
  //Return converted aliases
  return aliases;
}


module.exports = {
    //Search for specified modules inside the "src" directory (resolves the error Jest failing to recognize path aliases defined inside "jsconfig.json")
    moduleDirectories: ["node_modules","src"],

    //Resolve aliases specified in "jsconfig.json" so Jest test files can recognize them correctly
    moduleNameMapper:   getAliases(),

    //Only look for test files in the test directory and all subdirectories.
    testMatch: ['**/test/**/*.test.js'],

    //Convert test files using babel so they are es2015 compatible (solves the " SyntaxError: Cannot use import statement outside a module")
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
      }
};