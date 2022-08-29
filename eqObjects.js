const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) { //checking to see if lengths of the keys match or not
    return false;   //if they dont match return false 
  }
  for(let key of keys1) { 
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) { //checking to see if there are any arrays
      if(eqArrays(object1[key], object2[key]) === false) { //checks to see if the two arrays are equal using eqArrays function
        return false
      } 
    } else if (object1[key] !== object2[key]) { //checks to see if the two values of each objects key are equal
      return false
  } 
 }
 return true // returns true as all other checks have not returned false
};

module.exports = eqObjects;