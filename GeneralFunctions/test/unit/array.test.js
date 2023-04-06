import { isArrayValid } from '@/arrays.js'

 
describe("'isArrayValid' tests", () => {
    // prettier-ignore
    test.each([
      {arrayToTest: null, expected: false},
      {arrayToTest: [1,2,3,4,5], expected: true},
      {arrayToTest: [1,2,3,null,5], expected: true},
  ])(
    '.isArrayValid($arrayToTest)',
    ({ arrayToTest, expected }) => {
      expect(isArrayValid(arrayToTest)).toBe(expected);
    }
  );
  });


  