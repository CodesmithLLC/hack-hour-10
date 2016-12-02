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
 return array.reduce((a, b) => a ^ b)
//   var store = {}
//   for (var i = 0; i < array.length; i++) { 
//     if (!store[array[i]]) store[array[i]] = 1
//     else ++store[array[i]]
//   }
//   for (var keys in store) {
//     if(store[keys] === 1) return keys 
//   }
//  // return null
//   return array.sort((a, b) => a - b).reduce(())
}

module.exports = uniqueNumber;
