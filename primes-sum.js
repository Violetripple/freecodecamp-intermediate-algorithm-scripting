/**
 * Sum All Primes
 * Sum all the prime numbers up to and including the provided number.
 * A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
 * The provided number may not be a prime.
 */

'use strict';

function sumPrimes(num = 2) {
  const primesArray = [];
  for (let n = 2; n <= num; n++) {
    if (n === 2) {
      primesArray.push(n);
    } else if (primesArray.every((p) => n % p !== 0)) {
      primesArray.push(n);
    }
  }
  // console.log(primesArray);
  return primesArray.reduce((a, b) => a + b);
}

const output = sumPrimes(977);
console.log('output: ', output);
