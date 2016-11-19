//if we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6,9 the sum of these multiples is 23
//write a function that will find the sum of all multiples of 3 or 5 below 1000 and return that sum

function sumMultiples(x, y, z) {
  let sum = 0;
  for (let i = 2; i < z; i++) {
    if (i % x === 0 || i % y === 0) sum += i;
  }
  return sum;
}

//test => sumMultiples(3,5,10) => returns 23

export default sumMultiples;