// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let len = array.length;
  let tmp;
  while(len) {
    for (let i = 0; i < len; i++) {
      if (array[i] > array[i + 1]) {
        tmp = array[i];;
        array[i] = array[i + 1];
        array[i + 1] = tmp;
      }
    }
    len--;
  }
  return array;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));

module.exports = bubbleSort;
