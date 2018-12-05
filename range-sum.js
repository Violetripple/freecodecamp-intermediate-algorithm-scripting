/**
 * Sum All Numbers in a Range.
 */

'use strict';

// solution 1
function sumAll(arr = []) {
  const [a, b] = arr;
  if (a > b) {
    arr = [b, a];
  }
  const [n1, n2] = arr;
  let n = n1 + 1;
  let sum = n1 + n2;
  while (n < n2) {
    sum += n;
    n++;
  }
  return sum;
}

// solution 2
function sumAll2(arr = []) {
  const [a, b] = arr.sort();
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

// solution 3
function sumAll3(arr = []) {
  const [min, max] = [Math.min(...arr), Math.max(...arr)];
  return ((max - min + 1) * (max + min)) / 2; // Arithmetic progression 等差数列求和公式
}

const output = sumAll3([4, 1]);
console.log('output: ', output);
