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
******dfa

*/

// nested foor loop
// outside loop with x
// inside loop with " "
// inside loop print n times - 1
// outside loop print 1
// inside decrement
// outside increment


function drawStairs(n) {
  for (var x = "x"; x.length < n; x += "x") {
    var line = "";
    for (var i = 1; i < n; i++) {
      line += " ";
    }
    console.log(line + x)
    line -= " ";
  }
}

module.exports = drawStairs;

drawStairs(5);
