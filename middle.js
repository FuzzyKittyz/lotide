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

console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));