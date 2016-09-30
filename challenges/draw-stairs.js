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
    for (let i = 1; i <= n; i++) {
        let spacesString = '';
        for (let spaces = 0; spaces < n-i; spaces++)
            spacesString += ' ';
        let astericksString = '';
        for (let astericks = 0; astericks < i; astericks++)
            astericksString += '*';
        console.log(spacesString + astericksString);
    }
}

module.exports = drawStairs;
