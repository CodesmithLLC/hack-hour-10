<<<<<<< HEAD
/*  Given an array of numbers and a target number, return true if there are two numbers in the
=======
/*  Given an array of numbers and a target number, return true if there are two numbers in the 
>>>>>>> 124383488a9afbdcfc751399f0edaab82ddd1178
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
<<<<<<< HEAD
  if (!arr.length) return [];
  // The most niave of methods
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) return true;
    }
  }
  return false;
}

module.exports = twoSum;
// const arr1 = [1, 2, 5, 7, 9, 10];
// const arr2 = [-2, 2, 5, 13, 9, 10];
//
// console.log(twoSum(arr1, 12));
// console.log(twoSum(arr1, 15));
// console.log(twoSum(arr1, 13));
//
// console.log(twoSum(arr2, 8));
// console.log(twoSum(arr2, 18));
// console.log(twoSum(arr2, 13));
=======

}

module.exports = twoSum;
>>>>>>> 124383488a9afbdcfc751399f0edaab82ddd1178
