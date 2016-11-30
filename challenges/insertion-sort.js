// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
let sortedArr = [array[0]];
let unsortedArr = array.slice(1);

function sortItem(sortedArr, unsortedArr) {
  let toSort = unsortedArr.shift();
    if (toSort > sortedArr[sortedArr.length - 1]) {
      sortedArr.push(toSort);
    }
    else if (toSort < sortedArr[0]) {
      sortedArr.unshift(toSort);
    }
    else {
      for (let i = sortedArr.length - 1; i >= 0; i--) {
        if (toSort < sortedArr[i]) {
          continue;
        }
        sortedArr.splice(i + 1, 0, toSort);
        break;
      }
    }
    if (unsortedArr.length) {
      return sortItem(sortedArr, unsortedArr);
    }
    return sortedArr;
}
return sortItem(sortedArr, unsortedArr);
}

module.exports = insertionSort;
