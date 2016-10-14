/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */
"use strict";

function subsetSum(array, target) {
  if(array.length < 0){
    return false;
  }else if(array.length === 1){
    return array[0] === target;
  }
  //let stack = [array[0]];
  let ret = subsetRec(array, target, 1, array[0]);
  function subsetRec(array, target, index, total, stack){
    if(total === array[index]){
      return true;
    }
    //first, recursively call subsetRec with all items from index+1 to end 
    //       of array with the new sum total + array[i]
    for(let i = index+1; i < array.length; ++i){
      if(subsetRec(array, target, i, total + array[i])){
        return true;
      }
    }
    //base cases
    // [1]: total === target so return true so inner if in for loop returns true
    if(total === target){
       //console.log(stack);
       return true;
    }
    // [2]: total exceeds target so return false
    if(total > target){
      return false;
    }
    // [3]: return false for all other cases 
    //      (typically total < target and index < length)
    return false;
  }
  return ret;
}


module.exports = subsetSum;