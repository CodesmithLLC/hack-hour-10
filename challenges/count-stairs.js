/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  let combos;
  for (let i = 0; i < n; ++i) {
    // fibonaaci
  }
}

console.assert(countStairs(4) === 5);
console.assert(countStairs(3) === 3);
console.assert(countStairs(2) === 2);
console.assert(countStairs(1) === 1);
console.assert(countStairs(0) === 0);


module.exports = countStairs;
