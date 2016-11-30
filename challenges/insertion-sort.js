// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  var j;
  for (var l = 1; l < array.length; l++) { 
   var i = array[l];
    for (var check = true, p = l - 1; check != null && p >= 0; p--) { 
      if (array[p] >= i) {
        var hold = array[p + 1] 
        array[p + 1] = array[p]
        array[p] = hold
      }
      else {
        console.log(array[p])
        array[p + 1] = i;
        check = null
      }
    }
  }
  return array;

}
console.log(insertionSort([6,5,4,3,2,1]))
module.exports = insertionSort;