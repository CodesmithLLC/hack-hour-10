// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5

function fizzBuzz(num) {
  // helper pusher function
  function pusher(index) {
    let output;
    if (index % 3 === 0) output = 'fizz';
    if (index % 5 === 0) !output ? output = 'buzz' : output += 'buzz';
    if (!output) return index;
    return output;
  }
  // check for non-whole numbers
  if (isNaN(num) || num % 1 !== 0) return;

  // classify input as positive or negative
  let positive = (num > 0) ? true : false;

  // push correct values onto output array
  let output = [];
  if (positive) for (let i = 1; i <= num; i++) output.push(pusher(i));
  else for (let i = 1; i >= num; i--) output.push(pusher(i));
  return output;
}

module.exports = fizzbuzz;

// test cases
// console.log(fizzBuzz(16)); // normal case
// console.log(fizzBuzz('16')); // number as string
// console.log(fizzBuzz('val')); // string
// console.log(fizzBuzz([16])); // single num in array
// console.log(fizzBuzz([16, 16])); // mult nums in array
// console.log(fizzBuzz({key: 'val'})); // object
// console.log(fizzBuzz(-16)); // negative num
// console.log(fizzBuzz(0)); // zero as num
// console.log(fizzBuzz(16.77)); // fraction
