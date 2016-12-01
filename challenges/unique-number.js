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

  let storage = {};

  array.forEach((el) => {
    if (storage[el]) {
      storage[el]++;
    } else {
      storage[el] = 1;
    }
  })

  for (let key in storage) {
    if (storage[key] === 1) {
      return key;
    }
  }
}

console.log(uniqueNumber([1,2,1,3,3]));

module.exports = uniqueNumber;
