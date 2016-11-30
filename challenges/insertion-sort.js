// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(arr) {
  let sorted = false;
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    for (let j = i-1; j >=0; j--) {
      if (arr[j] > val) {
        arr[j + 1] = arr[j];
        arr[j] = val;
      }
    }
  }
  return(arr);
}


// const arr = [6, 5, 3, 1, 8, 7, 2, 4];
// const arr = [5, 4, 3, 2, 1];
// console.log(insertionSort(arr));

module.exports = insertionSort;