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
'use strict'

function balancedParens(input){

    const partners = {
        ']': '[',
        ')': '(',
        '}': '{'
    }    
    const openStash = [];
    let balanceCount = 0;
    let char;

    for (let i = 0; i < input.length; i++) {
        char = input[i];
        if (char === '{' || char === '[' || char === '(') {
            openStash.push(char);
            balanceCount++;
        }
        if (char === '}' || char === ']' || char === ')') {
            if (partners[char] !== openStash[openStash.length - 1]) return false
            else openStash.pop();
            balanceCount--;
        }   
    }
    return balanceCount === 0;
}


console.log(balancedParens('((')); // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')(')); // false
console.log(balancedParens('(())')); // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true

module.exports = balancedParens;
