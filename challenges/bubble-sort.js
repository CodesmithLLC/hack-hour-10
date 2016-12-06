// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let pass = array.length;
  while (pass) {
    for (let i = 0; i < array.length; i++) {
      let temp = array[i];
      if (array[i + 1] < array[i]) {
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    pass--;
  }
  return array;
}

module.exports = bubbleSort;
