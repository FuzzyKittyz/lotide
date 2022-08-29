function countLetters(sentence) {
  let obj = {} //sets an empty object to obj 
  for(const character of sentence){ //loops each character in the sentence
    if(obj[character]){ // checks to see if the specific character from the sentence is present in obj
      obj[character] += 1; //if it is present it will add +1 to the count 
    } else {
      obj[character] = 1;// if it is not present it will at the character to the object and set it = to 1 
    }
  }
  return obj
}

module.exports = countLetters