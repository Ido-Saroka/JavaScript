import { isArrayValid,filterInPlace } from '@/arrays.js'

 
/**
 *  Tests for {@link isArrayValid} 
*/
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


/**
 *  Tests for {@link filterInPlace} 
*/
  describe("'filterInPlace' tests", () => {
    // prettier-ignore
    test.each([
      //Null predicate (no filtering should be performed)
      {arrayToTest: [1,2,5,8,11,254,111], filterPredicate: null, expected: [1,2,5,8,11,254,111]},
      //Basic null testing
      {arrayToTest: null, filterPredicate: (num) => num%2 === 0, expected: null},
      //Check filtering of non even numbers
      {arrayToTest: [1,2,5,8,11,254,111], filterPredicate: (num) => num%2 === 0, expected: [2,8,254]}
  ])(
    '.filterInPlace($arrayToTest, filterPredicate)',
    ({ arrayToTest, filterPredicate, expected }) => {
      filterInPlace(arrayToTest,filterPredicate);
      expect(arrayToTest).toEqual(expected);
    }
  );
  });