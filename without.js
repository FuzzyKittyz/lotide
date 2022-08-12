const without = function(source, itemsToRemove){
  let toFilt = parseInt(itemsToRemove)
  const filtered = source.filter(source => source !== toFilt)
  return filtered
}

const assertArraysEqual = function(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    console.log(`✅✅✅  Array Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`🛑🛑🛑 Array Assertion failed: [${a}] !== [${b}]`);
  }
};

console.log(without([1, 2, 3], [1]) )

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);