const findKey = function(obj, cb) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) { //loops throught key using for let loop
    if (cb(obj[keys[i]])) { //checks to see if obj[key[i]] passes through the cb function
      return keys[i]; //returns first object[key[i]] that does pass through the cb function
    }
  }
};

module.exports = findKey;