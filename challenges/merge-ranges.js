/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    return array.sort((a, b) => { return a[0] > b[0] }).reduce((a, c, i, s) => {
        if (a[a.length - 1][1] >= c[0]) a[a.length - 1] = [a[a.length - 1][0], a[a.length - 1][1] >= c[1] ? a[a.length - 1][1] : c[1]]
        else a.push(c)
        return a
    }, [array[0]])
}

module.exports = mergeRanges;

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(times))