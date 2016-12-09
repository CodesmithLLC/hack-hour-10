/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  // Now from the least numbers, we can break down the 'two'
  // steps into 'ones' steps and find all the possible combinations
  // with that. Following, we can add that amount to a counter.

  // We need to account for the same combos
  // Combo formala: (n, r) = n! / (r! (n - r)!)
  let sample, steps;
  let count = 0;
  n % 2 === 0 ? (sample = 0, steps = n / 2) : (sample = 1, steps = Math.ceil(n / 2));
  for (steps; steps <= n; steps += 1, sample += 2) count += getCombinations(steps, sample);
  return count;
}

function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

function getCombinations(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

console.log(countStairs(100));

module.exports = countStairs;
