/**
 * Sum All Odd Fibonacci Numbers
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 */

'use strict';

function sumFibs(num = 4) {
  let fibonacciArr = [1, 1];
  while (true) {
    let n = fibonacciArr.slice(-2).reduce((a, b) => a + b);
    if (n > num) break;
    fibonacciArr.push(n);
  }
  // console.log('fibonacciArr:', fibonacciArr);
  return fibonacciArr.filter((n) => n % 2 !== 0).reduce((a, b) => a + b);
}

const output = sumFibs(75025);
console.log('output: ', output);
