/**
 * Missing letters
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 */

function fearNotLetter(str = '') {
  for (let i = 0; i < str.length - 1; i++) {
    const isMissedCharCode = str[i].charCodeAt(0) + 1;
    if (isMissedCharCode !== str[i + 1].charCodeAt(0)) {
      return String.fromCharCode(isMissedCharCode);
    }
  }
}

const output = fearNotLetter('abce');
console.log('output: ', output);
