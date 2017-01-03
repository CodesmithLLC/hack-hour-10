const H = letters => letters ? 'H' + letters : 'H'
const l = letters => letters ? 'l' + letters : 'l'
const o = letters => letters ? 'o' + letters : 'o'
const e = letters => letters ? 'e' + letters : 'e'
const pipe = functions => (letters = '') => functions.reduceRight((str, fn) => fn(str), letters)
const letterGenerator = (letter = '') => (letters = '') => letter + letters

const objectToExport = {
  H,
  e,
  l,
  o,
  pipe,
  letterGenerator,
};

const objectToExport = {H,e,l,o,pipe,letterGenerator};
module.exports = objectToExport
