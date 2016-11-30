// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  // already sorted array
  if (array.length === 0 || array.length === 1) return array;

  /**
    * Insertion sort algorithm
    *
    * Array now has 1) a sorted portion, which is initially the first element, and
    *               2) an unsorted portion, which is initially the second element (if it exists)
    * Iterate through array
    *   If current element is less than the first element
    *     Move current element to the front of the array
    *   If current element is greater than the previous element (aka greatest value in the sorted portion of the array)
    *     Continue iterating, element is in correct position
    *   If neither above 2 conditions are true, iterate through sorted portion of array
    *     Find where the current element belongs and move it there
    */
  for (let i = 1; i < array.length; i++) {
    const curr = array[i];
    if (curr <= array[0]) {
      array.splice(i, 1);
      array.unshift(curr);
    } else if (curr >= array[i-1]) {
      continue;
    } else {
      for (let j = 1; j < i; j++) {
        if (curr < array[j]) {
          array.splice(i, 1);
          array.splice(j, 0, curr);
          break;
        }
      }
    }
  }
  return array;
}

// function isSorted(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (i + 1 !== array.length && array[i] > array[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// const arr = [5, 3, 1, 6, -1, 0, 6];
// console.log(isSorted(arr));
// console.log(isSorted(insertionSort(arr)));
// console.log(isSorted(insertionSort([5, 3])));
// console.log(isSorted(insertionSort([5])));
// console.log(isSorted(insertionSort([])));
// console.log(isSorted(insertionSort([100, 5, 1, 7, 7, 44, -1, -1, -11, -5])));

module.exports = insertionSort;
