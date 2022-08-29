const assertArraysEqual = function(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) { //converts each array to JSON strings and tests to see if the strings are identical
    console.log(`✅✅✅  Array Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Array Assertion failed: [${arr1}] !== [${arr2}]`);
  }
};

module.exports = assertArraysEqual;
