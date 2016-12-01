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
function uniqueNumber(array) {
  // time: 0(n), space: 0(n);
  if (!Array.isArray(array) || !array) return false;
  const cache = {};
  array.forEach((num) => {
    if (!cache[num]) cache[num] = 1;
    else if (cache[num] === 1) cache[num] = 2;
  });
  for (let key in cache) {
    if (cache[key] === 1) return key;
  }
  return false;
}
// console.log(uniqueNumber([1, 2, 2, 1, 3]));
module.exports = uniqueNumber;
