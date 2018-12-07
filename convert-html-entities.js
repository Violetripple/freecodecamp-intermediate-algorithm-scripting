/**
 * Convert HTML Entities
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

'use strict';

// solution 1
function convertHTML(str = '') {
  const pairsMap = new Map([
    ['&', '&amp;'],
    ['<', '&lt;'],
    ['>', '&gt;'],
    ['"', '&quot;'],
    ["'", '&apos;'],
  ]);
  return str
    .split('')
    .map((s) => {
      if (!pairsMap.has(s)) return s;
      return pairsMap.get(s);
    })
    .join('');
}

// solution 2
function convertHTML2(str = '') {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  return str
    .split('')
    .map((entity) => htmlEntities[entity] || entity)
    .join('');
}

const output = convertHTML2('Stuff in "quotation marks"');
console.log('output:', output);
