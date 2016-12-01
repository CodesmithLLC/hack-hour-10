// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


// DO IT IN PLACE!


function insertionSort(array) {
  // i = slow, j = fast
  // i starts at beginning, j starts at position 1
  // i -> , j <-
  // don't forget - circle + temp variable for swapping values in position

  let temp;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j >= 0; j--) {
      if (array[j] < array[j - 1]) {

        temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}


let arr = [8, 4, 7, 2, 1, 3, 5];
console.log(insertionSort(arr)); // [1, 2, 3, 4, 5, 7, 8];

module.exports = insertionSort;

// let arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   arr.splice(1, 0, 1)
//   console.log(arr.length);
// }