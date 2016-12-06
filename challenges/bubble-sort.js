function bubbleSort(array) {
  function swap(one, two) {
    const temp = array[one];
    array[one] = array[two];
    array[two] = temp;
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) swap(j - 1, j);
    }
  }
}

module.exports = bubbleSort;
