const countOnly = function(allItems, itemsToCount) {
  const results = {}; //empty object set to results var
  for (const item of allItems) { //loops through each item in the allitems object
    if (itemsToCount[item]) {// checks if the item is found within the itemsToCount Object
      if (results[item]) {// if the item is found check if the item is within the results object
        results[item] += 1;//if it is found then add +1 to the count
      } else {
        results[item] = 1;//else if its not found add the item to the results object and set the count at 1
      }
    }
  }
  return results;
};

module.exports = countOnly;