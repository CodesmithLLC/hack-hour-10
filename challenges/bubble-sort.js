// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



const swap = (array, ind1, ind2) => {
    const temp = array[ind1];
    array[ind1] = array[ind2];
    array[ind2] = temp;
    return array;
}

const bubbleSort = array => {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j, j+1);
      }
    }
  }
  
  return array;
}

module.exports = bubbleSort;
