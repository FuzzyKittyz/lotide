const tail = function(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) { //for let loop to loop through the array
    if(i > 0){ //checks to see if the index(i) is greater than 0
      newArr.push(array[i]) //if it is greater then push array[i] into newArr
    }
  };
  return newArr
}; 

module.exports = tail;