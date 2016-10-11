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
    var matches = [];
    var str = input;

    for(let i = 0; i < input.length; i++) {
        if(input[i] === '(' || input[i] === '[' || input[i] === '{'){
            matches.push(input[i]);
            console.log(matches);
        }
        if(input[i] === ')' || input[i] === ']' || input[i] === '}'){
            let pop = matches.pop();
            console.log(matches);
            if (pop === undefined) {return false};
        }
    }
    return matches[0] === undefined ? true : false;
}


module.exports = balancedParens;
