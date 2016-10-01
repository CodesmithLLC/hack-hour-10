/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
<<<<<<< HEAD

 For example:
 drawStairs(6) ->
=======
 
 For example:     
 drawStairs(6) ->          
>>>>>>> 1315ad742ead1caeaeda1300713d1706f65f115a
     *
    **
   ***
  ****
 *****
<<<<<<< HEAD
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
=======
******

*/

function drawStairs(n) {

}


module.exports = drawStairs;
>>>>>>> 1315ad742ead1caeaeda1300713d1706f65f115a
