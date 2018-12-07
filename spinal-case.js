/**
 * Spinal Tap Case
 * Convert a string to spinal case. Spinal case is
 * all-lowercase-words-joined-by-dashes.
 */

'use strict';

function spinalCase(str = '') {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

const output = spinalCase('The_Andy_Griffith_Show AllThe-small Things');
console.log('output: ', output); // expected "the-andy-griffith-show-all-the-small-things".
