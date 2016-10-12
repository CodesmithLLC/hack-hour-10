/* Write string function that console logs a staircase of any given height where 1 <= N <= 100.
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
	function padLeft(string, width, char){
	    return (new Array(width || 2).join(char || 0) + (string || char || 0)).slice(-width);
	}

	let stairs = '';

	for (let i = 1; i <= n; i++) {
		stairs += '*';
		stairs = padLeft(stairs, n, ' ');
		console.log(stairs);
	}
}

drawStairs(10);


module.exports = drawStairs;
