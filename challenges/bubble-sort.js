// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (array[0] === undefined) return [];
  var length = array.length;
  if (length === 1) return array;
  if (array === undefined || array === null) return undefined;
  function sortHelpert(arr, cont) {
    var keepgoing = false;
    if (!cont) return arr;
    else { 
      for (var i = 0; i < length - 1; i++) {
        var holder = arr[i];
        if (arr[i] > arr[i + 1]) {
          arr[i] = arr[i + 1];
          arr[i + 1] = holder;
          keepgoing = true;
        }
      }
      return sortHelpert(arr, keepgoing);
    }
  }
  return sortHelpert(array, true);
}
module.exports = bubbleSort;
