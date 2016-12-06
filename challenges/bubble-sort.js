// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1],  array[i]];
      i = 0;
    }
  }
  return array;
}

module.exports = bubbleSort;
