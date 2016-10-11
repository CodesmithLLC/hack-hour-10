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

'use strict'

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  // if (s1.length !== s2.length) return false;
  // if (s1 === s2) return true;

  // let positionForward;

  // for (let i = 0; i < s2.length; i++) {

  //   if (s1.indexOf(s2.slice(0,i+1)) < 0) {
  //     positionForward = i;
  //     break;
  //   }
  // }

  // return isSubstring(s1, s2.slice(positionForward));

  let newString = s2 + s2;
  return isSubstring(newString, s1);
}

console.log(stringRotation('hello', 'llohe'));
console.log(stringRotation('hello', 'ollhe'));
console.log(stringRotation('hello', 'h'));
console.log(stringRotation('hello', 'hello'));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
