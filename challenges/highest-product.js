'use strict'
/**
 */

function highestProduct(array) {
	let emptyArray = [];
	let thereAreNoNegs = false;
	let sortedArray = array.sort(function(a,b){ return a-b; });

	thereAreNoNegs = sortedArray.every(elem => elem >= 0);

	if(thereAreNoNegs){
		return sortedArray[sortedArray.length-1] * sortedArray[sortedArray.length-2] * sortedArray[sortedArray.length-3];
	} else {
		let mostLarge = sortedArray[sortedArray.length-1]; // 2
		let secondLarge =  sortedArray[sortedArray.length-2]; // 2
		let thirdLarge =  sortedArray[sortedArray.length-3]; //1


		let onlyPositives = sortedArray.filter((value) => {if(value >= 0) return value; }); // [1,2,2];
		let onlyNegatives = sortedArray.filter((value) => {if(value < 0) return value; }); // [ -5000, -4000, -2, -1 ]
		let transformedNegatives = onlyNegatives.map((value) => { return value * -1; }); // [ 5000, 4000, 2, 1 ]

		for(var i = 0; i < transformedNegatives.length; i++){
			if (transformedNegatives[i] > mostLarge){
				mostLarge = transformedNegatives[i];
				continue;
			}
			if (transformedNegatives[i] > secondLarge){
				secondLarge = transformedNegatives[i];
				continue;
			}
			if (transformedNegatives[i] > thirdLarge){
				thirdLarge = transformedNegatives[i];
				continue;
			}
		}
		return mostLarge * secondLarge * thirdLarge;
	}// end of else

}// enc of function
console.log(highestProduct([-2,-1,0,1,2,2,-4000, -5000]));
 			// [5,8,12,44,130]; // 68640
 			// [-4000, -5000, 1, 2, 3] // -60000000
 			// [ -5000, -4000, 1, 2, 3 ]

 			// [-2,-1,0,1,2,2-4000, -5000] // 4
 							// [0,1,2,2] --> save the largest 3 into diff variables:
 							// 		mostLarge = 2
 							// 		secondLarge = 2
 							// 		firstLarge = 1
 							//		all of them multiplied === tempProduct = 6.

 							// [-2,-1] -->
 							//	[-4000, -2, -1] -->
 							//		transform the negative array into positives // [2,1] && [5000, 4000, 2, 1] //
 							//		if of the numbers in the NOW positive array are LARGER than the values stored in the variables, supplant that variable with that value, starting with MOST large  & hit continue, so it will go onto the next number in the positives array.

module.exports = highestProduct;





