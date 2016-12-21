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
  [array1, array2, array3, array4].forEach((arr, ind) => {
    arr.forEach(ele => {
      if(obj[ele] % 2 === 0 || obj[ele] % 3 === 0 || obj[ele] % 5 === 0) return;
      if(ind === 0) obj[ele] ? obj[ele] *= 1 : obj[ele] = 1;
      if(ind === 1) obj[ele] ? obj[ele] *= 2 : ele;
      if(ind === 2) obj[ele] ? obj[ele] *= 3 : ele;
      if(ind === 3) obj[ele] ? obj[ele] *= 5 : ele;
    });
  });
  Object.keys(obj).forEach(key => {
    console.log(obj);
    if(obj[key] % 2 === 0 && obj[key] % 3 === 0 && obj[key] % 5 === 0) result.push(key)
  })
  return result;
}
console.log(commonElements(array1, array2, array3, array4));
//module.exports = commonElements;
