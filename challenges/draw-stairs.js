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
  // draw a given row of the staircase

  function drawRow(rowNumber) {
    // determine the number of spaces needed for the row
    const spaces = n - rowNumber;

    // add the spaces first, and then fill in what's left with asterisks
    let row = '';
    for (let i = 1; i <= n; i += 1) {
      row += (i <= spaces) ? ' ' : '*';
    }
    console.log(row);
  }

  // draw the rows
  for (let i = 1; i <= n; i += 1) {
    drawRow(i);
  }
}

module.exports = drawStairs;
