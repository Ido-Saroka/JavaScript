function isArrayValid(arrayToTest) {
  if (arrayToTest == null || arrayToTest.length === 0) {
    return false;
  }
  return true;
}

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
    console.log('Test');
  } catch (exception) {
    console.log(`Exception while filtering array: ${exception}`);
  }
};
