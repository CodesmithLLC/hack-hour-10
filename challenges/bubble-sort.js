// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


// // TESTS:
// let array = [5, 4, 3, 2, 1];
// console.log(bubbleSort(array));


function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}


module.exports = bubbleSort;
