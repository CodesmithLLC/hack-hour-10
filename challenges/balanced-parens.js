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
  let str = input.split('');
  let balanced = true;
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    if (str[i] === '(') stack.push(str[i]);
    else if (str[i] === '[') stack.push(str[i]);
    else if (str[i] === '{') stack.push(str[i]);

    if (str[i] === ')') {
      if (stack[stack.length - 1] !== '(') balanced = false;
      stack.pop();
    }
    else if (str[i] === ']') {
      if (stack[stack.length - 1] !== '[') balanced = false;
      stack.pop();
    }
    else if (str[i] === '}') {
      if (stack[stack.length - 1] !== '{') balanced = false;
      stack.pop();
    }
  }
  if (stack[0] !== undefined) balanced = false;
  return balanced;
}
  // //true
  console.log(balancedParens('()'));
  console.log(balancedParens('(())'));
  console.log(balancedParens('[](){}'));
  console.log(balancedParens('[({})]'));
  console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
  
  // //false
  console.log(balancedParens('[(]{)}'));
  console.log(balancedParens(')('));
  console.log(balancedParens('('));
  console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));
  module.exports = balancedParens;
