const takeUntil = function(array, cb) {
  let results = []; //creates empty array = results var
  for (let i = 0; i < array.length; i++) { //loops through the array
    if (cb(array[i])) { //calls the cb function and sees if array[i] passes through the function as true
      return results;// if it is true then return results
    } else {
      results.push(array[i]); //if its not true then push array[i] into the results array
    }
  }
  return results;
};

module.exports = takeUntil;
