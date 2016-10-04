/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
<<<<<<< HEAD

 For example:
 drawStairs(6) ->
=======
 
 For example:     
 drawStairs(6) ->          
>>>>>>> 992b5e295e4cb80eb35f7c83450d8a57b0255c6f
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
<<<<<<< HEAD
  let str = '';
  let count = 0;
  let stars = n-1;
  while (count < n){
    for (let i = 0; i < n; i++){
      if( i < stars ){
      	str += ' ';
      } else {
      	str += '*';
      }
    }
    stars--;
    count++;
		console.log(str);
    str = '';
  }
=======

>>>>>>> 992b5e295e4cb80eb35f7c83450d8a57b0255c6f
}


module.exports = drawStairs;
