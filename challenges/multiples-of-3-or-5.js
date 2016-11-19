
function sumMultiples3Or5Below1000() {
  var threes = (Math.floor((1000 - 1) / 3) * Math.floor((1000 - 1) / 3) + Math.floor((1000 - 1) / 3)) / 2 * 3;
  var fives = (Math.floor((1000 - 1) / 5) * Math.floor((1000 - 1) / 5) + Math.floor((1000 - 1) / 5)) / 2 * 5;
  var fifteens = (Math.floor((1000 - 1) / 15) * Math.floor((1000 - 1) / 15) + Math.floor((1000 - 1) / 15)) / 2 * 15;
  return threes + fives - fifteens;
}


function sumMultiplesXOrYBelowZ (x, y, z) {
  var first = (Math.floor((z - 1) / x) * Math.floor((z - 1) / x) + Math.floor((z - 1) / x)) / 2 * x;
  var second = (Math.floor((z - 1) / y) * Math.floor((z - 1) / y) + Math.floor((z - 1) / y)) / 2 * y;
  var combined = (Math.floor((z - 1) / y / x) * Math.floor((z - 1) / y / x) + Math.floor((z - 1) / y / x)) / 2 * y * x;
  return first + second - combined;
}


var objectToExport={
  sumMultiples3Or5Below1000: sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ: sumMultiplesXOrYBelowZ

}

module.exports = objectToExport;

