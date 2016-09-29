// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzBuzz(num) {
	let results = [];
	counter = 1;
	while(counter <= num){
		if(counter % 15 === 0){
			results.push('FizzBuzz');
		}
		else if(counter % 5 === 0){
			results.push('Buzz');
		}
		else if(counter % 3 === 0){
			results.push('Fizz');
		}
		else {
			results.push(counter);
		}
		counter++;
	}
    	return results;
}

module.exports = fizzbuzz;
