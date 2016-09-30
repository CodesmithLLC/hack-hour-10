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
    if (typeof n === 'string') n = Number(n);
    if(typeof n === 'number' && !isNaN(n)) {
        let space = [];
        let star = '*';
        for (var i = 1; i <= n; i++) {
            space.push(' ');
        } 
        for (var j = 1; j <= n; j++) {
            space.shift();
            space.push(star);
            console.log(space.join(''));
            
        }
    }

}


module.exports = drawStairs;
