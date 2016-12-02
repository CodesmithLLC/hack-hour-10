function getAllProducts(array) {
  if (!array.length) return [0];
  let zero = 0;
  array.forEach(value => {
    if (value === 0) zero++;
  });
  if (zero > 1) return new Array(array.length).fill(0);
  if (zero > 0) {
    const zeroIdx = array.indexOf(0);
    let product = 1;
    array.forEach(value => {
      if (value !== 0) product *= value;
    });
    const products = new Array(array.length).fill(0);
    products[zeroIdx] = product;
    return products;
  }
  const products = [];
  let product = 1;
  array.forEach(value => product *= value);
  array.forEach(value => products.push(product / value));
  return products;
}

module.exports = getAllProducts;
