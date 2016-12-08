/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  if(n < 1) return 0;
  let find = n => n < 0 ? 0 : n === 0 ? 1 : find(n-1) + find(n-2);
  return find(n);
}

module.exports = countStairs;
