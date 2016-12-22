// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// Figure it out!

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i - 1; j > 0 && array[j] > array[i]; j--) {
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }
  return array;
}

console.log(insertionSort([9,8,7,6,5,4,3,2,1]))

// module.exports = insertionSort;

// Solution #1:

// function insertionSort(array) {
// let sortedArr = [array[0]];
// let unsortedArr = array.slice(1);

// function sortItem(sortedArr, unsortedArr) {
//   let toSort = unsortedArr.shift();
//     if (toSort > sortedArr[sortedArr.length - 1]) {
//       sortedArr.push(toSort);
//     }
//     else if (toSort < sortedArr[0]) {
//       sortedArr.unshift(toSort);
//     }
//     else {
//       for (let i = sortedArr.length - 1; i >= 0; i--) {
//         if (toSort < sortedArr[i]) {
//           continue;
//         }
//         sortedArr.splice(i + 1, 0, toSort);
//         break;
//       }
//     }
//     if (unsortedArr.length) {
//       return sortItem(sortedArr, unsortedArr);
//     }
//     return sortedArr;
// }
// return sortItem(sortedArr, unsortedArr);
// }
