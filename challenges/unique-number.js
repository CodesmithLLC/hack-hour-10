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
// function uniqueNumber(array) {
//   const store = {}
//   let sum = 0;
//   for(let i = 0; i < array.length; i++) {
//     const val = array[i];
//     if (store[val] === undefined) {
//       sum += val;
//       store[val] = true;
//     } else {
//       sum -= val;
//     }
//   }
//   return sum;
// }

function uniqueNumber(array) {
  return array.reduce((acc, cur) => {
    return acc ^ cur;
  })
}

console.log(uniqueNumber([1,2,1,3,3])); // -> 2

module.exports = uniqueNumber;
