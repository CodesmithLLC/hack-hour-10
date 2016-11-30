
function insertionSort(array) {
  function swap(one, two) {
    const temp = array[one];
    array[one] = array[two];
    array[two] = temp;
  }
  if (!array.length) return [];
  for (let i = 1; i < array.length; i++) {
    let one = i, two = i - 1;
    while (array[one] < array[two]) {
      swap(one, two);
      one-- , two--;
    }
  }
}

module.exports = insertionSort;
