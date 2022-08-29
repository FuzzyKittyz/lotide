# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fuzzykittyz/lotide`

**Require it:**

`const _ = require('@fuzzykittyz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: checks to see if 2 arrays are equal or not 
* `assertEqual(actual, expected)`: checks to see if 2 primitives are equal or not 
* `assertObjectsEqual(actual, expected)`: checks to see if 2 objects with no arrays are equal 
* `countLetters(sentence)`: takes in a string and counts the letter and how many times they appear in the string 
* `countOnly(allItems, itemsToCount)`: counts the items from itemsToCount in allItems 
* `eqArrays(arr1, arr2)`: function that checks if 2 arrays are the same
* `eqObjects(object1, object2)`: chceks to see if 2 objects are equal
* `findKey(obj, cb)`: checks the obj using the cb function and returns the first value in obj that passes the cb function as true 
* `findKeyByValue(object, value)`: checks the obj for a given value and returns the first thing that is equal to that value
* `flatten(arr)`: flattens a given array using the built in .flat() function 
* `head(array)`: returns the first element of a given array
* `letterPosition(sentence)`: returns arrays of each letter and their locations as indices within an array
* `map(array, callback)`: a function that uses the built in .map() function
* `middle(arr)`: takes in an array and returns the middle element or two middle elements in an array (depending on if the amount of elements is odd or even)
* `tail(arr)`: returns everything in a given array but the first element 
* `takeUntil(array, cb)`: returns a new array that takes in every element of the original array till the element returns true when passed through the callback function 
* `without(source, itemsToRemove)`: removes items in itemsToRemove from the source and returns source without them