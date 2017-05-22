// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  let i = 0;
  while (i < array.length){
    if (array[i] > array[i + 1]){
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      i = 0;
    }else i++
  }
  return array;
}

// bubbleSort([1,4,3,2,6,7,8]);
let x = performance.now();
bubbleSort([9,8,7,6,5,4,3,2,1]);
let y = performance.now();
console.log(y - x);
module.exports = bubbleSort;
