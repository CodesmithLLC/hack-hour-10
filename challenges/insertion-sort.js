// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  if(array.length < 2) return array;
  for(let i = 0; i < array.length; i++) {
    for(let j = i - 1; j > -1; j--){
      if(array[i] < array[j] && array[i] > array[j - 1] || j - 1 == -1){
        array.splice(j, 0, array[i]);
        array.splice(i + 1, 1);
      }
    }
  }
  return array;
}

module.exports = insertionSort;