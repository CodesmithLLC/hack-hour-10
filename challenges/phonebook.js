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
	return makePhoneBookObject(jazbook)[name] || false;

	// let objtofindName = makePhoneBookObject(jazbook);
	// for ( let key in objtofindName) {
	// 	if ( key === name ) {
	// 		return objtofindName[key];
	// 	}
	// }
	// return false;

}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
	// let flatObj = {};

	// for ( let i = 0 ; i < jazbook.length; i++) {
	// 	if (flatObj[jazbook[i][0]] === undefined) {
	// 		flatObj[jazbook[i][0]] = jazbook[i][1]
	// 	}
	// }
	// return flatObj;
	return jazbook.reduce( (accum, curr) => {
		accum[curr[0]] = curr[1]
		return accum;
	}, {});
}






let jazbook = [ ['alex','301-844-3421'], ['jae','301-844-1211'], ['david','301-844-0978'], ['travis','301-844-8505'], ['jasmine','1800-974-4539'] ];

// console.log(makePhoneBookObject(jazbook))

console.log(findName(jazbook, 'alex'));

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
