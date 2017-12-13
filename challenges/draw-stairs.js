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

function drawStairs(n, spaces = n - 1) {
	return n < 1 ? '' : spaces === n - 1 ? console.log(Array.from({ length: n }, (char, i) => i < spaces ? ' ' : '*').join('').concat(!spaces ? '' : drawStairs(n, spaces - 1))) : '\n' + Array.from({ length: n }, (char, i) => i < spaces ? ' ' : '*').join('').concat(!spaces ? '' : drawStairs(n, spaces - 1));
}

module.exports = drawStairs;
