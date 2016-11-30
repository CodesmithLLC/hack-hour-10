// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  for(let i = 1; i < array.length; i++) {
    let counter = i - 1;
    let temp = array[i];

    while(counter > -1 && array[counter] > temp) {
        array[counter + 1] = array[counter];
        counter--;
    }
    array[counter + 1] = temp;

  }
  return array;
}


module.exports = insertionSort;