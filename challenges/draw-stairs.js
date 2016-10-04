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
    let row = Array(n-1).fill(' ');
	let star = '*';
    let output = '';

	for (let i = 1; i <= n; i++) {
		console.log(row.join('')+star);
		star+='*';
		row.pop();
	}
}


module.exports = drawStairs;
