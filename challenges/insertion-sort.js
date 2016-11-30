// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
	let ansArr = array
  for (let i = 1; i < ansArr.length; i++) {
    let j = i - 1;
    while (j >= 0) {
      if (ansArr[j] > ansArr[j+1]) {
        let tempVal = ansArr[j];
        ansArr[j] = ansArr[j+1];
        ansArr[j+1] = tempVal;
      }
      j--;
    }
  }
  return ansArr;
}

module.exports = insertionSort;
