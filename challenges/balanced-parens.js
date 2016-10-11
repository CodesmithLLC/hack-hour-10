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
   const checkArr = [];
   const pairsOfChars = {
     '(': ')',
     '[': ']',
     '{': '}',
   };
   const closingBraces = {
     '}': 1,
     ']': 1,
     ')': 1,
   };
   for (let i = 0; i < input.length; i += 1) {
     const current = input[i];
     if (pairsOfChars[current]) {
       checkArr.push(pairsOfChars[current]);
     } else if (current in closingBraces) {
       if (checkArr[checkArr.length - 1] === current) {
         checkArr.pop();
        }
       }
     } else {
       //do nothing
     }
  }
   console.log(checkArr.length)
  return checkArr.length < 1
}

module.exports = balancedParens;
}
