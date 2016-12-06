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
function balancedParens(input) {
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
      stack.push(input[i]);
    }
    if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
      if (stack.length === 0) return false;
      const popped = stack.pop();
      if (popped.charCodeAt(0) + 2 !== input[i].charCodeAt(0)) {
        if (popped.charCodeAt(0) + 1 !== input[i].charCodeAt(0)) {
          return false;
        }
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }

  return false;
}


module.exports = balancedParens;
