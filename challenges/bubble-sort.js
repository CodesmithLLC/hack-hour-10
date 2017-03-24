// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(arr) {

  // Use 'i' to set stopping point as each value hits end
  for (let i = arr.length; i > 0; i--) {

    // Swap pairs if previous is greater
    for (let j = 1; j < i; j++) {
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  
  // Array sorted in-place
  return arr;
}

// console.log(bubbleSort([1, 5, 7, 0]));
// console.log(bubbleSort([1, 2, 3, 4]));
// console.log(bubbleSort([8, 5, 7, 2]));
// console.log(bubbleSort([]));
// console.log(bubbleSort([3]));

module.exports = bubbleSort;
