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

function balancedParens(input=''){
  // We can use a stack to implement this algorithm
  // The idea is to push opening characters to a stack and
  // pop out of it when we see closing brackets. Popped brackets
  // must match the closing brackets
  // The algorithm will need to run at O(n) 

  // Loop through the string and look for the three types of opening brackets,
  // '[', '{', '('

  let i = 0;
  const len = input.length;

  const brackets = [];
  while (i < len) {
    if (input[i] === '(') brackets.push('(');
    if (input[i] === ')' && brackets.pop() !== '(') return false;
    if (input[i] === '{') brackets.push('{');
    if (input[i] === '}' && brackets.pop() !== '{') return false;
    if (input[i] === '[') brackets.push('[');
    if (input[i] === ']' && brackets.pop() !== '[') return false;
    i++;
  }

  // Final check to see if there are any leftovers opening brackets in our stack
  // If there are still left, this means that there are not enough closing brackets
  if (brackets.length > 0) return false;

  // Every is good!
  return true;
}

module.exports = balancedParens;
