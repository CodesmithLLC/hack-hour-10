"use strict"
/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') { return undefined; }
  if (s1.length !== s2.length) { return false; }
  const allRotations = [];
  allRotations.push(s1);

  let count = s1.length - 1;
  while (count > 0) {
    const item = allRotations[0];
    allRotations.unshift(rotate(item));
    count--;
  }
  
  return isSubstring(allRotations.join(' - '), s2);
}

function rotate (str) {
  let arr = str.split('');
  arr.unshift(arr.pop());
  return arr.join('');
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

// console.log(stringRotation("hello", "hello")) // true
// console.log(stringRotation("hello", "llohe")) // true
// console.log(stringRotation("hello", "he")) // false
// console.log(stringRotation("hello", "ollhe")) // false