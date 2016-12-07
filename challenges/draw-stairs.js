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
	var spaceString = "";

for(let i = 1; i < n; i++){
	spaceString += " ";
}

for (let i = "*"; i.length <= n; i += "*"){
  console.log(spaceString+i+'\n');
}
}



module.exports = drawStairs;


/*
1. write a for loop from 1 - n (i = "*"; i <= n; i += "*")
console.log it
2.  adjust for "/n" line breaks


 */