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

function removeElement(arr, index) {
  const newArray = arr.slice();
  newArray.splice(index, 1);
  return newArray;
}

function eachPermutation(arr, callback) {
  function getPermutations(arr) {
    if (arr.length === 1) return [arr[0]];
    const perms = [];
    for (let i = 0; i < arr.length; i++) {
      const remainderPerms = getPermutations(removeElement(arr, i));
      for (let j = 0; j < remainderPerms.length; j++) {
        perms.push([arr[i]].concat(remainderPerms[j]))
      }
    }
    return perms;
  }
  getPermutations(arr).forEach(perm => { callback(perm) });
}


module.exports = eachPermutation;
