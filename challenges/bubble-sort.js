// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
	let swapped = true;
	for (let sorted = array.length - 1; sorted > 0 && swapped; sorted--) {
		swapped = false;
		for (let i = 0; i < sorted; i++) {
			if (array[i] > array[i + 1]) {
				[array[i], array[i + 1]] = [array[i + 1], array[i]];
				swapped = true;
			}
		}
	}
	return array;
}

module.exports = bubbleSort;
