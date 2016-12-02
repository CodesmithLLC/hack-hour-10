// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

//[1,2,4,5] (6)

function insertionSort(array) {
	for(let i = 0; i < array.length; i++){
			let savedIndex = i;
			// console.log('this is savedIndex before while', savedIndex);
			// 	console.log('this is array[savedIndex-1] VALUE in array before while', array[savedIndex-1]);
			// 	console.log('this is simple index before while', i);
			while(savedIndex > 0 && array[savedIndex-1] > array[savedIndex]) {
				// console.log('IN WHILE = this is savedIndex', savedIndex);
				// console.log('IN WHILE = this is array[savedIndex-1] VALUE in array', array[savedIndex-1]);
				// console.log('IN WHILE = this is simple index', i);
				let temp = array[savedIndex];
				// console.log('this is array[savedIndex]', array[savedIndex]);
				array[savedIndex] = array[savedIndex-1];
				// [array[savedIndex], array[savedIndex -1] = array[savedIndex-1], array[savedIndex]]
				array[savedIndex -1] = temp;
				savedIndex--;
	}
	}
	return array;
}

// module.exports = insertionSort;
//
console.log(insertionSort([1,23,52,21]));

//skip to the 1st index

