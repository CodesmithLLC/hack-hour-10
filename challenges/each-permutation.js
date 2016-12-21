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


function swap(array, firstPosition, secondPosition) {
  var temp = array[firstPosition];
  array[firstPosition] = array[secondPosition];
  array[secondPosition] = temp;
}

function eachPermutation (array, callback, length = array.length) {
	// let numberofcombinations = array.reduce( (accum, curr) => {
	// 	return accum * curr;
	// },1);
	// console.log(numberofcombinations);
  if (length === 1) {
    callback(array);
  } else {
    for (var i = 1; i <= length; i++) {
      eachPermutation(array, callback, length - 1);
      if (length % 2) {
        var j = 1;
      } else {
        j = i;
      }
      swap(array, j - 1, length - 1);
    }
  }
}

var sample = [1, 2, 3];

console.log(eachPermutation(sample, function(perm) {
  console.log(perm);
}));


module.exports = eachPermutation;
