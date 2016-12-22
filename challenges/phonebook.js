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
* returns the person's phone number. If the person does not exist, return false.
*
* How efficient can you make this?
*/

// const jazbook = [
//   ['alex','301-844-3421'],
//   ['jae','301-844-1211'],
//   ['david','301-844-0978'],
//   ['travis','301-844-8505'],
//   ['jasmine','1800-974-4539'],
// ];

// Use memoization
// Change jazbook to object prototype to limit memory used

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  const phonebook = makePhoneBookObject(jazbook);
  return phonebook[name] ? phonebook[name] : false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  const phonebook = {};
  jazbook.forEach(entry => phonebook[entry[0]] = entry[1]);
  return phonebook;
}

// console.log(findName(jazbook, 'david'))

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
