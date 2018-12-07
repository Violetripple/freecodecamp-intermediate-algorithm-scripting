/**
 * Pig Latin
 * Translate the provided string to pig latin.
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
 * If a word begins with a vowel you just add "way" to the end.
 * Input strings are guaranteed to be English words in all lowercase.
 */

'use strict';

function translatePigLatin(str = '') {
  const regexp = /[aeiou]/gi;
  if (regexp.test(str[0])) {
    return str + 'way';
  } else {
    const index = str.search(regexp);
    return str.substring(index) + str.substring(0, index) + 'ay';
  }
}

const output = translatePigLatin('consonant');
console.log('output: ', output);
