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

function balancedParens1(input) {
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '[' || input[i] === '{' ||input[i] === '(') stack.push(input[i]);
    let last = stack[stack.length - 1];
    
    if (input[i] === ']' && last !== '[') return false;
    else if (input[i] === ']' && last === '[') stack.pop();

    if (input[i] === '}' && last !== '{') return false;
    else if (input[i] === '}' && last === '{') stack.pop();

    if (input[i] === ')' && last !== '(') return false;
    else if (input[i] === ')' && last === '(') stack.pop();
  }
  if (stack.length !== 0) return false;

  return true;
}

// console.log(balancedParens1('[({})]'));
















function balancedParens(input){
  let parensArr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "{" || "[" || "(") parensArr.push(input[i]);
    if (input[i] === "}") if (parensArr.pop() !== "{") return false;
    if (input[i] === "]") if (parensArr.pop() !== "[") return false;
    if (input[i] === ")") if (parensArr.pop() !== "(") return false;
    // console.log("i: " + i + parensArr);
  }

  return true;
}

// console.log(balancedParens('[(]{)}'));
module.exports = balancedParens;
