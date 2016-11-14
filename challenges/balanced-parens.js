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
  const countObj = {
    '(': 0,
    '[': 0,
    '{': 0,
  };
  // lastOpen is a stack implemented via shift/unshift
  let lastOpen = [];
  const inputArr = input.split('');
  for (let i = 0; i < inputArr.length; i++) {
    const character = inputArr[i];
    if (character === '(') {
      countObj[character]++;
      lastOpen.unshift(character);
    }
    if (character === '[') {
      countObj[character]++;
      lastOpen.unshift(character);
    }
    if (character === '{') {
      countObj[character]++;
      lastOpen.unshift(character);
    }
    if (character === ')') {
      if (lastOpen[0] !== '(') return false;
      lastOpen.shift();
      countObj['(']--;
    }
    if (character === ']') {
      if (lastOpen[0] !== '[') return false;
      lastOpen.shift();
      countObj['[']--;
    }
    if (character === '}') {
      if (lastOpen[0] !== '{') return false;
      lastOpen.shift();
      countObj['{']--;
    }
    if (countObj['('] < 0 || countObj['{'] < 0 || countObj['['] < 0) return false;
  }
  if (countObj['('] !== 0 || countObj['{'] !== 0 || countObj['['] !== 0) return false;
  return true;
}

module.exports = balancedParens;
