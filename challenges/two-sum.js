/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!n) return true;
  if (!arr.length) return false;
  let obj = {};
  for( let i = 0; i < arr.length; i++){
    if(obj[n - arr[i]]) return true;
    else obj[arr[i]] = 'anythingatallitdoesntreallymattermuchherenowdoesit?';
  }
  return false;
}

module.exports = twoSum;
