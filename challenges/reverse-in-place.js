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

function reverseInPlace(array) {
	if(!Array.isArray(array)) return;
	let length = array.length;
	while(length){
		for(let i =0; i<array.length-1;i++){
			if(array[i].charCodeAt(0) < array[i+1].charCodeAt(0)) {
					let temp = array[i];
					array[i] = array[i+1];
					array[i+1] = temp;
				}
			}
	  length--;
	}
	return array;
}

console.log(reverseInPlace());
module.exports = reverseInPlace;