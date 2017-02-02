// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

// function commonElements(array1, array2, array3, array4){
// 	let args = [...arguments]
// 	let obj = {}
// 	let length = 0;
// 	let result = [];
// 	args.forEach(arr => {
// 		arr.forEach(item => obj[item] ? obj[item]++ : obj[item] = 1)
// 		length++;
// 	})
// 	for (let key in obj) {
// 		if (obj[key] >= length) {
// 			let check = key;
// 			console.log(check);
// 			args.forEach(arr => {
// 				arr.indexOf(check)
// 			})
// 		}
// 	}
// 	console.log(result);
// }

module.exports = commonElements;
var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
var array4 = ['ferret',12,12,45,9,66,77,78,2000];


function commonElements(array1, array2, array3, array4){
	let args = [...arguments].slice(1);
	let result = [];
	array1.forEach(item => {
		args.forEach(arr => {
			if (arr.indexOf(item)) result.push(item)
		})
	})
	console.log(result);
}

commonElements(array1, array2, array3, array4);
