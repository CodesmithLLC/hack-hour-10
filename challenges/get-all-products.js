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

 function getAllProducts(array) {

   let prodArr = [];
   let ansArr = [];

   for (let i = 0; i < array.length; i++){
   	let count = array.length - 1;
     let tempArr = [];
     let j = i;

     while (count) {

     	if(array[j] === undefined) j = 0;
       let answer = array[j];
       let innerCount = array.length - 1;
       	while (innerCount)
       //tempArr.push(array[j]);
       count--;
       j++;
     }

     prodArr.push(tempArr);
   }

   return prodArr;
 }

 console.log(getAllProducts([1, 7, 3, 4]));

module.exports = getAllProducts;
