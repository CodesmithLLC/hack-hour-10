/**
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505'],
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
function findName(jazbook, name) {
  for (let i = 0; i < jazbook.length; i++) {
    if (jazbook[i][0] === name) return jazbook[i][1];
  }

  return false;
}

// return an object literal representing the jazbook
function Jazbook(jazbook){
  this.phonebook = jazbook.reduce((all, item) => {
    all[item[0]] = item[1];
    return all;
  }, {});
}

Jazbook.prototype.add = function(name, number) {
  this.phonebook[name] = number;
}

Jazbook.prototype.lookup = function(name) {
  return this.phonebook[name];
}

Jazbook.prototype.remove = function(name) {
  delete this.phonebook[name];
}

// TESTS:
jazbook = [
    ['alex','301-844-3421'],
    ['jae','301-844-1211'],
    ['david','301-844-0978'],
    ['travis','301-844-8505'],
    ['jasmine','1800-974-4539'],
];

console.log(findName(jazbook, 'travis')); // => 301-844-8505
let newJaz = new Jazbook(jazbook);
Jazbook.add('Chet', '323-490-4410');
console.log(newJaz);

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
