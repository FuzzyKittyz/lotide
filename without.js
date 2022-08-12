const without = function(source, itemsToRemove){
return source.filter(source => !itemsToRemove.includes(source))
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]



const assertArraysEqual = function(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    console.log(`✅✅✅  Array Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`🛑🛑🛑 Array Assertion failed: [${a}] !== [${b}]`);
  }
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);