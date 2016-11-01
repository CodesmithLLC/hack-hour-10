/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  const perms = [];
  const useds = [];
  perm(str);

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

  for (let i = 0; i < perms.length; i += 1) {
    if (palin(perms[i])) return true;
  }
  return false;
}

function palin(str) {
  str = str.replace(/ /g, '');
  for (let i = 0, j = str.length - 1; i < Math.floor(str.length / 2); i += 1, j -= 1) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

module.exports = permPalin;

console.log(
  permPalin('poop')
);