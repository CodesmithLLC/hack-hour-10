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
  function permute(staticArr, dynamicArr) {
    if (!dynamicArr.length) {
      callback(staticArr);
      return;
    }
    for (let i = 0; i < dynamicArr.length; i++) {
      permute(staticArr.concat(dynamicArr[i]),
      dynamicArr
        .slice(0, i)
        .concat(dynamicArr
          .slice(i + 1)));
    }
    return;
  }
  permute([], arr);
}

module.exports = eachPermutation;

// testing
// eachPermutation([1, 2, 3], (perm) => console.log('found', perm));
