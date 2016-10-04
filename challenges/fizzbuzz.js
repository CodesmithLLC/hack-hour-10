function fizzbuzz(num) {
	if (Number.isInteger(num) && num > 0) {
		const result = [];

		for (let i = 1; i <= num; i++) {
			if (i % 15 === 0) result.push('fizzbuzz');
			else if (i % 3 === 0) result.push('fizz');
			else if (i % 5 === 0) result.push('buzz');
			else result.push(i);
		}

		return result;
	} else {
		return 'Please input an integer greater than 0';
	}
}

function assert(value, description) {
    let result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description); 
};

assert(JSON.stringify(fizzbuzz(3)) === JSON.stringify([1, 2, 'fizz']), 'testing if input 3 passes');

module.exports = fizzbuzz;
