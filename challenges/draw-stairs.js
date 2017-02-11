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
  if (n === null || n.constructor !== Number || n < 0) {
    return 'input must be a positive number';
  }
  let height = n;
  let stair = 1;
  let space = n - 1;
    while (space >= 0) {
      console.log(' '.repeat(space).concat('*'.repeat(stair)));
      stair++;
      space--;
    }
}

module.exports = drawStairs;
