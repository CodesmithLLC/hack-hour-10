// create a function that takes a number, iterates through that number, and logs 'fizz' when the index is a multiple of // 3, 'buzz' when the index is a multiple of 5, and 'fizzbuzz' when it is a multiple of both

function fizzbuzz1(num) {
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
  }
}








function fizzbuzz(num) {
  if (typeof num !== 'number' || !Number.isInteger(num) || num < 1) return 'invalid input';

  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push('fizzbuzz')
    else if (i % 3 === 0) result.push('fizz')
    else if (i % 5 === 0) result.push('buzz')
    else result.push(i);
  }

  return result;

}



module.exports = fizzbuzz;
