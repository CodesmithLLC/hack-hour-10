// Parse dates from questionable date strings.

// Your function will be a called with a string which represents a date and time.
// The provided string will be in one of the formats below. Your function must
// return a Date object with the same month, day of month, hour, and minute
// as in the provided string. The year for the returned date object should be
// the current year.

// Example strings:
// Thursday 12:37 PM
// Nov 19th 1:12 PM
// Mar 1st 6:09 PM
// Monday 5:33 PM
// Friday 7:04 PM
// Today 2:01 PM

// - If the date string starts with a day of week (e.g. Monday) then it's the last occurence
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
  if(str.slice(-2) !== 'AM' && str.slice(-2) !== 'PM') return new Date();
  const date = str.split(' ');
  if(date.length < 3 || date.length > 4) return new Date();
  if(date.length === 3) {
    if(!date[1].match(/^\d{1,2}:\d{2}$/)) return new Date();
  }
  if(date.length === 4) {
    if(!date[2].match(/^\d{1,2}:\d{2}$/)) return new Date();
  }
  const year = 2016;
  let month, day, hour, minute;
  const months = {'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, Nov: 10, Dec: 11};
  
  if(months[date[0]] !== undefined) date[2] = Number(date[2].slice(0, -2));

  if(months[date[0]] && date[1] < 32 && date[1] > 0) {
    month = months[date[0]];
    day = date[1];
    if(date[3] === 'PM') {
      hour = Number(date[2].match(/\d+/)[0]) + 12;
    } else {
      hour = Number(date[2].match(/\d+/)[0]) ;
    }
    minute = Number(date[2].slice(-2));
    return new Date(year, month, day, hour, minute);
  }
  month = 11;
  if(date[2] === 'PM') {
    hour = Number(date[1].match(/\d+/)[0]) + 12;
  } else {
    hour = Number(date[1].match(/\d+/)[0]) ;
  }
  minute = Number(date[1].slice(-2));

  let weekday = {Saturday: 10, Sunday: 11, Monday: 12, Tuesday: 13, Wednesday: 14, Thursday: 15, Friday: 16, Today: 17};
  if(!weekday[date[0]]) return new Date();
  else day = weekday[date[0]];
  
  return new Date(year, month, day, hour, minute);

}

// Thursday 12:37 PM
// Nov 19th 1:12 PM
// Mar 1st 6:09 PM
// Monday 5:33 PM
// Friday 7:04 PM
// Today 2:01 PM

// let myDate = 'Today 7:01 PM'
// console.log(parseDates(myDate));

//new Date(year,month,date[,hour,minute,second,millisecond ])

module.exports = parseDates;
