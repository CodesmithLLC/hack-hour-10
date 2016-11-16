/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 *  - permPalin('abab') => true
 *  - permPalin('cbaba') => true
 *  - permPalin('cbac') => false
 *  - permPalin('a') => true
 *
 */

function permPalin(str) {
  if (typeof str !== 'string') return false;
  if (str.length === 1) return true;

  let foundPalin = false;
  // split the string into chunks of at least two letters
  let strArr = chunkStr(str);

  // test to see if any of the chunks is a plaindrome 
  strArr.forEach(ele => {
    if (palin(ele)) foundPalin = true;
  })

  return foundPalin;
}

function chunkStr(str) {
  let strArr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      strArr.push(str.slice(i, j+1));
    }
  }
  
  return strArr;
}

function palin(str) {
  return str === str.split('').reverse().join('');
}

// console.log(chunkStr('app'));
// console.log(palin('aa'));
// console.log(permPalin('a'));


module.exports = permPalin;