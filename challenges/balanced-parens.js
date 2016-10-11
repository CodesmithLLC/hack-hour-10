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
  let unbalancedParens = 0, unbalancedBrackets = 0, unbalancedBraces = 0;
  let stack = []
  // console.log(input);
  for (let i = 0; i < input.length; i++) {
    // console.log(stack);
    // console.log('input:', input[i]);
    switch (input[i]) {
      case '(':
        unbalancedParens += 1;
        stack.push(')');
        break;
      case ')':
        unbalancedParens -= 1;
        let x = stack.pop();
        if (x !== ')') return false;
        break;
      case '[':
        unbalancedBrackets += 1;
        stack.push(']');
        break;
      case ']':
        unbalancedBrackets -= 1;
        let y = stack.pop();
        if (y !== ']') return false;
        break;
      case '{':
        unbalancedBraces += 1;
        stack.push('}')
        break;
      case '}':
        unbalancedBraces -= 1;
        let z = stack.pop();
        if (z !== '}') return false;
        break;
    }
  }
  if (unbalancedBrackets < 0 || unbalancedParens < 0 || unbalancedBraces < 0) return false;

  return !(unbalancedParens || unbalancedBrackets || unbalancedBraces);
}

console.log(balancedParens('(')) // false
console.log(balancedParens('()')) // true
console.log(balancedParens(')()')) // false
console.log(balancedParens('(())')) // true
console.log(balancedParens('[](){}')) // true
console.log(balancedParens('[({})]')) // true
console.log(balancedParens('[(]{)}')) // false
module.exports = balancedParens;