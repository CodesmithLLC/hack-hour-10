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
   if (s1.length !== s2.length || s1.constructor !== String || s2.constructor !== String) return false;
   if (s1.length === 0 && s2.length === 0) return true;
     let temp = '';
     for (let i = 0; i < s1.length; i++) {
       if (s1.includes(s2[i])) temp += s2[i];
       if (s2.slice(temp.length).concat(temp) === s1) return true;
     }
   return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
