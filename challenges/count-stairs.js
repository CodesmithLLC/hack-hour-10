/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  if (n < 1) return 0;
  return 1 + countStairs(n - 1) + countStairs(n - 2);
}

// console.log(countStairs(1)); // => 1
// console.log(countStairs(2)); // => 2
// console.log(countStairs(3)); // => 4
// console.log(countStairs(4)); // => 
// console.log(countStairs(5)); // => 

// Notes: Fibonacci, binary tree height, countStairs algos all recurse similarly

module.exports = countStairs;
