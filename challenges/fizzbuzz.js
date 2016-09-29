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
  if (typeof n !== 'number') {
      return new TypeError('Input needs to be a number');
  }

  const fizzAndBuzzArr = [];

  // A counter always start at 1 and we check the
  // state of the current counter if divisible by 3 and 5
  // first then check individually
  let i = 1;
  while (i <= n) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzAndBuzzArr.push('fizzbuzz');;
      i++;
    } else if (i % 3 === 0) {
      fizzAndBuzzArr.push('fizz');
      i++;
    } else if (i % 5 === 0) {
      fizzAndBuzzArr.push('buzz');
      i++;
    } else {
      fizzAndBuzzArr.push(i);
      i++;
    }
  }
  return fizzAndBuzzArr;
}

module.exports = fizzbuzz;
