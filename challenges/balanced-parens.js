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
  let converted = input.replace(/[ a-zA-Z]/g, "");
  let second = "";
  let first = "";
  for (let i = converted.length - 1; i > Math.floor(converted.length / 2); i--) {
    second += converted[i];
  }
  for (let i = 0; i < Math.floor(converted.length / 2); i++) {
    first += converted[i];
  }
  console.log(first, second);
  // retrun (first === second);
}

module.exports = balancedParens;

balancedParens("('[](){}')");
