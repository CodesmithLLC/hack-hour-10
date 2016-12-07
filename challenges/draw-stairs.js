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


function drawStairs1(num) {
  for (let i = 0; i < num; i++) {
    console.log(" ".repeat(num - 1 - i) + "*".repeat(i + 1));
  }
}
// console.log(drawStairs1(30));























function drawStairs(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 1 || n > 100) return "invalid input";
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n-i) + "*".repeat(i));
  }
}

module.exports = drawStairs;
