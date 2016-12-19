// Parse dates from questionable date strings.

// Your function will be a called with a string which represents a date and time.

// The provided string will be in one of the formats below.
//Your function must return a Date object with the same month, day of month, hour, and minute
// as in the provided string.
// The year for the returned date object should be
// the current year.

// Example strings:
// Thursday 12:37 PM
// Nov 19th 1:12 PM
// Mar 1st 6:09 PM
// Monday 5:33 PM
// Friday 7:04 PM
// Today 2:01 PM

// - If the date string starts with a day of week (e.g. Monday) then it's the last occurrence
//   that day of the week BEFORE today (e.g. if today is Wednesday and the string
//   'Wednesday 12:37 PM' is passed in, then the date you return should be 7 days ago,
//   the last time Wednesday occurred before today.)

// - If the date string starts with a month (e.g. Nov, Sep) assume that it's for this year.
//   Month abbreviations will always be the first 3 letters of the month name with
//   the first letter capitalized.

// - If a string is passed in which does not conform to any of the rules above, then
//   you should simply return a Date object for the current time.

// Example input, assuming the current Date is Thursday December 17, 2015:

// parseDates('Jan 12th 1:09 AM')  => returns new Date object representing 'Mon Jan 12 2015 01:09:00 GMT-0800 (PST)'
// parseDates('Today 8:15 PM')     => returns new Date object representing 'Thu Dec 17 2015 20:15:00 GMT-0800 (PST)'
// parseDates('Sunday 12:59 PM')   => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'

// parseDates('Jan 1st')
// parseDates('hello')
// parseDates('Today 2 PM')        => invalid formats, so all return Date object for today at the current time: 'Thu Dec 17 2015 11:31:00 GMT-0800 (PST)'

// FAQ:
// - seconds / milliseconds of the returned Date object do not matter
// - you can assume the provided day of month will be valid if it's a month string
//   (i.e. the function will not be called with 'Jul 84th 1:00 PM') since that's not a real date
// - if any part of the date string is missing then you can consider it an invalid date

function parseDates(str) {
	//a valid string MUST HAVE @ least (something from day of the week || a month) + (one of the two things in time parameters) + it must have a colon.
	let daysofweek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Today'];
	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	let timeparameters = ['AM', 'PM'];
	let colon = ':';
///
	let arrayfromstring = str.split(" ");

	//check whether the arrayfromstring includes the requirements above


	v
	//BASE CASES:
		//if first letter is NOT capitalized
		//if
	//if the date string starts with a month
		//to check, you could grab the first 4 characters of the string, if it contains 3 alpha characters and 1 space, then it is a valid month
}
//valid:
console.log(parseDates('Jan 12th 1:09 AM'));
// console.log(parseDates('Today 8:15 PM'));
// console.log(parseDates('Sunday 12:59 PM'));
// //invalid:
// console.log(parseDates('Jan 1st'));
// console.log(parseDates('hello'));
// console.log(parseDates('Today 2 PM'));
// // module.exports = parseDates;
