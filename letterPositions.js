const letterPositions = function(sentence) {
  const results = {}; // sets results = to a new object
  for (let i = 0; i < sentence.length; i++) { // uses a for let loop to loop through the sentence argument 
    if (!results[sentence[i]]) { // checks to see if there is no sentence[i] within the results object
      results[sentence[i]] = [];// if false it makes a new array within the object
    }
    results[sentence[i]].push(i);// if there already is sentence[i] within the object it then pushes a new i into the array to show  
  }                              // another position for sentence[i]
  return results;
};


module.exports = letterPositions;