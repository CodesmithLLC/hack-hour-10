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
	const openParens = [];
	const parensPairs = { '(': ')', '{': '}', '[': ']' };
	const closeParens = { ')': true, '}': true, ']': true};
	
	if (input.indexOf('(') < 0 && input.indexOf('[') < 0 && input.indexOf('{') < 0) return false;
	for (let i = 0; i < input.length; i++) {
		if (parensPairs[input[i]]) {
			openParens.push(input[i]);
		} else if (closeParens[input[i]]) {
			if (parensPairs[openParens.pop()] !== input[i]) return false;
		}
	}
	return openParens.length === 0;
}

module.exports = balancedParens;
