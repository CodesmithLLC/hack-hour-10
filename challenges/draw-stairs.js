"use strict"
/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
    if (n < 1 || n > 100 || typeof n !== 'number') { return undefined; }

    let returnString = '';
    for (let i = 1; i < n + 1; i += 1) {
        returnString += ' '.repeat(n-i) + '*'.repeat(i);
        if ( i !== n ) {
           returnString += '\n'
        };
    } 
    console.log(returnString);   
}

//drawStairs(6);
//drawStairs(3);
//drawStairs(0);
//drawStairs(1);
//drawStairs(100);
//drawStairs(101);
//drawStairs('1');

module.exports = drawStairs;
