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
  let obj = {};
  let check = 0;
	str.split('').forEach(ele => {
    if(obj.hasOwnProperty(ele)) obj[ele] += 1;
    else obj[ele] = 1;
  })
  for(let key in obj) {
    check += (obj[key] % 2);
  }
  return check < 2;
}

module.exports = permPalin;