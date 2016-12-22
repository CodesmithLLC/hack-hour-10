/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
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
  let length = arr.length;
  function helper(permutation, array, fn) { 
    if (permutation.length === length) fn(permutation);
    else { 
      array.forEach((value, i) => {
        let nextSet = array.slice(0, i).concat(array.slice(i + 1));
        helper([...permutation, value], nextSet, fn);
      });
    }
  }
  helper([], arr, callback);
}

eachPermutation([1, 2, 3], (str) => { console.log(str)});

module.exports = eachPermutation;
