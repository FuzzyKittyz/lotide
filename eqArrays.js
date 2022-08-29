const eqArrays = function(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) { //converts each array to a JSON string and checks to see if both JSON strings are =
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;
