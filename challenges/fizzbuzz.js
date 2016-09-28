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
function fizzBuzz(num) {
  let count = 1;
  let ans;
  let ansArr = [];
  if (num === 0) {
    console.log("Please enter in a number greater than 1.");
  }
  while (count <= num) {
    if (count % 3 === 0 && count % 5 === 0) {
      ans = "FizzBuzz";
      ansArr.push(ans);
      ans = "";
      count++;
    }
    if (count % 3 === 0) {
      ans = "Fizz";
      ansArr.push(ans);
      ans = "";
      count++;
    }
    if (count % 5 === 0) {
      ans = "Buzz";
      ansArr.push(ans);
      ans = "";
      count++;
    } else {
      ans = count;
      ansArr.push(ans);
      ans = "";
      count++;
    }
  }
  return ansArr;
}

module.exports = fizzbuzz;
