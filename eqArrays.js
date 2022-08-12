const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: [${actual}] !== [${expected}]`);
  }
};


const eqArrays = function(x, y){
  if (JSON.stringify(x) === JSON.stringify(y)){
    return true
  } else {
    return false
  }
  
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);