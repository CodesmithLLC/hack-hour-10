/*
Write a function that takes two arguments, an array and a callback. The callback will be
called once for each permutation of the elements of the array,
where the permutation is passed as an argument.

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

function eachPermutation(arr, callback) {
  
  // Use storage array to filter dupes if necessary
  const permutations = [];

  // Helper function stores then deletes one element before traversing to next item in the array
  function permutator(array, memo = []) {
    if (!array.length) permutations.push(memo);
    array.forEach((ele, idx) => permutator(array.slice(0, idx).concat(array.slice(idx + 1)), memo.concat(ele)));
  }

  // Create all permutations
  permutator(arr);

  // Apply callback
  permutations.forEach(permutation => callback(permutation));
}

// console.log(eachPermutation([1, 2, 3], function(perm) {
//   console.log(perm)
// }));

module.exports = eachPermutation;
