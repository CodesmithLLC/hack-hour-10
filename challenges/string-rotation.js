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

  function rotateString(string) {
    let tempArr = string.split("");
    let results = [string];
  
    for (let i=0; i<tempArr.length-1; i++) {
      let tempStr = "";
      let popped = tempArr.pop();
      tempArr.unshift(popped);
      tempStr = tempArr.join("");
      results.push(tempStr);
    }
    return results;
   }

  let strArr = rotateString(s1);
    if (strArr.indexOf(s2) == -1) {
      return false;
    } else {
      return true;
    }
}

//not making use of isSubString yet

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
