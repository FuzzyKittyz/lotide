const flatten = function(arr){
 if(Array.isArray(arr) === true){
  let newArr = arr.flat();
  return newArr
 } else {
  return 'Not an array'
 }
};


