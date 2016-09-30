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

module.exports = fizzbuzz;