// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function swap(array, one, two) {
  const temp = array[one];
  array[one] = array[two];
  array[two] = temp;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let one = i, two = i - 1;
    while (array[one] < array[two]) {
      swap(array, one, two);
      one-- , two--;
    }
  }
}

module.exports = insertionSort;

let array = [6, 5, 3, 1, 8, 7, 2, 4];
insertionSort(array);
console.log(array);