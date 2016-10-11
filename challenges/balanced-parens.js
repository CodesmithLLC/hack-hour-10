/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
  input = input.replace(/[^\(\)\{\}\[\]]/g, '');
  if (input.length % 2 !== 0) return false;
  let matches = {
    "}" : "{",
    "]": "[",
    ")": "("
  }

  for (let i = 0; i < input.length; i++) {
    for (let key in matches) {
      let result = false;
      if (input[i] === matches[key]) {
        for (let j = i+1; j < input.length; j++) {
          if (input[j] === key) {
            result = true;
            break;
          }
        }
        if (result === true) break;
        else return result;
      }
    }
  }
  return true;
}

// console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));
module.exports = balancedParens;
