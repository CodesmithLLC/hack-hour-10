// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {

  // Helper function to swap elements in given array
  function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  
  // Loop starting after first element since it's already "sorted"
  for (let i = 1; i < array.length; i++) {

    // For each element, check previous element for larger value.
    // Larger values move up the array until they encounter a value larger than themselves.
    // Smaller values move down the array and will already be sorted as result of previous swaps.
    for (j = i; j > 0 && array[j - 1] > array[j]; j--) {
      swap(array, j, j - 1);
    }
  }

  // Array was sorted in-place
  return array;
}

// const arr1 = [1, 2, 4, 5, 3];
// const arr2 = [];
// const arr3 = [0];
// const arr4 = [3, 2];
// const arr5 = [6, 5, 4, 3, 2];
// console.log(insertionSort(arr1));
// console.log(insertionSort(arr2));
// console.log(insertionSort(arr3));
// console.log(insertionSort(arr4));
// console.log(insertionSort(arr5));

module.exports = insertionSort;