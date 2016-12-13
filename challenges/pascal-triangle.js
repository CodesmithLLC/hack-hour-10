/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  if (numRows === 1) return [1];
  if (numRows === 2) return [1, 1];
  if (numRows === 3) return [1, 2, 1];
  let toReturn = [[1], [1, 1], [1, 2, 1]]
  function make(base, number, ret) {
    var length = base.length;
    if (number === numRows) return base;
    else {
      var length = base.length;
      var hold = [1]
      for (var i = 0; i < length - 1; i++) {
        hold.push(base[i] + base[i + 1]);
      }
      var temp = [...hold]
      if ((number % 2) === 0) {
        ret.push([...hold, base[i] + base[i], ...temp.reverse()])
        return make([...hold, base[i] + base[i]], number + 1, ret)
      }
      else {
        ret.push([...hold, ...temp.reverse()])
        return make(hold, number + 1, ret)
      }
     
    }
  }
  make([1, 2], 3, toReturn);
  return toReturn;
  // console.log(toReturn)
  // let toReturn = make([1, 2], 3);
  // if(!(numRows % 2)) {
  //   return [...toReturn, ...toReturn.reverse()]
  // } else {
  //   return [...toReturn, ...toReturn.slice(0, toReturn.length - 1).reverse()]
  //  }

}

module.exports = pascalTriangle;
