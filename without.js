const without = function(source, itemsToRemove){
return source.filter(source => !itemsToRemove.includes(source))
}
 
// checks to see if itemsToRemove includes anything in the source array, if it does it filters it out and returns a filtered array of source withouth anything elements that match the itemsToRemove array elements 

module.exports = without;