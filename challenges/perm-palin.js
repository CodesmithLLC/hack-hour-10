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
  let split = str.split('');
  const permutations = [];

  function options(roundsLeft, pairs) {
    if (roundsLeft === 0) {
      permutations.push(pairs);
      return;
    }
    for (let i = 0; i < split.length; i++) {
      options(roundsLeft - 1, pairs.concat(split[i]));
    }

  }

  options(split.length, []);
  console.log(permutations)

  // split = split.join('').toString();
  // console.log(split) 
  permutations.forEach((perm) => {
    if (perm === perm.reverse()) { return true }
  });
  return false;
}

module.exports = permPalin;
