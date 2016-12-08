// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
	let position = array.length - 1;
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j+1]) {
				let bigger = array[j];
				array[j] = array[j+1];
				array[j+1] = bigger;
			}
		}
		position--;
	}
	return array;
}

module.exports = bubbleSort;
