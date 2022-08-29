const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let actualKeys = Object.keys(actual); 
  let expectedKeys = Object.keys(expected);
  if (actualKeys.length === expectedKeys.length) { //checks to see if the lengths of the keys: are the same 
    if (actualKeys.every(key => actual[key] === expected[key])) { //checks to see if every actual[key] is equal to every expected[key]
      return `✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`;
    }
  }
  return  `🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`;
};

module.exports = assertObjectsEqual;