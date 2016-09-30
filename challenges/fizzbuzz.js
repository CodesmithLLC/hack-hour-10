<<<<<<< HEAD
=======
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

>>>>>>> d7f6af7f16c396c02b6c14e21498f7276c5b24d7
function fizzbuzz(endNumber) {
  const result = [];
  for (let currentNumber = 1; currentNumber <= endNumber; currentNumber++) {
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      result.push('fizzbuzz');
    } else if (currentNumber % 3 === 0) {
      result.push('fizz');
    } else if (currentNumber % 5 === 0) {
      result.push('buzz');
    } else result.push(currentNumber);
  }
    return result;
}

console.log(fizzbuzz(process.argv[2]));

<<<<<<< HEAD
module.exports = fizzbuzz;
=======
module.exports = fizzbuzz;
>>>>>>> d7f6af7f16c396c02b6c14e21498f7276c5b24d7
