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

  if(arguments.length === 0) return "undefined";

  if(s1 === s2) return true;

  //create the split strings;
   let firststring = s1.slice(0, Math.floor(s1.length/2));
   let secondstring = s1.slice(Math.floor(s1.length/2));

  //join the two newstrings (but opposite order)
   let newString = secondstring.concat(firststring);

   //make s1 == newString for comparison purposes
     s1 = newString;
    // do final check, if lengths are equal PLUS s1 == s
    if(s1.length !== s2.length){
      return false;
    } else {
	return isSubstring(s1, s2);
    }
}
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

