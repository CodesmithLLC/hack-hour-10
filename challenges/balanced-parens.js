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
  const openBrackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const closeBrackets = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (var stack = [], i = 0; i < input.length; i++) {
    if (openBrackets.hasOwnProperty(input[i])) stack.push(input[i]);
    if (closeBrackets.hasOwnProperty(input[i]) && stack.pop() !== closeBrackets[input[i]]) return false;
  }
  return !stack.length;
}

module.exports = balancedParens;
