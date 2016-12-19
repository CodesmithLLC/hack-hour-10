// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,0,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,0,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,0,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,0,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
  let args = Array.prototype.slice.call(arguments);
  let cache = {};
  let result = [];
  args.forEach(curr => {
    return curr.filter((ele, ind, self) => {
      return self.indexOf(ele) === ind;
    }).forEach(ele => {
      if (!cache[ele]) cache[ele] = 1;
      else cache[ele]++;
    });
  });

  for (prop in cache) {
    if (cache[prop] === args.length) {
      if (Number(prop) || prop === '0') prop = Number(prop);
      result.push(prop);
    }
  }
  if (!result.length) return 'Nothing in Common!';
  else return result;
}

module.exports = commonElements;
