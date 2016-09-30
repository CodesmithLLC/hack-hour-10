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

// The recursion method
// function drawStairs(n=1, ast=1) {
//   // Hmm... how to check if n <= 1 in recursion
//   if (n > 100) throw new Error('Input should be 1 <= N <= 100');
//
//   if (n < 1) return;
//
//   let spaces = '';
//   for (let i = 0; i < n - 1; i++) spaces += ' ';
//
//   let asterisks = '';
//   for (let i = 0; i < ast; i++) asterisks += '*';
// 
//   console.log(spaces + asterisks);
//   drawStairs(n - 1, ast + 1);
// }

function drawStairs(n) {
  if (typeof n !== 'number' || Number.isInteger(n) || n < 1 || n > 100) throw new Error('Invalid input');
  for (let i = 1; i < n; i++) {
    const spaces = ' '.repeat(n - i);
    const astericks = '*'.repeat(i);
    console.log(spaces + astericks);
  }
}


module.exports = drawStairs;
