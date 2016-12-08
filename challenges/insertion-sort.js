// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


// function insertionSort(array) {
//
//   // start from the second item in array
//   for(var i = 1; i < array.length; i++) {
//     var temp = array[i];
//
//     // compare to items before index (which are sorted)
//     for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
//       array[j+1] = array[j];
//     }
//     array[j+1] = temp;  // place item in correct location
//   }
//   return array;
// };

function insertionSort(array) {

  for(let i = 1; i < array.length; i++){
    let temp = array[i];
    // console.log('first loop ', array);
    for(let j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
        array[j] = temp;
      // console.log('second loop ', array);
    }
  }
  return array;
}

module.exports = insertionSort;




console.log(insertionSort([2,1,3]));
