// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", i.e. the same keyword backwards. 
// for this problem we'll check that all words in a string are "closed". 
// Write a function that takes a string and returns true if every word is closed by its backwards counterpart. 
// Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (typeof str !== 'string') { return undefined; }
  if (str === '') { return true; };
  str = str.toLowerCase();
  const arr = str.match((/([a-z0-9])+/gi));

  const openings = [];
  const closings = [];
  const mode = [];
  for ( let i = 0; i < arr.length; i++ ) {
    const current = arr[i];
    const currentReversed = arr[i].split('').reverse().join('');
    const isOpening = openings.indexOf(current) !== -1;
    const isClosing = closings.indexOf(current) !== -1;
    if (isOpening) {
      // Registered opening
      mode.unshift(current);
    } else if (isClosing) {
      // Registered closing
      if (mode[0] === currentReversed) {
        // Correctly closed
        mode.shift();
      } else {
        // Incorrectly closed
        return false;
      }
    } else {
      // New opening
      openings.push(current);
      closings.push(currentReversed);
      mode.unshift(current);
    }
  }
  return mode.length === 0;
}
module.exports = matchWord;

// console.log(matchWord('__END_DNE-----')); // t
// console.log(matchWord('__ENDDNE__')); // f
// console.log(matchWord('IF()()fi[]')); // t
// console.log(matchWord('for__if__rof__fi'));  //-> false     not properly closed. like ( [) ] 
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
// console.log(matchWord('')); // t