/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

// function getAllProducts(array) {
//   const returnArr = [];
//   function helper (arr) {
//     // Base case: constructed array has length one less than passed in array
//     if (arr.length === array.length - 1) {
//       return returnArr.push(arr.reduce((acc, cur)=>{
//         return acc * curr;
//       }));
//     }



//   }



// }

function getAllProducts(array) {
  const returnArr = [];
  for (let i = 0; i < array.length; i++) {
    const temp = [];
    let j = i;
    while (temp.length !== array.length-1) {
      if (array[j] === undefined) { j = 0; }
      temp.push(array[j]);
      j++;
    }
    returnArr.push(temp);
  }
  return returnArr.map((val)=> {
    return val.reduce((acc, cur) => {
      return acc * cur;
    })
  });
}

console.log(getAllProducts([1, 7, 3, 4]));

module.exports = getAllProducts;
