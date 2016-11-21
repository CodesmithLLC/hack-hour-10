/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
function maxSubarray(arr) {
    var totalmax = -Infinity;
    function finder(array, max) {
        // if (count === 3) return null;
        if (max > totalmax) totalmax = max;
        if (array.length <= 1) return max;
        else { 
            var first = array.slice(1)
            // console.log('first ',first)
            finder(first, first.length > 1 ? first.reduce((a, b) => a + b) : first[0] ? first[0] : -Infinity)
            var second = array.slice(0, array.length - 1)
            // console.log('second ', second)
            finder(second, second.length > 1 ? second.reduce((a, b) => a + b) : second[0] ? second[0] : -Infinity)
            var third = array.slice(1, array.length - 1);
            // console.log('third ',third)
            finder(third, third.length > 1 ? third.reduce((a, b) => a + b) : third[0] ? third[0] : -Infinity)
        }
    }
    finder(arr, arr.reduce((a, b) => a + b));
    //console.log(arr.reduce(a,b) => a + b))
    return totalmax;
}

module.exports = maxSubarray;
