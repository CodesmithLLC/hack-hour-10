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
  // Fail fast if possible
  const timeStr = str.slice(-8).trim()
  if (timeStr.length !== 7 && timeStr.length !== 8) return new Date()
  if (timeStr.slice(-3, -2) !== ' ') return new Date()
  const amPM = timeStr.slice(-2)
  if (amPM !== 'AM' && amPM !== 'PM') return new Date()
  const colonIndex = timeStr.indexOf(':')
  if (colonIndex !== 1 && colonIndex !== 2) return new Date()
  let hour = Number(timeStr.slice(0, colonIndex))
  hour = amPM !== 'AM' ? hour : hour + 12
  const minute = Number(timeStr.slice(colonIndex + 1, colonIndex + 3))
  if (isNaN(hour) || isNaN(minute)) return new Date()

  // Acceptable day strings
  const days = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6
  }

  // Acceptable month strings
  const months = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11
  }

  // Days in month
  const dayCount = {
    Jan: 31,
    Feb: 28,
    Mar: 31,
    Apr: 30,
    May: 31,
    Jun: 30,
    Jul: 31,
    Aug: 30,
    Sep: 30,
    Oct: 31,
    Nov: 30,
    Dec: 31
  }

  // Returns previous month
  const lastMonth = (mon) => {
    return mon === 'Jan'
      ? 'Dec'
      : month === 'Feb'
        ? 'Jan'
        : month === 'Mar'
          ? 'Feb'
          : month === 'Apr'
            ? 'Mar'
            : month === 'May'
              ? 'Apr'
              : month === 'Jun'
                ? 'May'
                : month === 'Jul'
                  ? 'Jun'
                  : month === 'Aug'
                    ? 'Jul'
                    : month === 'Sep'
                      ? 'Aug'
                      : month === 'Oct'
                        ? 'Sep'
                        : month === 'Nov'
                          ? 'Oct'
                          : 'Nov'
  }

  // Detect string format
  let format = ''
  const dayOrMonthStr = str.slice(0, -timeStr.length).trim()

  // Today
  if (dayOrMonthStr === 'Today') format = 'today'
  // Day
  else if (days[dayOrMonthStr] !== undefined) format = 'fullDay'
  // Month
  else {
    const maybeMonth = dayOrMonthStr.slice(0, 3)
    if (months[dayOrMonthStr.slice(0, 3)] === undefined) return new Date()
    const maybeDay = dayOrMonthStr.slice(3).trim()
    if (maybeDay.slice(-2) !== 'st' &&
      maybeDay.slice(-2) !== 'nd' &&
      maybeDay.slice(-2) !== 'rd' &&
      maybeDay.slice(-2) !== 'th') return new Date()
    format = 'month'
  }

  // Code below should only run on valid format
  let dayNum, month
  const nowStr = new Date().toString()
  switch (format) {
    case 'today':
      dayNum = Number(nowStr.slice(8, 10))
      month = nowStr.slice(4, 7)
      return new Date(2016, months[month], dayNum, hour - 8, minute).toUTCString()
    case 'fullDay':
      let todayNum
      for (let day in days) if (day.indexOf(nowStr.slice(0, 3)) === 0) todayNum = days[day]
      const difference = todayNum - days[dayOrMonthStr]
      dayNum = Number(nowStr.slice(8, 10)) - difference
      month = nowStr.slice(4, 7)
      if (dayNum > 7) dayNum = dayNum - 7
      else {
        dayNum = dayCount[month] + dayNum - 7
        month = lastMonth(month)
      }
      return new Date(2016, months[month], dayNum, hour - 8, minute).toUTCString()
    case 'month':
      dayNum = Number(str.slice(4, 6))
      month = str.slice(0, 3)
      return new Date(2016, months[month], dayNum, hour - 8, minute).toUTCString()
    default: return new Date()
  }
}

module.exports = parseDates;
