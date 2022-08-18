const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let actualKeys = Object.keys(actual);
  let expectedKeys = Object.keys(expected);
  if (actualKeys.length === expectedKeys.length) {
    if (actualKeys.every(key => actual[key] === expected[key])) {
      return `✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`;
    }
  }
  return  `🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`;
};

console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));