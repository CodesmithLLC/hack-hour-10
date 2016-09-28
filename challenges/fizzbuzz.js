function fizzbuzz(stop, start = 1, step = 1) {
	const results = [];
	if(stop.constructor == Number) {
		for (let i = start; i <= stop; i += step) {
			if(!(i % 3) && !(i % 5)) results.push('FIZZBUZZ');
			else if (!(i % 3)) results.push('FIZZ');
			else if (!(i % 5)) results.push('BUZZ');
			else results.push(i);
		}
	}
	else if (typeof stop == 'object') {
		for (let keys in stop) {
			if(!(stop[keys] % 3) && !(stop[keys] % 5)) results.push('FIZZBUZZ');
			else if (!(stop[keys] % 3)) results.push('FIZZ');
			else if (!(stop[keys] % 5)) results.push('BUZZ');
			else results.push(stop[keys]);
		}
	}
	return results;
}

