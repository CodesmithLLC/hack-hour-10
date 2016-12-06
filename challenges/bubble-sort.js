// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let num = array[i];
        array[i] = array[i + 1];
        array[i + 1] = num;
        swapped = true;
      }
    }
  }
  return array;
}

// console.log(bubbleSort([9,6,7,8,3,6,2]));

module.exports = bubbleSort;

