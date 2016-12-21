// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

   var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
   var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
   var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
   var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
  let obj = {};
  let result = [];
  [...arguments].forEach((arr, ind) => {
    arr.forEach(ele => {
      if(obj[ele]) obj[ele][ind] = 1;
      else obj[ele] = {}, obj[ele][4] = ele, obj[ele][ind] = 1;
    });
  });
  Object.keys(obj).forEach(key => {
    if(obj[key][0] && obj[key][1] && obj[key][2] && obj[key][3]) result.push(obj[key][4]);
  })
  return result;
}

module.exports = commonElements;
