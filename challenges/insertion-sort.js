// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let sorted = 0; sorted < array.length; sorted++) {
    for (let move = sorted + 1; array[move] < array[move - 1]; move--) {
      [array[move], array[move - 1]] = [array[move - 1], array[move]];
    }
  }
  return array;
}

module.exports = insertionSort;
