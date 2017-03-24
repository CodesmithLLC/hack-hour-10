// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
  const deleteDupes = (arr) => arr.filter((elem, index, myArray) => index === myArray.indexOf(elem));
  const deleteAllDupes = (...args) => args.forEach((array) => noDupeArrays.push(deleteDupes(array)));
  const buildTable = (...args) => {
    args.forEach((array) => {
      array.forEach((elem) => {
        if (table[elem]) table[elem].push('Used later for length calculation');
      });
    });
  }

  const NUMBER_OF_ARRAYS = 4;
  const results = [];
  const noDupeArrays = [];
  deleteAllDupes(array2, array3, array4);

  const table = array1.reduce((acc, elem) => {
    acc[elem] = ['Used later for length calculation'];
    return acc;
  }, {});

  buildTable(...noDupeArrays);

  Object.keys(table).forEach((key) => {
    if (table[key].length === NUMBER_OF_ARRAYS) {
      if (Number.isInteger(Number(key))) key = Number(key);
      results.push(key);
    }
  });

  return results.length ? results : 'Nothing in Common!';
}

module.exports = commonElements;

// const array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// const array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// const array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// const array4 = ['ferret', 12, 12, 45, 9, 66, 77, 78, 2000];
  
// console.log(commonElements(array1, array2, array3, array4)); // [ 12, 'ferret']
