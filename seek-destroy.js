/**
 * Seek and Destroy
 * Remove all elements from the initial array that are of the same value as these arguments.
 */

'use strict';

// solution 1
function destroyer(arr) {
  const [, ...matchArr] = arguments;
  return arr.filter((v) => !matchArr.includes(v));
}

const output = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log('output: ', output);
