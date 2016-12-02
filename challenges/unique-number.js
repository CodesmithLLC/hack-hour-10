/**
 * Given an array of IDs, which contains many duplicate integers (there are only two max)
 * and one unique integer, find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

// Sort O(n logn)
function uniqueNumber(array) {
  array = array.sort(function (a, b) { return a - b; });
  for (var i = 0; i < array.length - 1; i += 2) {
    if (array[i] !== array[i + 1]) {
      return array[i];
    }
  }
  return array[array.length - 1];
}

// // Add/Remove Duplicates O(n)
// function uniqueNumber(array) {
//   var store = {};

//   for (var i = 0; i < array.length; i++) {
//     if (array[i] in store) {
//       delete store[array[i]];
//     } else {
//       store[array[i]] = true;
//     }
//   }

//   return Object.keys(store)[0];
// }

// // O(n) time functional style
// function uniqueNumber(array) {
//   if (array.length === 1) return array[0];
//   if (array.length === 2) return undefined;
//   let unique;

//   const cache = array.reduce((all, item) => {
//     if (all[item]) all[item]++;
//     else all[item] = 1;
//     if (all[item] === 1) unique = item;
//     return all;
//   }, {});

//   for (let prop in cache) {
//     if (cache[prop] === 1) unique = prop;
//   }

//   return unique;
// }


// console.log(uniqueNumber([1, 2, 1, 3, 3])); //-> 2

module.exports = uniqueNumber;
