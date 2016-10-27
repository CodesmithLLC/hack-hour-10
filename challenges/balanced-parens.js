'use strict'
/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
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


console.log(balancedParens('('))
function balancedParens(input){

    // Count each parens
    let parensCounter = 0;
    let squareCounter = 0;
    let curlyCounter = 0;

    // Store opening parens to track order of closing
    let mostRecent = [];

    // Loop through input tracking each type of parens
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(') {
            parensCounter++;
            mostRecent.push('(');
        }
        if (input[i] === ')' && mostRecent[mostRecent.length - 1] === '(') {
            parensCounter--;
            mostRecent.pop();
        }
        
        if (input[i] === '[') {
            squareCounter++;
            mostRecent.push('[');
        }
        if (input[i] === ']' && mostRecent[mostRecent.length - 1] === '[') {
            squareCounter--;
            mostRecent.pop();
        }

        if (input[i] === '{') {
            curlyCounter++;
            mostRecent.push('{');
        }
        if (input[i] === '}' && mostRecent[mostRecent.length - 1] === '{') {
            curlyCounter--;
            mostRecent.pop();
        }
    }

    // If everything is empty, then brackets match. Otherwise, there was a mismatch.
    if (parensCounter === 0 && squareCounter === 0 && curlyCounter === 0 && mostRecent.length === 0) return true;
    return false;

    // Can be optimized by returning false when any counter is negative
}

module.exports = balancedParens;
