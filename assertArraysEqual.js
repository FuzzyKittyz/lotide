
const eqArrays = function(x, y) {
  if (JSON.stringify(x) === JSON.stringify(y)) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    console.log(`✅✅✅  Array Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`🛑🛑🛑 Array Assertion failed: [${a}] !== [${b}]`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);