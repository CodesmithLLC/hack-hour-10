// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
const arr = [];

  if (num.constructor !== Number) {
  	return 'input must be a number';
  }

  if (num <= 0) {
  	return 'input must be greater than 0';
  }

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  return arr.map((ele) => {
    if (ele % 3 === 0 && ele % 5 === 0) {
      return 'fizzbuzz';
    }
    else if (ele % 3 === 0) {
      return 'fizz';
    }
    else if (ele % 5 === 0) {
      return 'buzz';
    }
    else { return ele; }
  });
}

module.exports = fizzbuzz;
