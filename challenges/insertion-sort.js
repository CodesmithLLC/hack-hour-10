// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  if(array.length < 2) return array;
  for(let i = array.length; i > 0; i--) {
    for(let j = i - 1; j > -1; j--){
      if(array[j] > array[i]){
        let swap = array[i];
        array[i] = array[j];
        array[j] = swap;
      }
    }
  }
  return array;
}

module.exports = insertionSort;