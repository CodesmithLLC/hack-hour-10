function fizzbuzz(n) {
  const fb = [];
  for (let i = 1; i <= n; i++) {
    const f = i % 3 === 0, b = i % 5 === 0;
    f ?
      b ? fb.push('fizzbuzz') : fb.push('fizz') :
      b ? fb.push('buzz') : fb.push(i);
  }
  return fb;
}

module.exports = fizzbuzz;
