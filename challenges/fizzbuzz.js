function fizzbuzz (num) {
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

console.log(fizzbuzz(50));

// module.exports = fizzbuzz;
