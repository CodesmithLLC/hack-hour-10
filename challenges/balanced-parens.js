/*
 * write a function that takes a inputing of text and returns true if
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
  const stack = [];
  const open = { '{': '}', '[': ']', '(': ')' };
  const closed = { '}': true, ']': true, ')': true };
  

  for (var i = 0; i < input.length; i ++) {
    let current = input[i];
    if (open[current]) {
      stack.push(current);
    } else if (closed[current]) {
      if (open[stack.pop()] !== current) return false;
    }
  } 
  return stack.length === 0;
};


// function balancedParens(input) {
//   function Stack() {
//     this.storage = {};
//     this.index = 0;
//   }

//   Stack.prototype.push = function (value) {
//     this.storage[this.index] = value;
//     this.index += 1;
//   };

//   Stack.prototype.pop = function () {
//     this.index -= 1;
//     return this.storage[this.index];
//   };

//   const storage = new Stack;

//   for (let i = 0; i < input.length; i++) {
//   // if (is open bracket)
//     if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
//       storage.push(input[i]); // push(bracket)
//   // else if (is closing bracket) and (in the stack)
//     } else if (input[i] === ')' || input[i] === ']' || input[i] === '}' && this.storage.input[i]) {
//       storage.pop(input[i]); // pop(bracket)
//   // else if (is closing bracket) and (not in the stack)
//     } else if (input[i] === ')' || input[i] === ']' || input[i] === '}' && !this.storage.input[i]) {
//       console.log('nope') // message not valid
//     }
//   }
//   console.log(storage)
// }


module.exports = balancedParens;
