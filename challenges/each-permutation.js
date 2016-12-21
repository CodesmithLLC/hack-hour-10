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
  let count = 1;
  let length = arr.length;
  for (let i = length; i > 0; --i) { 
    count *= i;
  }
  let startingIndex = length;
  function helper(array, callback, counter) { 
    if (counter === 1) return null;
    else {
      //callback(array);
      for (var i = 0; i < counter; i++) { 
        helper(array, callback, counter - 1);
        console.log('array ::::::     ', array)
        if (!(i % 2)) {
          var copyeven = array;
          var store = copyeven[counter - 1];
          copyeven[counter - 1] = copyeven[i];
          copyeven[i] = store;
          array = copyeven;
          console.log('copy even :::::  ', array);
        }
        else { 
          var copyodd = array;
          var storage = copyodd[counter - 1];
          copyodd[counter - 1] = copyodd[0];
          copyodd[0] = storage; 
          array = copyodd;
          console.log('odd ::::: ', copyodd);
        }
      }
     helper(array, callback, counter - 1);
    }
  }

  helper(arr, callback, startingIndex);

}

eachPermutation([1, 2, 3], null);

module.exports = eachPermutation;
