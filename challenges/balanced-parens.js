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
<<<<<<< HEAD
	const newInput = input.split('');
	let newArr = [];
	let count = 0;
	for(let i =0;i<newInput.length; i++) {
		if(newInput.charAt(i) === "[");
		newArr.push(newInput[i]);
	}
		
	return newArr;
=======

>>>>>>> 027eef7cfa088762966b33be7baaf86ef5126a39
}

module.exports = balancedParens;
