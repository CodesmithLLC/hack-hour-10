/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  let steps = [2,1];
  let result = 0;
  function recurser(n) {
    if (n === 0) return result++;
    for (let i = 0; i < steps.length; i++) {
      if (n - steps[i] >= 0) recurser(n - steps[i]);
    }
  }
  recurser(n);
  return result;
}

module.exports = countStairs;
