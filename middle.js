const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  const arrMid = arr.length / 2;
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    return [arr[Math.floor(arrMid)]];
  } else if (arr.length % 2 === 0) {
    return [ 
      arr[arrMid - 1],
      arr[arrMid],
    ];
  }
};

module.exports = middle;
