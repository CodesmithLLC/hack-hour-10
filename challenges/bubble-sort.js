// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        sorted = false;
        [array[i], array[i +1]] = [array[i +1], array[i]];
      }
    }
  }

  return array;
}

const test = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(bubbleSort(test));

module.exports = bubbleSort;
