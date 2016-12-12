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
//   let cache = {};
  
//   array.forEach((num) => {
//     if (!cache[num]) cache[num] = 1;
//     else cache[num]++;
//   });

//   for (let num in cache) {
//     if (cache[num] === 1) return Number(num);
//   }
//   return false;
// }

const uniqueNumber = (array) => {
    return array.reduce((a, c) => a ^ c);
}

console.log(uniqueNumber([1,2,1,3,3,2,5]));

module.exports = uniqueNumber;
