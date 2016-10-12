/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:


		balancedParens( '(' );  // false
 *   balancedParens( '()' ); // true
 *   balancedParens( ')(' );  // false
 *   balancedParens( '(())' );  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens( '[](){}' ); // true
 *  balancedParens( '[({})]' );   // true

 *  balancedParens( '[(]{)}' ); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens( ' var wow  = { yo: thisIsAwesome() }' ); // true
 * balancedParens( ' var hubble = function() { telescopes.awesome();' ); // false
 *
 *
 */


function balancedParens(input){
  let i = 0;
  let temp = [];

  while (i < input.length) {
    if (input[i] === '(') {
      temp.push('(');
    }

    if (input[i] === ')' && temp.pop() !== '('){
      return false;
    }
    if (input[i] === '{'){
      temp.push('{');
    }
    if (input[i] === '}' && temp.pop() !== '{'){
      return false;
    }
    if (input[i] === '[') {
      temp.push('[');
    }

    if (input[i] === ']' && temp.pop() !== '['){
      return false;
    }
      i++;
  }
  //for cases of only 1 item in string
  if (temp.length > 0){
    return false;
  } else {
    return true;
  }
}


console.log(balancedParens( '(' ));  // false
console.log(balancedParens( '()' )); // true
console.log(balancedParens( ')(' ));  // false
console.log( balancedParens( '(())' ));  // true
console.log(balancedParens( '[](){}' )); // true
console.log( balancedParens( '[({})]' ));   // true

console.log( balancedParens( '[(]{)}' ) ); // false
console.log(balancedParens( ' var wow  = { yo: thisIsAwesome() }' )); // true
console.log(balancedParens( ' var hubble = function() { telescopes.awesome();' )); //


module.exports = balancedParens;
