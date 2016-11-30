// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for(let i = 1; i < array.length; i++) {
    for(let j = i; j > 0, array[j-1] > array[j]; j--) {
      let temp = array[j];
      array[j] = array[j-1];
      array[j-1] = temp;
    }
  }
  return array;
}

console.log(insertionSort([4, 3, 2, 1]))

module.exports = insertionSort;