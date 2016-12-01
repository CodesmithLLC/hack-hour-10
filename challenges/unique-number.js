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
  const store = {};
  array.forEach((item) => {
    if (store[item] === undefined) store[item] = 1
    else store[item] = store[item] += 1;
});
  for (let key in store) {
    if (store[key] === 1) return key;
  }
}

module.exports = uniqueNumber;
