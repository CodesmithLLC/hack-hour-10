// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  const unsortedArray = array.slice();
  const result = unsortedArray.reduce((sortedArray, numToPlace) => {
    let index = 0;
    while (index < sortedArray.length) {
      if (numToPlace <= sortedArray[index]) break;
      index++;
    }
    // console.log(`inserting ${numToPlace} at index ${index}`);
    return sortedArray.slice(0, index).concat(numToPlace).concat(sortedArray.slice(index, sortedArray.length));
  }, []);
  return result;
}

module.exports = insertionSort;
// console.log(insertionSort([9, 1, 5, 2, 7, 9, 3, 1]));
