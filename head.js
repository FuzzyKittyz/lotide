const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: [${actual}] !== [${expected}]`);
  }
};

const head = function(array) {
  const _ = require('lodash');
  let firstElm = _.head(array);
  console.log(firstElm);
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


