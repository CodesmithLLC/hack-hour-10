function mergeArrays(arr1, arr2) {
  if (!arr1 && !arr2) return undefined;
  if (!arr1) return arr2;
  if (!arr2) return arr1;
  let sorted = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  return sorted.concat(arr1).concat(arr2);
}

module.exports = mergeArrays;

// var my_array = [3, 4, 6, 10, 11, 15, 21];
// var another_array = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(my_array, another_array));