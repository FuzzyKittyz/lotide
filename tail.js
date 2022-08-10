const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: [${actual}] !== [${expected}]`);
  }
};

const tail = function(array) {
  const _ = require("lodash");
  let tailElm = _.tail(array);
  console.log(tailElm);
}; 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3); 