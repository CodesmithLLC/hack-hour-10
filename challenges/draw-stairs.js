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

	let holder = "";

	for(let i = 1; i<=n; i++){
		let counter = n - i;
		for (let k = 1; k<=counter; k++) {
			holder +=" ";
		}

		for(let j = 1; j<=i; j++){
			holder +="*";
		}

		console.log(holder);

		counter = 0;
		holder ="";
	}



}

drawStairs(8);


module.exports = drawStairs;
