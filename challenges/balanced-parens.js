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
  let brackets = {
    '[': ']',
    '{': '}',
    '(': ')' 
  }
  
  let stack = [];
  let removeNonBracket = input.replace(/[^\[\]\{\}\(\)]/g, '')
  let inputArray = [...removeNonBracket];
  let match = true;
  
  if(inputArray.length % 2) { return false; }

 
  inputArray.forEach(function(bracket) {
    if(!match) { return; }
    
    if(bracket === '[' || bracket === '{' || bracket === '(') {
      stack.push(bracket)
    } else {
      if(!stack.length) { match = false; }
      
      let item = stack.pop();
      
      if(brackets[item] !== bracket) { match = false; }
    }
  })
  
  return match;
}

module.exports = balancedParens;
