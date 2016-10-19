function highestProduct(array) {
  const positives = array.filter(x => x > 0).sort();
  const negatives = array.filter(x => x < 0).sort();
  let x, y, z;
  if (negatives.length >= 2)
    negatives.forEach(x => positives.push(Math.abs(x)));
  return positives.pop() * positives.pop() * positives.pop();
}

module.exports = highestProduct;