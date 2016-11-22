/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  const perms = [];
  const useds = [];
  function perm(str) {
    let i, ch, chars = str.split('');
    for (i = 0; i < chars.length; i += 1) {
      ch = chars.splice(i, 1);
      useds.push(ch);
      if (!chars.length) perms[perms.length] = useds.join('');
      perm(chars.join(''));
      chars.splice(i, 0, ch);
      useds.pop();
    }
  }
  function unique(value, index, self) {
    return self.indexOf(value) === index;
  }
  perm(string);
  const uniqs = perms.filter(unique);
  return uniqs;
}


module.exports = anagrams;

console.log(anagrams('aac'));