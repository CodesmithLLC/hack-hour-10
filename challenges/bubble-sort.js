// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  // console.log('sorting: ', array);
  let hasChanged;
  do {
    hasChanged = false;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        hasChanged = true;
      }
    }
  } while (hasChanged)
  return array;
}

module.exports = bubbleSort;

// testing
// console.log(bubbleSort([1, 2, 3, 4]));
// console.log(bubbleSort([4, 3, 2, 1]));
// console.log(bubbleSort([1, 4, 3, 2]));
