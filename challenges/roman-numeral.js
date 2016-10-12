function romanNumeral(n) {
  let result = '';
  while (n >= 1000) {
    n -= 1000;
    result += 'M';
  }
  while (n >= 900) {
    n -= 900;
    result += 'CM';
  }
  while (n >= 500) {
    n -= 500;
    result += 'D';
  }
  while (n >= 400) {
    n -= 400;
    result += 'CD';
  }
  while (n >= 100) {
    n -= 100;
    result += 'C';
  }
  while (n >= 90) {
    n -= 90;
    result += 'XC';
  }
  while (n >= 50) {
    n -= 50;
    result += 'L';
  }

  while (n >= 40) {
    n -= 40;
    result += 'XL';
  }

  while (n >= 10) {
    n -= 10;
    result += 'X';
  }

  while (n >= 9) {
    n -= 9;
    result += 'IX';
  }

  while (n >= 5) {
    n -= 5;
    result += 'V';
  }
  while (n >= 4) {
    n -= 4;
    result += 'IV';
  }

  while (n >= 1) {
    n -= 1;
    result += 'I';
  }
  return result;
}

module.exports = romanNumeral;
