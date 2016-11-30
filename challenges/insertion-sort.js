// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for(let i = 0; i < array.length; ++i){
    let j = i;
    while(j > 0 && array[j-1] > array[j]){
      let temp = array[j];
      array[j] = array[j-1];
      array[j-1] = temp;
      j--;
    }
  }
  return array;
}

module.exports = insertionSort;