/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n, memo = {}) {
  if (memo[n] !== undefined) return memo[n];
  if (n < 0) return 0;
  if (n < 2) return 1;
  else return memo[n] = countStairs(n - 1, memo) + countStairs(n - 2, memo);
}

module.exports = countStairs;
