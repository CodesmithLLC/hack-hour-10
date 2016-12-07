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

//  sort jazbook in place
let jazbookSorted = false;
const memo = {};

function sortJazbook(jazbook) {
  jazbook.sort((a, b) => a[0] < b[0] ? -1 : 1);
}

function binarySearchNameLookup(jazbook, name) {
  const binarySearch = (start, end) => {
    if (start > end) return false;
    const mid = Math.floor((start + end) / 2);
    if (jazbook[mid][0] === name) return jazbook[mid][1];
    if (jazbook[mid][0] > name) return binarySearch(start, mid);
    else return binarySearch(mid + 1, end);
  }
  return binarySearch(0, jazbook.length - 1);
}

// without using an object
function findName(jazbook, name) {
  if (memo[name]) return memo[name];
  jazbookSorted ? void 0 : jazbook.sort();
  const number = binarySearchNameLookup(jazbook, name);
  return memo[name] = number, number;
}

// alternatively, could create hash table of phone numbers for constant lookup time
// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  return jazbook.reduce((acc, current) => 
    Object.assign(acc, { [current[0]]: current[1] }), {})
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

const jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
];


module.exports = objectToExport;
