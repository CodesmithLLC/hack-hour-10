function modemean(array) {
	let total = 0;
	let numObj = {};
	let mean; 
	let mode = 0;
	let modeCount = 0;
	
	for(let i = 0; i < array.length; i++){
		total += array[i];
		if(numObj[array[i]]) {
			numObj[array[i]]++;
		}
		else {
			numObj[array[i]] = 1;
		}
	}
	mean = Math.floor(total / array.length);
	
	for(let key in numObj) {
		if(numObj[key] > modeCount) {
			modeCount = numObj[key];
			mode = key;
		}
		if(numObj[key] === modeCount && key > mode){
			modeCount = numObj[key];
			mode = key;
		}
	}
	return Number(mode) === mean;
}

module.exports = modemean;