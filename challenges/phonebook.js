/**
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?
*/

//  return the number associated with the name in the jazbook
const findName = (jazbook, name) => jazbook.reduce((a, c) => name === c[0] ? c[1] : a, false);


let jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
];

console.log(findName(jazbook, 'eddie'));

// return an object literal representing the jazbook
const makePhoneBookObject = (jazbook) => {
  let obj = {};

  jazbook.forEach(entry => {
    entry[0] = entry[1]
  });
  
  return obj;
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
