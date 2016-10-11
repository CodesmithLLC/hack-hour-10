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
  // check for a null/whitespace string first
  const strippedStr = input.replace(/\s+/g, '');
  if (strippedStr.length === 0) return true;
  // set up our counts.
  let parenCount = 0;
  let curlyCount = 0;
  let brackCount = 0;
  // lastOpen is a stack implemented via shift/unshift
  let lastOpen = [];
  const inputArr = input.split('');
  for (let i = 0; i < inputArr.length; i++) {
    const character = inputArr[i];
    if (character === '(') {
      parenCount++;
      lastOpen.unshift(character);
    }
    if (character === '[') {
      brackCount++;
      lastOpen.unshift(character);
    }
    if (character === '{') {
      curlyCount++;
      lastOpen.unshift(character);
    }
    if (character === ')') {
      if (lastOpen[0] !== '(') return false;
      lastOpen.shift();
      parenCount--;
    }
    if (character === ']') {
      if (lastOpen[0] !== '[') return false;
      lastOpen.shift();
      brackCount--;
    }
    if (character === '}') {
      if (lastOpen[0] !== '{') return false;
      lastOpen.shift();
      curlyCount--;
    }
    if (curlyCount < 0 || brackCount < 0 || parenCount < 0) return false;
  }
  if (curlyCount !== 0 || brackCount !== 0 || parenCount !== 0) return false;
  return true;
}

module.exports = balancedParens;

console.log(balancedParens('(')); // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')(')); // false
console.log(balancedParens('()()')); // true
console.log(balancedParens('[({})]')); // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens('[](){}')); // true
