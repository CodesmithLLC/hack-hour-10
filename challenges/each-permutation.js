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
  let perms = [];
  const swap = (a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };
  const generate = n => {
    if (n === 1) {
      perms.push(arr);
    } else {
      for (var i = 0; i != n; ++i) {
        generate(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  };
  generate(arr.length);
  return perms.map(array => callback(array));
}

module.exports = eachPermutation;



