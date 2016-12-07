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
* returns the persons phone number. If the person does not exist, return false.
*
* How efficient can you make this?
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  const jazbookLength = jazbook.length;

  // For loop > higher order functions because exits immediately
  for (let i = 0; i < jazbookLength; i++) {
    if (jazbook[i][0] === name) return jazbook[i][1];
  }
  
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  return jazbook.reduce((jazbookObject, subarray) => {
    jazbookObject[subarray[0]] = subarray[1];
    return jazbookObject;
  }, {});
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;

jazbook = [
     ['alex','301-844-3421'],
     ['jae','301-844-1211'],
     ['david','301-844-0978'],
     ['travis','301-844-8505'],
     ['jasmine', '1800-974-4539'],
];

console.log(findName(jazbook, 'travis'));
console.log(makePhoneBookObject(jazbook));