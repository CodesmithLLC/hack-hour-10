function sumMultiples3Or5Below1000(){
  let sum = 0;
  for (let i = 3; i < 1000; i+=1){
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  console.log(sum);
  return sum;
}

sumMultiples3Or5Below1000();


function sumMultiplesXorYBelowZ(x,y,z){
  let sum = 0;
  for (let i = 0; i < z; i += 1) {
    if (i % y === 0 || i % x === 0) sum += i;
  }
  return sum;
}
var objectToExport ={
  sumMultiples3Or5Below1000: sumMultiples3Or5Below1000,
  sumMultiplesXorYBelowZ: sumMultiplesXorYBelowZ
}
module.exports = objectToExport;
