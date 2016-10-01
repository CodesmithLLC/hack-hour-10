/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 *     - Math.floor the mean
 *     - If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

"use strict";
function modemean(array) {
	if(array.length === 0){
		return false;
	}

	let sum = array.reduce(function(a,b){
		return a+b;
	});
	//console.log(sum);
	let average = Math.floor(sum/array.length);

	let modeObj = {};
	for(let i = 0; i < array.length; ++i){
		if(modeObj[array[i]] === undefined){
			modeObj[array[i]] = 1;
		}else{
			modeObj[array[i]]++;
		}
	}

	let currMaxMode;
	for(let modeValue in modeObj){
		if(currMaxMode === undefined){
			currMaxMode = modeObj[modeValue];
		}
		if(modeObj[modeValue] > currMaxMode){
			currMaxMode = modeObj[modeValue];
		}
	}

	let currMaxModeValue;
	for(let modeValue in modeObj){
		if(modeObj[modeValue] === currMaxMode){
			if(currMaxModeValue === undefined){
				currMaxModeValue = modeValue;
			}
			if(modeValue >= currMaxModeValue){
				currMaxModeValue = modeValue;
			}
		}
	}
	//console.log(`average: ${average}`);
	//console.log(`currMaxModeValue: ${currMaxModeValue}`);
	return Number(currMaxModeValue) === average;
}
module.exports = modemean;
