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
  let test = '';
  let balanced = true;

  for (let i = 0; i < input.length; i++) {
    if (str[i] === '(') {
      if (!str.includes(')')) {
         balanced = false;
      }
      str[str.indexOf(')')] = '';
    }
    else if (str[i] === '[') {
      if (!str.includes(']')) {
        balanced = false;
      }
      str[str.indexOf(']')] = '';
    }
    else if (str[i] === '{') {
      if (!str.includes('}')) {
        balanced = false;
      }
      str[str.indexOf('}')] = '';
    }
    str[i] = '';
  }
  return balanced;
  
//take care of special case '[(]{)}'
  // let inParens = false;
  // let inBrackets = false;
  // let inBraces = false;
  // for (let i = 0; i < input.length; i++) {
  //   if (str[i] === ')') {
  //     if (inParens || )
  //     inParens = true;
  //   }
  //   else if (str[i] === ']') {
  //     inBrackets = true;
  //   }
  //   else if (str[i] === '}') {
  //     inBraces = true;
  //   }
  //   str[i] = '';
  // }

  //return balanced;
}
// //true
// console.log(balancedParens('()'));
// console.log(balancedParens('(())'));
// console.log(balancedParens('[](){}'));
// console.log(balancedParens('[({})]'));
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
// //false

// console.log(balancedParens('[(]{)}'));
// console.log(balancedParens(')('));
// console.log(balancedParens('('));
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));
module.exports = balancedParens;
