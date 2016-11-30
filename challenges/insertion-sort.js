function swap(array, one, two) {
  const temp = array[one];
  array[one] = array[two];
  array[two] = temp;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let one = i, two = i - 1;
    while (array[one] < array[two]) {
      swap(array, one, two);
      one-- , two--;
    }
  }
}

module.exports = insertionSort;
