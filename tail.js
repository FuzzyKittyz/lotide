const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if(i > 0){
      newArr.push(array[i])
    }
  };
  return newArr
}; 

module.exports = tail;