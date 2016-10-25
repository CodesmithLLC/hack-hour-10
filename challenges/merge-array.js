function mergeArrays(arr1, arr2) {
  if (!arr1 && !arr2) return undefined;
  if (!arr1) return arr2;
  if (!arr2) return arr1;
  let sorted = [];
  let i = 0, j = 0;
  while (arr1.length > i && arr2.length > j) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i += 1;
    } else {
      sorted.push(arr2[j]);
      j += 1;
    }
  }
  return sorted.concat(arr1.slice(i, arr1.length)).concat(arr2.slice(j, arr2.length));
}

module.exports = mergeArrays;

// var my_array = [3, 4, 6, 10, 11, 15, 21];
// var another_array = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(my_array, another_array));