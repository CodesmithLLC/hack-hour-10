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
"use strict";
function balancedParens(input){
    let parenStack = [];
    /* iterate through input one character at a time.
     * when you encounter an open parenthesis, push it onto the stack
     * when you encounter a close parenthesis, pop the stack and check 
     * if the item popped off is the same type of parens.
     * if it isn't then return false 
     * if you end the loop with nothing on the stack, all parens are 
     * balanced
     */
    for(let i = 0; i < input.length; ++i){
        if(input[i] === '(' || input[i] === '{' || input[i] === '['){
            parenStack.push(input[i]);
        }else if(input[i] === '}'){
            if(parenStack.pop() !== '{') return false;
        }else if(input[i] === ')'){
            if(parenStack.pop() !== '(') return false;
        }else if(input[i] === ']'){
            if(parenStack.pop() !== '[') return false;
        }else{
            return false;
        } 
    }
    return parenStack.length === 0;
}
/*console.log(`testing with ['(']: ${balancedParens('(')}`);// false
console.log(`expected false`);
console.log(`testing with ['()']: ${balancedParens('()')}`); // true
console.log(`expected true`);
console.log(`testing with [')(']: ${balancedParens(')(')}`);  // false
console.log(`expected false`);
console.log(`testing with ['(())']: ${balancedParens('(())')}`);  // true
console.log(`expected true`);

console.log(`testing with ['[](){}']: ${balancedParens('[](){}')}`); // true
console.log(`expected true`);
console.log(`testing with ['[({})]']: ${balancedParens('[({})]')}`);   // true
console.log(`expected true`);
console.log(`testing with ['[(]{)}']: ${balancedParens('[(]{)}')}`); // false
console.log(`expected false`);
console.log(`testing with ['[(){[([])]}]']: ${balancedParens('[(){[([])]}]')}`); 
console.log(`testing with ['[({a}s)][({})]']: ${balancedParens('[({a}s)][({})]')}`);*/ 
module.exports = balancedParens;
