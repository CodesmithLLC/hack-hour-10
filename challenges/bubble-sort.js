// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for(let i = 0, flag = 0; i < array.length - 1; ++i) {
    if(array[i] > array[i + 1]) [array[i], array[i + 1]] = [array[i + 1],  array[i]], flag = 1;
    if(i === array.length - 2 && flag) i = -1, flag = 0;
  }
  return array;
}

module.exports = bubbleSort;
