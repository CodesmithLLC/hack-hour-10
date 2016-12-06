// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < array.length; k++) {
      console.log(array);
      if (array[k] > array[k+1]) {
        temp = array[k];
        array[k] = array[k+1];
        array[k+1] = temp;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
