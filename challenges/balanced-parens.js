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
  let stack = [];
  let stringArray = input.split('');
  let latest;
  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i] in { '(': true, '[': true, '{': true }) {
      latest = stringArray[i];
      stack.push(latest);
    }
    if (stringArray[i] in { ')': true, ']': true, '}': true }) {
      latest = stringArray[i];
      switch (latest) {
        case ')': if (stack.pop() !== '(') return false; break;
        case ']': if (stack.pop() !== '[') return false; break;
        case '}': if (stack.pop() !== '{') return false; break;
      }
    }
  }
  if (stack.length !== 0) return false;
  return true;
}

module.exports = balancedParens;
console.log('expect: false true false true true true false true false');
console.log('actual:',
  balancedParens('('),
  balancedParens('()'),
  balancedParens(')('),
  balancedParens('(())'),
  balancedParens('[](){}'),
  balancedParens('[({})]'),
  balancedParens('[(]{)}'),
  balancedParens(' var wow  = { yo: thisIsAwesome() }'),
  balancedParens(' var hubble = function() { telescopes.awesome();')
);
