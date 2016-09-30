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
	function repeat(string, times) {
		var result = "";
		for (let i = 1; i <= times; i++) {
		  result = result + string;
		}
		return result;
	}

	if (1> n || n > 100) {
		return console.log("invalid number");
	} else {
		let star = "*";
		let space = " ";

		for (let i = 1; i <= n; i++) {
			console.log(repeat(space, n - i) + repeat(star, i));
		}
	}
}


module.exports = drawStairs;
