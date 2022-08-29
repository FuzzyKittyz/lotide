const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  for (const key of keys) { //loops through key of keys
    if (object[key] === value) { //checks to see if object[key] === to the value you give to check
      return key; //returns the key if it equals the value 
    }
  }
};

module.exports = findKeyByValue;