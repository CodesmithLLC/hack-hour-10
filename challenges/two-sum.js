/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n){
  return twoSumLinear(arr, n);
} 

function twoSumNSquared(arr, n){
  for(let i = 0; i < arr.length; ++i){
    for(let j = i+1; j < arr.length; ++j){
      if(i+j === n){
        return true;
      }
    }
  }
  return false;
}

function twoSumLinear(arr, n){
  if(!arr) return undefined;
  if(arr.length <= 1) return undefined;

  let tracker = {};
  let difference = 0;
  for(let i = 0; i < arr.length; ++i){
    difference = n - arr[i];
    // console.log(`i[${i}] arr[${i}]:${arr[i]}    difference ${difference}`);
    // console.log(tracker);
    if(tracker[difference] !== undefined){
      // console.log(`found at ${i} val ${arr[i]} difference ${difference}`);
      return true;
    }
    tracker[arr[i]] = i;
  }
  // console.log('returning false');
  return false;
}

module.exports = twoSum;
