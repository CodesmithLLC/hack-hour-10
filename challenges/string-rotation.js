/*jshint esversion: 6 */
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

<<<<<<< HEAD
 function isSubstring(s1, s2) {
   if (s1 === s2) return true
 }

 function stringRotation(s1, s2) {
   let str = s1.toLowerCase().split("");
   let str2 = s2.toLowerCase();

   if (s1 === s2) return true;

   for (let i = 0; i < str.length; i++) {
     str.push(str.shift());
     let s1 = str.join("");
     if (isSubstring(s1, str2)) return true;
   }
   return false
 }
=======
function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {

}
>>>>>>> 027eef7cfa088762966b33be7baaf86ef5126a39

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
