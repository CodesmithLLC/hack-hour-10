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
	if (arguments.length === 0) return false;
	if (typeof input !== 'string') return false;
	let paren = 0;
	let bracket = 0;
	let curly = 0;

	for (let i = 0; i < input.length; i++) {
		if (input[i] === '(') paren++;
		if (input[i] === ')') {
			if (paren > 0) paren--;
			else return false;
		}
		if (input[i] === '[') bracket++;
		if (input[i] === ']') {
			if (bracket > 0) bracket--;
			else return false;
		}
		if (input[i] === '{') curly++;
		if (input[i] === '}') {
			if (curly > 0) curly--;
			else return false
		}
	}
	if (paren === 0 && bracket === 0 && curly === 0) return true;
	else return false;

}

// console.log(balancedParens('travis'));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true
// console.log(balancedParens(222));  // false
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false


module.exports = balancedParens;
