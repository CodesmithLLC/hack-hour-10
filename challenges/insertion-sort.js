
// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j >= 0; j--) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
      else break;
    }
  }
  return array;
}


module.exports = insertionSort;