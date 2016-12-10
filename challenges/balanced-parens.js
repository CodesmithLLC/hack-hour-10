"use strict"
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
  if (typeof input !== 'string') { return undefined; }
  const arr = input.split('');

  const balance = {
    paren     : 0,
    bracket   : 0,
    curly     : 0,
  }
  let totalBalance = 0;
  const balanceAdds = ['(', '[', '{'];
  const balanceSubs = [')', ']', '}'];

  let mode = [];
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    // Handle balance
    if (balanceAdds.indexOf(val) !== -1) {
      totalBalance += 1;
    } else if (balanceSubs.indexOf(val) !== -1) {
      totalBalance -= 1;
    }

    // Handle mode and mode violation    
    if (val === ')') {
      if (mode[0] !== '(') { 
        return false 
      };
      mode.shift();
    }
    
    if (val === ']') {
      if (mode[0] !== '[') { 
        return false 
      };
      mode.shift();
    }
    
    if (val === '}') {
      if (mode[0] !== '{') { 
        return false 
      };
      mode.shift();
    }

    if (val === '(') {
      mode.unshift('(');
    }
    if (val === '[') {
      mode.unshift('[');
    }
    if (val === '{') {
      mode.unshift('{');
    }
  }
  

  return totalBalance === 0;// balance.paren + balance.bracket + balance.curly === 0;

}

module.exports = balancedParens;

// console.log('---');
// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true
// console.log('---');
// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false
// console.log('---');
// console.log(balancedParens(7)); // undefined
// console.log('---');
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
