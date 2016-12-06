// Write a function that sorts an array using the bubble sort algorithm
// INFO:
	// 	the sort that steps through the list to be sorted, compares adjacent items, and swaps them if they are in the wrong order. this pass thru list is repeated until no swaps are needed.
	// it is very slow, even slower than insertion sort === it is O(n)squared.
	// it's one advantage is that when the list IS already orted, the complexity goes down to O(n)
//

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
	let length = array.length;
	let wasSwapped = false;

	do {
		wasSwapped = false;
			for ( let i = 0; i < length-1; i++) {
				if (array[i] > array[i+1]) {
					let temp = array[i];
					array[i] = array[i+1];
					array[i+1] = temp;
					wasSwapped = true;
				}
			}
	} while (wasSwapped);

	return array;
}
module.exports = bubbleSort;
