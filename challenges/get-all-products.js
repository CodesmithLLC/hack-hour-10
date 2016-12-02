/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
	let resultArray = [];
	let holdingObject = {};

	for(let i = 0 ; i < array.length; i++){
		let currentIndex = i;
		let heldValue = array[i];

		let miniArray = array.map( (value, index) => {
			if(index !== currentIndex){
				return value;
			}
		});
		holdingObject[currentIndex] = miniArray;
	}

	for(var key in holdingObject){
		resultArray.push(holdingObject[key].reduce( (accum, curr, index) => {
			console.log(curr, 'this is curr');
			if(curr !== undefined){
				return accum * curr;
			} else {
				return accum * 1;
			}
		}, 1));

	}
	return resultArray;
}

// module.exports = getAllProducts;
//
console.log(getAllProducts([1, 7, 3, 4])); //->  [84, 12, 28, 21]

//  [7*3*4, 1*3*4, 1*7*4, 1*7*3]

//create an empty obj
//creat an empty array that is the array that you will return @ the end
//create a loop that goes through the array & @ each loop hold the (i) value of the array.
//create an array with the i(value) and the "rest" of the values by using map
//set the key of the object to (the i value) and save the array created above as the value
//after exiting the loop, loop through the object and @ each key[value] multiply all of the values together and push it into the return array.
//remove the undefined values in the array.
//return the return array.