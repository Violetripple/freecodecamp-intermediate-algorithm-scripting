/**
 * DNA Pairing
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 * Return the provided character as the first element in each array.
 * For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 * The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */

'use strict';

// solution 1
function pairElement(str = '') {
  return [...str].reduce((arr, char) => {
    switch (char) {
      case 'A':
        arr.push([char, 'T']);
        break;

      case 'T':
        arr.push([char, 'A']);
        break;

      case 'C':
        arr.push([char, 'G']);
        break;

      case 'G':
        arr.push([char, 'C']);
        break;

      default:
        break;
    }
    return arr;
  }, []);
}

// solution 2
function pairElement2(str = '') {
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  return [...str].map((s) => [s, pairs[s]]);
}

const output = pairElement2('GCG');
console.log('output: ', output);
