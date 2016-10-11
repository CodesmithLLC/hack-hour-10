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
	if (input.indexOf('(') < 0 && input.indexOf('[') < 0 && input.indexOf('{') < 0) return false;
	let result = false;
	function checkMirror(str) {
	    for (let i = 0; i < str.length; i++) {
	        if (str[i] === '(') {
	            let substr = str.substring(i, str.length);
	            //console.log(substr);
	            if (str.indexOf(')') < 0) return false;
	            for (let k = substr.length - 1; k >= 0; k--) {
	                if (substr[k] === ')') {
	                    result = true;
	                    let temp = str.substring(str[i+1], str[k]);
	                    //console.log(temp);
	                    checkMirror(str.substring(str[i+1], str[k]));
	                }
	            }
	        }
	    }
	    return result;
	}
	return checkMirror(input);
}

module.exports = balancedParens;
