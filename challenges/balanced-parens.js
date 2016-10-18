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
 
  let inputArr = input.split(""); 

  function checkParens(inputArr, typeLeft, typeRight) {

  let left = inputArr.indexOf(typeLeft);
  let right = inputArr.indexOf(typeRight);
  
    if (left !== -1) {
      if (right === -1 ) {
        return false;
      } else {
        inputArr.splice(left,1);
        right = inputArr.indexOf(typeRight);
        inputArr.splice(right,1);
      }
    }
    inputArr = inputArr.join("");
  }
 
  if (inputArr.indexOf("(") != -1) {
      return checkParens(inputArr, "(", ")");
   }

  if (inputArr.indexOf("[") != -1) {
      return checkParens(inputArr, "[", "]");
   }
  
   if (inputArr.indexOf("{") != -1) {
      return checkParens(inputArr, "{", "}");
   }
  
   return true;
  
}

module.exports = balancedParens;
