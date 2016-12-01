// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort
function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (array[i] < array[j]) {
        const spliced = array.splice(i, 1);
        array.splice(j, 0, spliced[0]);
      }
    }
  }
  return array;
}
const arr = [10,5,3,8,2,6,4,7,9,1]
insertionSort(arr)
module.exports = insertionSort;
