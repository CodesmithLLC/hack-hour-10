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
function findName(jazbook, name) {
  var store = makePhoneBookObject(jazbook);
  var nuName = name.toUpperCase()
 return store[nuName] || false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  var store = {};
  function divider(book, str) {
    var length = book.length;
    if (length > 1) {
      divider(book.slice(0, length / 2), str);
      divider(book.slice(length / 2), str);
    }
    else {
      var entry = book[0];
      var name = entry[0].toUpperCase();
      str[name] = entry[1];
    }
  }
  divider(jazbook, store);
  return store;
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
