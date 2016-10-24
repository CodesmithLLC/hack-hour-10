/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // check for valid input: array of length 3 or more, all nums are ints
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;
  const allNums = array.every(elem => typeof elem === 'number' && elem % 1 === 0);
  if (!allNums) return 0;

  return array
    .reduce((highest, elem) => {
      if (highest.length < 3) {
        highest.push(elem)
      } else if (elem > highest[0]) {
        highest.shift();
        highest.push(elem);
      }
      highest.sort((a, b) => a - b);
      return highest;
    }, [])
    .reduce((prod, elem) => prod * elem);
}

// function highRecurse(array) {
//   if (array.length < 3) return 0;
//
//   const result = [];
//   function combos(arr) {
//     for (let i = 0; i < arr.length; i++ ) {
//
//     }
//   }
//   combos([], array);
//   console.log(result);
// }

let arr1 = [1, 2, 3];
console.log(highestProduct(arr1), 6);
let arr2 = [1, 2, 3, 4, 5];
console.log(highestProduct(arr2), 3 * 4 * 5);
console.log(highestProduct([90, -1, 0, -90]), 90 * -90 * -1);
console.log(highestProduct([90, 0, 0, -90]), 90 * 0 * 0);
console.log(highestProduct([90, 1, 1, -90]), 90 * 1 * 1);

// let arrA = [1, 2, 3];
// console.log(highRecurse(arrA), 6);
// let arrB = [1, 2, 3, 4, 5];
// console.log(highRecurse(arrB), 3 * 4 * 5);
// console.log(highRecurse([90, -1, 0, -90]), 90 * -90 * -1);
// console.log(highRecurse([90, 0, 0, -90]), 90 * 0 * 0);
// console.log(highRecurse([90, 1, 1, -90]), 90 * 1 * 1);
// invalid type
console.log(highestProduct([90, 1, 'a', -90]), 0);
console.log(highestProduct([90, 1, [1], -90]), 0);
console.log(highestProduct([90, 1, false, -90]), 0);
console.log(highestProduct([90, 1, 1.5, -90]), 0);
console.log(highestProduct({0: [90, 1, 1, -90]}), 0);

module.exports = highestProduct;
