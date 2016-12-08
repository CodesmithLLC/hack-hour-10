/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  let counter = 0;
  function perms(n) {
    if (n === 0) return counter += 1;
    perms(n - 1) || perms(n - 2);
  }

  perms(n);
  return counter;
}

module.exports = countStairs;

// 1 : 1 = 1
// 2 : 1 + 1, 2 = 2
// 3 : 1 + 1 + 1, 1 + 2, 2 + 1 = 3
// 4 : 1 + 1 + 1 + 1, 1 + 1 + 2, 1 + 2 + 1, 2 + 1 + 1, 2 + 2 = 5

// console.log(countStairs(1)); // 1
// console.log(countStairs(2)); // 2
// console.log(countStairs(3)); // 3
// console.log(countStairs(4)); // 5
// console.log(countStairs(10)); // 89