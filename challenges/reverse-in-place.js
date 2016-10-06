/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 */
"use strict"

function reverseInPlace(array) {
	//if input is not an array:
	if(!Array.isArray(array)) return "error";

	let lengthOfArray = array.length;

	//if array is empty
	if(lengthOfArray === 0) return [];
	//if array is 1 item long
	if(lengthOfArray === 1) return array;
	//LOOPING for array longer 4+ items, means you change the first and last but you have to address the middle.
	//array[i] is going to start from the left
	//array[lengthOfArray-j] == starts from the right
	if(lengthOfArray > 1){
		for(let i = 0, j=1; i < lengthOfArray-j; i++, j++){
			let temp = array[i];
			array[i] = array[lengthOfArray-j];
			array[lengthOfArray-j] = temp;
		}
		return array;
	}
}
console.log(reverseInPlace()); // error
console.log(reverseInPlace(5)); // error
console.log(reverseInPlace([])); //[]
console.log(reverseInPlace(['c'])); //['c']
console.log(reverseInPlace(['c','a'])) //[a,c]
console.log(reverseInPlace(['c','a','ts'])); //[ts, a, c]
console.log(reverseInPlace(['c','a','t', 'd','r', 'sds', '23'])); // [sds,r,d,t,a,c]

module.exports = reverseInPlace;