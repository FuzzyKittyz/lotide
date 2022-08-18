const findKey = function(obj, cb) {
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    if (cb(obj[keys[i]])) {
      return keys[i];
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));