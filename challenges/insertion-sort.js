// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    let newArr = array.map(e => e)
    for (let i = 0; i < newArr.length - 1; i++) {
        for (let j = i + 1; j >= 0; j--) {
            if (newArr[j] < newArr[j-1]) {
                let tmp = newArr[j]
                newArr[j] = newArr[j-1]
                newArr[j-1] = tmp
            }
            else break
        }
    }
    return newArr
}

module.exports = insertionSort;
