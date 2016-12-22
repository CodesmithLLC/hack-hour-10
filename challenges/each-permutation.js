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
  if(arr.length < 2) callback(arr);


  function find(n, arr) {
    if(n === 1) {
      callback(arr);
      return;
    } else {
      for(let i = 0; i < n-1; i++) {
        find(n - 1, arr);
        if(n % 2 === 0) {
          let temp = arr[i];
          arr[i] = arr[n-1];
          arr[n-1] = temp;
        } else {
          var temp = arr[0];
          arr[0] = arr[n-1];
          arr[n-1] = temp;
        }
      }
      find(n - 1, arr);
    }
  }
  find(arr.length, arr)
}



module.exports = eachPermutation;
