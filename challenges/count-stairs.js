/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  if (n < 1) return 0
  else if (n === 1) return 1
  else if (n === 2) return 2
  else {
    return countStairs(n - 2) + countStairs(n - 1)
  }
}
console.log(countStairs(4));
module.exports = countStairs;
