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
	var stairs = "";
	let stairLength = n;

	while (n > 0) {
		var spaces = n - 1;
		for (var i = 1; i <= stairLength; i++) {
			if (spaces > 0) stairs += " ";
			else stairs+= "*";
			spaces--;
		}
		stairs += '\n';
		n--;
	}
	console.log(stairs);
}


module.exports = drawStairs;
