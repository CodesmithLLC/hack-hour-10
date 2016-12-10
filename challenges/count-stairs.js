/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {

  function getToN(sum) {
    if (sum === n) {
      return 1;
    } if (sum > n) {
      return 0;
    } else {
      return getToN(sum+2) + getToN(sum+1);
    }
  }
  return getToN(0);
}


module.exports = countStairs;
