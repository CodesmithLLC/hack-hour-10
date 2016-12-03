function fizzbuzz(n) {
  return Array.from(Array(n)).map((e, i, a) => a[i] = (i + 1) % 3 ? (i + 1) % 5 ? (i + 1) : 'buzz' : (i + 1) % 5 ? 'fizz' : 'fizzbuzz');
}

module.exports = fizzbuzz;
