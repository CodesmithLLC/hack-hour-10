/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
"use strict";

function highestProduct(array) {
  if(!array){
    return 0;
  }
  if(array.length <= 3){
    return array.reduce((a,b) => {return a*b}, 1);
  }

  let products = {};
  function highestProduct(array, runningTotal, depth, stack){
    if(depth === 3){
      products[runningTotal] = stack;
    }
    for(let i = 0; i < array.length; ++i){
      let newArr = array.slice();
      console.log(`slice arr: ${newArr}`);
      let currValue = newArr.splice(i,1);
      console.log(`new arr: ${newArr}`);
      console.log(currValue);
      let newStack = array.slice();
      newStack.push(currValue);
      highestProduct(newArr, currValue * runningTotal, depth + 1, newStack);
    }
  }
  highestProduct(array, 1, 0, []);
  console.log(`results ${Object.keys(products)}`);
  console.log(products)
  let productValues = Object.keys(products).map((element) => {return parseInt(element);});
  console.log(productValues);
  return Math.max.apple(null, productValues);
}

module.exports = highestProduct;
