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

function fizzbuzz(num) {	
	// create an empty array to store the inputs
	let holder = [];
	// loop through each element in the array and call the function func and push the value into the holder
	for(let i =1; i<=number; i++){ 	holder.push(func(i)); }
	// return the holder
	return holder;

	function func(item){
		// if item is divisible by 3 and 5 return fizzbuzz
		if(item%3 === 0 && item%5 === 0)return "fizzbuzz";
		// if item is only divisible by 5 return buzz
		else if(item%5 ===0) return "buzz";
		// if item is only divisible by 3 return fizz
		else if(item%3 ===0) return "fizz";
		//if item is not divisible by anything just return the item
		else return item;
	}
}

module.exports = fizzbuzz;
