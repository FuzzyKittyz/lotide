const map = function(array, callback) {
  const results = [];
  for (let item of array) { //loops each item of array
    results.push(callback(item)); //pushes the item while passed through the callback function into the results array
  }
  return results;
};

module.exports = map;

