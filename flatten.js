const flatten = function(arr){
 if(Array.isArray(arr) === true){ //checks to see if the arr is infact an array 
  let newArr = arr.flat();// if that check is true then a newArr var is created and is equal to the original Array(arr) flattened using 
  return newArr           // the .flat() built in function 
 } else {
  return 'Not an array'   // if arr is not an array then a string saying that it is not an array is returned
 }
};

module.exports = flatten;
