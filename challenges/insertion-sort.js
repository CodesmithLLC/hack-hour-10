// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  const sortedArray = [array[0]];
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    if (current >= sortedArray[sortedArray.length - 1]) sortedArray.push(current);
    else {
      let buffer;
      for (let j = 0; j < sortedArray.length; j++) {
        if (current < sortedArray[j] && buffer === undefined) {
          buffer = sortedArray[j];
          sortedArray[j] = current;
        } else if (buffer !== undefined) {
          const bufferCopy = buffer;
          buffer = sortedArray[j];
          sortedArray[j] = bufferCopy;
        }
      }
      if (buffer) sortedArray.push(buffer);
    }
  }
  return sortedArray;
}

module.exports = insertionSort;