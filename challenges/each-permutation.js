/*
Write a function that takes two arguments, an array and a callback.
The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements.
For this problem, assume each permutation must include
every element from the array. Permutations must not repeat any of the array elements.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation(array, callback) {
  (function perm(arr, parr) {
    if (parr.length === 0) {
      callback(arr);
      return;
    }
    parr.forEach((ele, i) => {
      return perm(arr.concat(ele), parr.slice(0, i).concat(parr.slice(i + 1)));
    });
  })([], array);
  return;
}

// console.log(eachPermutation([1, 2, 3], function (perm) {
//   console.log(perm)
// }));
