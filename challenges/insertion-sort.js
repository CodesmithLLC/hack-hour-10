// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  // Pointer at current element
  // Next pointer and next element relative to current
  // Compare current and next pointers
  // If next is greater than current, then swap numbers
  // After swap, check backwards with a previous pointer
  // // ends when current is greater than previous

  for (let i = 1; i < array.length; i++) {
    function swap(current, previous, idx) {
      array[idx] = previous;
      array[idx - 1] = current;
    }

    for (let j = i; j >= 1; j--) {
      const current = array[j];
      const previous = array[j - 1];
      if (current >= previous) break;
      swap(current, previous, j);
    }
  }

  return array;
}

module.exports = insertionSort;