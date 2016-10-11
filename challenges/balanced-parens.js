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
  // check for invalid input
  if (typeof input !== 'string') return undefined;

  // push on all parens/brackets
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '[' || input[i] === ']' ||
        input[i] === '(' || input[i] === ')' ||
        input[i] === '{' || input[i] === '}')
      stack.push(input[i]);
  }

  // if odd number, parens are unbalanced
  if (stack.length % 2 === 1) return false;

  // use another stack to match parens/brackets
  const pending = [];
  while (stack.length > 0) {
    const topParen = stack.pop()
    switch (topParen) {
      // for each open paren, if there isn't an unmatched paren in pending, return false
      case '(': if (pending.length === 0) return false;
                else if (pending[pending.length - 1] === ')') pending.pop();
                break;
      // for each closing paren, if the next paren on stack is the matching paren, discard both
      // otherwise push onto pending stack
      case ')': if (stack[stack.length - 1] === '(') stack.pop();
                else pending.push(topParen); break;
      case '[': if (pending.length === 0) return false;
                else if (pending[pending.length - 1] === ']') pending.pop();
                break;
      case ']': if (stack[stack.length - 1] === '[') stack.pop();
                else pending.push(topParen); break;
      case '{': if (pending.length === 0) return false;
                else if (pending[pending.length - 1] === '}') pending.pop();
                break;
      case '}': if (stack[stack.length - 1] === '{') stack.pop();
                else pending.push(topParen); break;
    }
  }

  // if there are unmatched parens/brackets, return false
  return stack.length === 0 && pending.length === 0;
}

console.assert(balancedParens('(') === false);  // false
console.assert(balancedParens('()') === true); // true
console.assert(balancedParens(')(') === false);  // false
console.assert(balancedParens('(())') === true);  // true

console.assert(balancedParens('[](){}') === true); // true
console.assert(balancedParens('[({})]') === true);   // true
console.assert(balancedParens('[(]{)}') === false); // false

console.assert(balancedParens(' var wow  = { yo: thisIsAwesome() }') === true); // true
console.assert(balancedParens(' var hubble = function() { telescopes.awesome();') === false); // false


module.exports = balancedParens;
