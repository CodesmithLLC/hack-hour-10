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
  // const copySorted = jazbook
  //   .map((entry) => entry.slice())
  //   .sort((entryA, entryB) => (entryA[0] <= entryB[0] ? -1 : 1));
  const ref = {};
  jazbook.forEach(entry => {
    if (!ref[entry[0]]) {
      ref[entry[0]] = entry[1];
    }
  });
  return ref[name] ? ref[name] : false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  jazbook.forEach(entry => {
    if (!this[entry[0]]) {
      this[entry[0]] = entry[1];
    }
  });
  return this;
}

// const book = [
//   ['alex','301-844-3421'],
//   ['jae','301-844-1211'],
//   ['david','301-844-0978'],
//   ['travis','301-844-8505'],
//   ['jasmine','1800-974-4539'],
// ];
// findName(book, 'alex');
// const pbook = new makePhoneBookObject(book);
// console.log(pbook);
//
// const objectToExport = {
//   findName,
//   makePhoneBookObject,
// };

module.exports = objectToExport;
