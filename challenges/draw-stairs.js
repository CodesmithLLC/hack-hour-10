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
  if (n < 1 || n > 100) return;
  let stairString = '';
  // create n lines
  for (let line = 1; line <= n; line++, stairString += '\n') {
    // each line starts with 'n - line' number of spaces
    for (let space = 1; space <= n - line; space++) stairString += ' ';
    // each line ends with 'line' number of stars
    for (let star = 1; star <= line; star++) stairString += '*';
  }
  // remove trailing newline char
  return stairString.slice(0, -1);
}

module.exports = drawStairs;
