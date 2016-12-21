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
  if (!Array.isArray(arr)) { throw new Error('Parameter 1 must be an array.') }
  if (typeof callback !== 'function') { throw new Error('Parameter 2 must be a function.') }
  const permutationArr = permutator(arr);
  return permutationArr.forEach(perm => callback(perm));

function permutator(inputArr) {
  const results = [];

  function permute(arr, memo) {
    let cur
    memo = memo || [];

    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

}

// console.log(eachPermutation([1,2,3], function(perm) {
//   console.log(perm)
// }))

module.exports = eachPermutation;
