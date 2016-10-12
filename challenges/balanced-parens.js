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
   let storage = {
     '(': ')',
     '[': ']',
     '{': '}'
   }

   let ans = [];
   let counter = 0;

   for (let i = 0; i < input.length; i++) {
     let check;
     if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
       ans.push(input[i])
       counter++;
     }
     if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
       check = ans.pop();
       if (storage[check] === input[i]) {
         counter--;
       }
     }
   }
   return counter === 0 ? true : false;
 }

module.exports = balancedParens;
