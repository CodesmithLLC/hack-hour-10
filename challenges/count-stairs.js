/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  var count = 0;
  var holder = [];
  for (let i = 0; i <= n; i++) { 
    if (Number.isInteger(((n - i) / 2)) && ((n - i) / 2) !== 0) { 
      holder.push(((n - i) / 2) + i)
    }
  }
  return holder.reduce((a, b) => {
    var toreturn = 1;
    for (var i = b; i > 0; --i) { 
      toreturn *= i;
    }
    return a + toreturn;
  }, 0);
}
module.exports = countStairs;
