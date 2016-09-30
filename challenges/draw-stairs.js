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
	var retString = "";
	var spaceString = "";
	var stairString = "*";
	for(var i = 0; i < n-1; ++i){
		spaceString += " ";
	}
	for( var i = 0; i < n; ++i){
		console.log(spaceString + stairString);
		retString += spaceString + stairString + (i !== n-1 ? "\n" : "");
		stairString += "*";
		spaceString = spaceString.substring(0, spaceString.length - 1);

	}
	return retString;
}
drawStairs(100);
module.exports = drawStairs;
