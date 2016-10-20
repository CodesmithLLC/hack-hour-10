/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // var lst = array.length - 1;
  // var products = [];
  // function prod(array, start, produ) { 
  //   if (start > lst) return null;
  //   else { 
  //     var startNum = array[start];
  //     var arryToSend = array.slice(0, start).concat(array.slice(start + 1));
  //     run(arryToSend, startNum, produ);
  //     return prod(array, start + 1, produ);
  //   }
  // }

  // function run(array, num, rec) {
  //   if (array.length < 1) return null;
  //   else {
  //     var hold = num;
  //     console.log(num)
  //     //console.log(array);
  //     for (var i = 0; i < 2; i++) { 
  //       hold *= array[i];
  //     }
  //     rec.push(hold);
  //     return run(array.slice(1), num, rec);
  //   }
  // }
  // prod(array, 0, products);
  // products = products.sort(function (a, b) { 
  //     return b - a;
  //   });

  array = array.sort(function (a, b) { 
    return b - a;
  })
  console.log(array);
  var length = array.length;
  if (length < 3) return 0;
  var try1 = array[0] * array[1] * array[2];
  var try2 = array[0] * array[length - 1] * array[length - 2];
  if (try1 > try2) return try1;
  else return try2;
}


module.exports = highestProduct;
console.log(highestProduct([7, -30, -1 ,1,3,8,12,50]));