/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

// Recursion + memoize is highly performant

// function memoize(funcName) {
//   const cache = {};
//   return (funcArgs) => {
//     if (!cache[funcArgs]) {
      
//     }
//   }
//   return cache[funcArgs];
// }

function countStairs(n) {
  if (stairs < 0) return 0;
  if (stars <= 1) return 1;
  return countStairs(stairs - 1) + countStairs(stairs - 2);
}

// const countStairs2 = memoize(countStairs);

module.exports = countStairs;
