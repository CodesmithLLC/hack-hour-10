/**
 * Determine how many ways you can go up a
 * flight of n stairs, either taking 1 or 2
 * steps at a time.
 *
 * @param {number} n
 * @return {number}
 */
function countStairs(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return countStairs(n - 1) + countStairs(n - 2);
}

module.exports = countStairs;
