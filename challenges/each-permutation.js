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


// function eachPermutation(arr, callback, curr = [], layer = 0) {
//   console.log(`called`);
//   console.log(arr);
//   console.log(curr);
//   if(arr.length === 0){
//     console.log(`=======================> callback(${curr})`);
//     return;
//   }
//   arr.forEach((elem, idx) => {
//     eachPermutation([...arr.slice(0,idx), ...arr.slice(idx+1)], callback, [...curr, ...arr.slice(idx,1)]);
//   });
// }

function eachPermutation(arr, callback, curr = [], layer = 0) {
  if(arr.length === 1){
    // console.log(`===============================>${[...curr, ...arr]}`);
    callback([...curr, ...arr]);
  }else{
    arr.forEach((elem, idx) => {
      // console.log(`layer ${layer} arr =============================    idx ${idx}`);
      // console.log(`arr`);
      // console.log(arr);
      // console.log(`sliced`);
      // console.log([...arr.slice(0,idx), ...arr.slice(idx+1)])
      // console.log(`curr`);
      // console.log([...arr.slice(idx,1), ...curr]);
      eachPermutation([...arr.slice(0,idx), ...arr.slice(idx+1)], callback, [...arr.slice(idx,idx+1), ...curr], layer + 1);
    });
  }
}
eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});

module.exports = eachPermutation;
