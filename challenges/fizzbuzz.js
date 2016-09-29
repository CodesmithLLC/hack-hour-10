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
  let fb = [];
  for (let i = 1; i <= n; i++) {
    f = i % 3 === 0;
    b = i % 5 === 0;
    if (f && b) fb.push('fizzbuzz');
    else if (f) fb.push('fizz');
    else if (b) fb.push('buzz');
    else fb.push(i);
    // f ? b ? fb.push('fizzbuzz') : fb.push('fizz') : b ? fb.push('buzz') : fb.push(i);
  }
  return fb;
}

module.exports = fizzbuzz;
