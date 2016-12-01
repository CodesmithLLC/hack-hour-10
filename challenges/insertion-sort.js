// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

//[1,2,4,5] (6)

function insertionSort(array) {
	for(let i = 0; i < array.length; i++){
			let savedIndex = i;

			while(savedIndex > 0 && array[savedIndex-1] > array[savedIndex]) {
				console.log('this is savedindex', array[savedIndex-1]);
				let temp = array[savedIndex];
				array[savedIndex] = array[savedIndex-1];
				array[savedIndex -1] = temp;
				savedIndex--;
	}
	}
	return array;
}

module.exports = insertionSort;
//
// console.log(insertionSort([1,23,52,21]));

