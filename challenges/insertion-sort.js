// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; array[j] < array[j - 1]; j--) {
      
      // Basic swap mechanism
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;

      // // swap mechanism using ES6 array destructuring
      // [array[j], array[j - 1]] = [array[j - 1], array[j]];
    }
  }

  return array;
}

// TESTS
const makeArr = (n) => {
  const arr = [];
  let sign;
  for (let i = 0; i < n; i++) {
    sign = Math.random() > 0.5 ? -1 : 1;
    arr.push(sign * Math.floor(Math.random() * n));
  }
  return arr;
};

const picoArr = makeArr(9);
console.log(insertionSort(picoArr));


module.exports = insertionSort;
