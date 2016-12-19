// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

const commonElements = (array1, array2, array3, array4) => {
  if (!array1.length || !array2.length || !array3.length || !array4.length) return 'Nothing in Common!'

  let cache = {};
  let output = [];

  array1.forEach(el => {
    if (!cache[el]) cache[el] = { 'count': 1, '1': true };
  });

  array2.forEach(el => {
    if (cache[el] && !cache[el]['2']) {
      cache[el].count += 2;
      cache[el]['2'] = true;
    }
  });

  array3.forEach(el => {
    if (cache[el] && !cache[el]['3']) {
      cache[el].count += 3;
      cache[el]['3'] = true;
    }
  });

  array4.forEach(el => {
    if (cache[el] && !cache[el]['4']) {
      cache[el].count += 4;
      cache[el]['4'] = true;
    }
  });

  for (let key in cache) {
    if (cache[key].count === 10) output.push(+key || key);
  }

  return !output.length ? 'Nothing in Common!' : output;
}


module.exports = commonElements;