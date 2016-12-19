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

function commonElements(array1, array2, array3, array4){
  console.log('array1\n', array1)
  console.log('array1\n', array2)
  console.log('array1\n', array3)
  console.log('array1\n', array4)
  let total = {};
  for(let i = 0; i < array1.length; i++) {
    if(typeof array1[i] === 'number') total['&&&' + array1[i]] = 1;
    else total[array1[i]] = 1;
  }
  let results = {};
  for(let i = 0; i < array2.length; i++) {
    if(typeof array2[i] === 'number') results['&&&' + array2[i]] = 1;
    else results[array2[i]] = 1;
  }
  Object.keys(results).forEach( (ele) => {
    if(total[ele]) total[ele]++;
  });
  results = {};
  for(let i = 0; i < array3.length; i++) {
    if(typeof array3[i] === 'number') results['&&&' + array3[i]] = 1;
    else results[array3[i]] = 1;
  }
  Object.keys(results).forEach( (ele) => {
    if(total[ele]) total[ele]++;
  });
  results = {};
  for(let i = 0; i < array4.length; i++) {
    if(typeof array4[i] === 'number') results['&&&' + array4[i]] = 1;
    else results[array4[i]] = 1;
  }
  Object.keys(results).forEach( (ele) => {
    if(total[ele]) total[ele]++;
  });

  let final = [];
  for(let key in total) {
    if(total[key] === 4) final.push(key);
  }
  if(final.length < 1) return 'Nothing in Common!';
  
  for(let i = 0; i < final.length; i++) {
    if(final[i].slice(0,3) === '&&&') final[i] = Number(final[i].slice(3));
  }
  return final;

}

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// console.log(commonElements(array1, array2, array3, array4));

module.exports = commonElements;
