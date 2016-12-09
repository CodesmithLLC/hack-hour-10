/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  let cache = [];
  const recurse = (n, string) => {
    if (n === 0 && !cache.includes(string)) return cache.push(string);
    if (n - 2 >= 0) recurse(n - 2, string + '2');
    if (n - 1 >= 0) recurse(n - 1, string + '1');
  }
  recurse(n, '')
  return cache.length;
}

module.exports = countStairs;
