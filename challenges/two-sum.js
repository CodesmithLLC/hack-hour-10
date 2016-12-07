/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */
'use strict'
function twoSum(arr, n) {
	//- remove all of the numbers LARGER than N
	let filteredArray = arr.filter( (value, index) => {
		return value < n;
	});
	//- test to see if the  filteredArray length is greater than > 2;
  if (filteredArray.length < 2) return false;
	//if you take the N and subtract it by a value in the array, if there is a remainder that equals any of the other values in the array return FALSE, if not go onto the next index in the array.
	let lengthofarr = filteredArray.length;
  let index = 0;
	while(lengthofarr > 0){
        lengthofarr--;
        index++;
		let valueBeingLookedAt = filteredArray[index];
      console.log('this is index', index);
		let remainder = n - valueBeingLookedAt;
		if(filteredArray.indexOf(remainder) !== -1){
			return true;
		}
	}
  return false;
}

// let array = [60,7,52, 0, 3, 4, 20];

// console.log(twoSum(array, 55)); // [ 7, 52, 0, 3, 4, 20 ] //true
// console.log(twoSum(array, 30)); // [ 7, 0, 3, 4, 20 ] // false
// console.log(twoSum(array, 7)); // [ 0, 3, 4 ] //true
// console.log(twoSum(array, 3)); // [ 0 ] //false
module.exports = twoSum;

/*

	-

 */
