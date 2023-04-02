//import { isArrayValid } from '../../src/arrays.js'

import { isArrayValid } from '@/arrays.js'

 
describe("'isArrayValid' tests", () => {
    // prettier-ignore
    test.each([
      {arrayToTest: null, expected: false},
  ])(
    '.isArrayValid($arrayToTest)',
    ({ arrayToTest, expected }) => {
      expect(isArrayValid(arrayToTest)).toBe(expected);
    }
  );
  });


  