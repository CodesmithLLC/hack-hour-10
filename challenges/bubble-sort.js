// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let go_swap = true;
  let temp;

  while (go_swap) {
    let all_good = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        all_good = true;
      }
    }
    if (!all_good) go_swap = false;
  }

  return array;
}

module.exports = bubbleSort;
