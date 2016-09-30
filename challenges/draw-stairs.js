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
  if (typeof n === 'number') {
    let stairs = "";
    for (let i = 1; i <= n; i++) {
      stairs += ' '.repeat(n - i);
      stairs += '*'.repeat(i);
      stairs += "\n";
    }
    console.log(stairs);
  } else {
    console.log('Please enter a number as an argument.')
  }
}


module.exports = drawStairs;
