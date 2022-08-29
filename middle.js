const middle = function(arr) {
  const arrMid = arr.length / 2; // creates a var that takes the arr length and devides it by 2 
  if (arr.length <= 2) { // checks to see if the arr length is less then or equal to 2
    return []; //if it is then return an emmpty array
  } else if (arr.length % 2 !== 0) { //checks to see if the length is not devisable by 2 (odd amount of elements in the array)
    return [arr[Math.floor(arrMid)]]; //if it is odd then return the floored arrMid index of the arr
  } else if (arr.length % 2 === 0) {// checks to see if devisable by 2 (even amount of elements in the array)
    return [ 
      arr[arrMid - 1], //returns the first element which is [arrMid - 1]
      arr[arrMid]// returns the second element which is just [arrMid]
    ];
  }
};

module.exports = middle;
