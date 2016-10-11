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
   if (input.indexOf('(') > input.indexOf(')')) return false;
   if (input.indexOf('[') > input.indexOf(']')) return false;
   if (input.indexOf('{') > input.indexOf('}')) return false;
   if (input.indexOf('(') === 0 && input.indexOf(')') !== input.length) return false;
   if (input.indexOf('[') === 0 && input.indexOf(']') !== input.length) return false;
   if (input.indexOf('{') === 0 && input.indexOf('}') !== input.length) return false;
   let check = [];
   for (let i = 0; i < input.length; i++) {
     if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
       check.push('open');
     }
     if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
       check.pop();
     }
   }
   if (check.length > 1) return false;
   else return true;
 }

module.exports = balancedParens;
