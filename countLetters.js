function countLetters(sentence) {
  let obj = {}
  for(const character of sentence){
    if(obj [character]){
      obj[character] += 1; 
    } else {
      obj[character] = 1;
    }
  }
  return obj
}
console.log(countLetters('LHL'));



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: [${actual}] !== [${expected}]`);
  }
};