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
	
  let flag = true;
  let arr = [];
  let par = 0, brack = 0, curly = 0;
  input.split('').forEach(ele => {
    if(ele === '(')par++, arr.push(1);
    if(ele === ')') {
    	if(arr[arr.length - 1] !== 1) flag = false;
    	arr.pop();
    	par--;
    	if(par < 0)flag = false;
    }
    if(ele === '{') curly++, arr.push(2);
    if(ele === '}') {
    	if(arr[arr.length - 1] !== 2) flag = false;
    	arr.pop();
    	curly--;
    	if(curly < 0) flag = false;
    }
    if(ele === '[') brack++, arr.push(3);
    if(ele === ']') {
    	if(arr[arr.length - 1] !== 3) flag = false;
    	arr.pop();
    	brack--;
    	if(brack < 0) flag = false;
    }
  });
  return (par === 0 && brack === 0 && curly === 0 && flag)
}

module.exports = balancedParens;
