function sumMultiples3Or5Below1000() {
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumMultiples3Or5Below1000());

function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  for (let i = 1; i < z; i++) {
    if (i % x === 0 || i % y === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumMultiplesXOrYBelowZ(3, 5, 1000));

var objectToExport = {
  sumMultiples3Or5Below1000: sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ: sumMultiplesXOrYBelowZ
};

module.exports = objectToExport;

// function fizzbuzz(num) {
//   const arr = [];

//   for (let i = 1; i <= num; i += 1) {
//     const isFizz = i % 3 === 0;
//     const isBuzz = i % 5 === 0;

//     if (isFizz && isBuzz) {
//       arr.push('fizzbuzz');
//     } else if (isFizz) {
//       arr.push('fizz');
//     } else if (isBuzz) {
//       arr.push('buzz');
//     } else {
//       arr.push(i);
//     }
//   }

//   return arr;
// }