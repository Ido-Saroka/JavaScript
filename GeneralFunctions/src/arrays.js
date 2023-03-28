/**
 * Validates that the received array is defined its length is greater then zero
 * @param {Array} arrayToTest 
 * @returns 
 */
function isArrayValid(arrayToTest) {
  if (arrayToTest == null || arrayToTest.length === 0) {
    return false;
  }
  return true;
}

/**
 * Filters an array based on a provided predicate.
 * @param {Array} array - the array that will be filtered.
 * @param {*} predicate  - the filtering condition.
 * @returns nothing (only the matching elements will remain in the array).
 * @example
 * let numbersToFilter = [1,2,5,8,11,254,111]
 * //numbersToFilter Output will be: [2, 8, 254]
 * filterInPlace(numbersToFilter, (num)=> num%2 === 0)
 */
export const filterInPlace = (array, predicate) => {
  try {
    // Validate received arguments
    if (!isArrayValid(array) || predicate == null) {
      return null;
    }
    let end = 0;
    for (let i = 0; i < array.length; i += 1) {
      const obj = array[i];
      if (predicate(obj)) {
        array[end++] = obj;
      }
    }
    array.length = end;
    
  } catch (exception) {
    console.log(`Exception while filtering array: ${exception}`);
  }
};
