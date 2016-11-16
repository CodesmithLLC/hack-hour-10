module.exports = function repeatNumbers(array) {
  for (var i = 0; i < array.length; i ++) {
    for (var j = i + 1; j < array.length; j ++) {
      if (array[i] === array[j]) return array[i];
    }
  }
}
