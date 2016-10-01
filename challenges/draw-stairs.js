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

  let row = "";
  let block = "";
  let k = 1;


  function createRow(num) {
    let whitespace = "";
    let stars = "";
    for (let i = 1; i <= num; i++) {
      stars += "*";
    }
    for (let j = 1; j <= (n-num); j++) {
      whitespace += " ";
    }
    row = whitespace + stars;
    return row;
  }

  while (k <= n) {
    row = createRow(k);
    block += row + "\n";
    k++;
  }

  console.log(block);

}


module.exports = drawStairs;
