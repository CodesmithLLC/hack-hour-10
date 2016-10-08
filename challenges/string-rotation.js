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

 function stringRotation(s1, s2) {
   let Arr1 = s1.split("");
   let Arr2 = s2.split("");

   if (Arr1 === Arr2) return true;

   for (let i = 0; i < Arr1.length; i++) {
     Arr1.push(Arr1.shift());
     if (Arr1.join("") === Arr2.join("")) return true
   }
   return false;
 }

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
