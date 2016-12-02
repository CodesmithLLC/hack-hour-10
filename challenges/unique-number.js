/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * 
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

// O(1) space complexity
function uniqueNumber(array) {
  for (let i = 0; i < array.length; i++) {
    const index = Math.abs(array[i]);
    array[index] = -array[index]
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) return i;
  }
}

// O(n) space complexity
// function uniqueNumber(array) {
//   const seenMoreThanOnce = {};
//   const seenOnce = {};
//   array.forEach((num) => {
//     if (seenOnce[num]) {
//       delete seenOnce[num]
//       seenMoreThanOnce[num] = true
//     }
//     else if (!seenMoreThanOnce[num]) seenOnce[num] = true;
//   });
//   return Object.keys(seenOnce)[0];
// }

console.log(uniqueNumber2([1, 2, 1, 3, 3]));

module.exports = uniqueNumber;
