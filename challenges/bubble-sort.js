// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (!Array.isArray(array)) return null;
  if (array.length < 2) return array;

  for (let i = 0; i < array.length - 1; i++) {
    let isSorted = true;

    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSorted = false;
      }
    }

    if (isSorted) return array;
  }

  return array;
}

module.exports = bubbleSort;
