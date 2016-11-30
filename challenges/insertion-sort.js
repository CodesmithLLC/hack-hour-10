// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {

  for (let i=1; i<array.length; i++) {
    let temp = array.splice(i,1)[0];
    let spliced = false;
    for (var j=0; j<i; j++) {
      if (temp < array[j]) {
        array.splice(j, 0, temp);
        spliced = true;
        break;
      }
    }
    if (spliced === false) {
      array.splice(j, 0, temp);
    }
  }
  return array;
}

let arr = [6, 2, 1, 8];
console.log(insertionSort(arr));

module.exports = insertionSort;
