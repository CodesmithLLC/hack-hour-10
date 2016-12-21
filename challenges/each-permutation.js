/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include every element from the array. Permutations must not repeat any of the array elements.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});

[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]

///
1,2,3
2,1,3
3,1,2

*/


function swap(array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
}

function eachPermutation (array, callback, n = array.length) {
  if (n === 1) {
    callback(array);
  } else {
    for (var i = 1; i <= n; i += 1) {
      eachPermutation(array, callback, n - 1);
      if (n % 2) {
        var j = 1;
      } else {
        var j = i;
      }
      swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
    }
  }
}

var sample = [1, 2, 3];

console.log(eachPermutation(sample, function(perm) {
  console.log(perm);
}));


module.exports = eachPermutation;
