/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

// BONUS
function uniqueNumber(array) {
  return array.reduce((sum, next) => sum^next);
}

function uniqueNumber2(array) {
  // Cache how many times each number appears
  const cache = {};
  array.forEach(number => {
    if (!cache[number]) cache[number] = 0;
    cache[number]++;
  });

  // Find the number that only appears once in cache
  let uniqNum;
  for (const num in cache) {
    const freq = cache[num];
    if (freq === 1) uniqNum = num;
  }

  return uniqNum;
}

module.exports = uniqueNumber;
