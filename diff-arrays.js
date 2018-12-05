/**
 * Diff Two Arrays (symmetric difference, 差集)
 */

'use strict';

// solution 1
function diffArray(arr1 = [], arr2 = []) {
  let newArr = [];
  function diff(arr1, arr2) {
    for (const i of arr1) {
      if (!arr2.includes(i)) {
        newArr.push(i);
      }
    }
  }
  diff(arr1, arr2);
  diff(arr2, arr1);
  return newArr;
}

// solution 2
function diffArray2(arr1 = [], arr2 = []) {
  function diff(arr1, arr2) {
    return arr1.filter((v) => !arr2.includes(v));
  }
  return diff(arr1, arr2).concat(diff(arr2, arr1));
}

// solution 3
function diffArray3(arr1 = [], arr2 = []) {
  const set = new Set(arr1.concat(arr2));
  const intersection = arr1.filter((v) => arr2.includes(v));
  return [...set].filter((v) => !intersection.includes(v));
}

// solution 4
function diffArray4(arr1 = [], arr2 = []) {
  return arr1
    .concat(arr2)
    .filter((v) => !arr1.includes(v) || !arr2.includes(v));
}

const output = diffArray4([0, 1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 9]);
console.log('output: ', output);
