/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, product = 1) {
    return array.length < 3
        ? 0
        : array.length === 3
            ? array.reduce((a,c)=>{return a*c})
            : Math.max(highestProduct(array.slice(1), array[0]*product), highestProduct(array.slice(1), product))
        

}


module.exports = highestProduct;

console.log(highestProduct([-100,-10,2,3,4]))