const assertEqual = function(actual, expected) {
  if (actual === expected) { // checks to see if actual is equal to expected or not
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertEqual;