// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let temp;
  if (array.length <= 1) return array;

  for (let i = 1; i < array.length; i++) {
    for (let k = i; k > 0; k--) {
      if (array[k] < array[k - 1]) {
        temp = array[k];
        array[k] = array[k - 1];
        array[k - 1] = temp;
      } else continue;
    }
  }
  return array;
}

module.exports = insertionSort;

var arr = [6,5,3,1,8,7,4,2]

console.log(insertionSort(arr));