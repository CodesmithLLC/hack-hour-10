// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


// function insertionSort(array) {
//   for (i = 0; i < array.length; i++) {
//     let placeholder = array[i];
//     let swapIndex = i;
//     let j = i - 1;
//     while (placeholder < array[j]) {
//       array[swapIndex] = array[j];
//       array[j] = placeholder;
//       swapIndex--;
//       j--;
//     }
//   }
//   return array;
// }

function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {

     //Copy of the current element.
    var tmp = array[i];

    // Check through the sorted part and compare with the number in tmp. If large, shift the number.
    for (var j = i - 1; j >= 0 && (array[j] > tmp); j--) {

      //Shift the number
      array[j + 1] = array[j];
    }
    // Insert the copied number at the correct position in sorted part.
    array[j + 1] = tmp;
  }

  return array;
}

// // TESTS
// const makeArr = (n) => {
//   const arr = [];
//   let sign;
//   for (let i = 0; i < n; i++) {
//     sign = Math.random() > 0.5 ? -1 : 1;
//     arr.push(sign * Math.floor(Math.random() * n));
//   }
//   return arr;
// };

// const picoArr = makeArr(9);
// console.log(insertionSort(picoArr));


module.exports = insertionSort;
