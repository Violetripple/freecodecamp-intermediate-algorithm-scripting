/**
 * Make a function that looks through an array of objects (first argument) and
 * returns an array of all objects that have matching name and value pairs
 * (second argument). Each name and value pair of the source object has to be
 * present in the object from the collection if it is to be included in the
 * returned array.
 */

'use strict';

// solution 1
function whatIsInAName(collection = [{}], source = {}) {
  const result = [];
  const srcKeys = Object.keys(source); // get all source object keys.
  collection.forEach((item) => {
    // loop collection object items.
    const itemKeys = Object.keys(item); // get all keys of an item.
    if (itemKeys.length < srcKeys.length) return; // item keys should be more.
    for (const i in source) {
      // loop source object keys.
      if (!itemKeys.includes(i)) return; // every source key should be included.
      if (source[i] !== item[i]) return; // and their values should be equal.
    }
    result.push(item);
  });
  return result;
}

// solution 2
function whatIsInAName2(collection = [{}], source = {}) {
  const result = [];
  // use for loop with return statements will terminate whatIsInAName2 function.
  collection.forEach((o) => {
    for (const i in source) {
      if (!o[i]) return;
      if (source[i] !== o[i]) return;
    }
    result.push(o);
  });
  return result;
}

// solution 3
function whatIsInAName3(collection = [{}], source = {}) {
  return collection.filter((item) => {
    for (const i in source) {
      if (!item[i]) return false;
      if (source[i] !== item[i]) return false;
    }
    return true;
  });
}

// solution 4
function whatIsInAName4(collection = [{}], source = {}) {
  const srcKeys = Object.keys(source);
  return collection.filter((item) => {
    return srcKeys
      .map((k) => {
        return item.hasOwnProperty(k) && item[k] === source[k];
      })
      .reduce((pre, cur) => pre && cur);
  });
}

const output = whatIsInAName4(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { first: 'Tybalt', last: 'Capulet' }
);
console.log(output);
