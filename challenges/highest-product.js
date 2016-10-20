/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, product = 1, count = 3) {
    return !array || (array.length < 3 && count === 3)
        ? 0
        : !count
            ? product
            : array.length <= count
                ? product * array.reduce((a,c) => {return a * c})
                : Math.max(highestProduct(array.slice(1), array[0] * product, count - 1), highestProduct(array.slice(1), product, count))
}

module.exports = highestProduct;
