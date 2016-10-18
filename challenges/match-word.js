// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
// i.e. the same keyword backwards. For this problem we'll check that all words in a string are "closed". 
// Write a function that takes a string and returns true if every word is closed by its backwards counterpart. 
// Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

// Unicode lowercase letters: a97 - z122

function matchWord(str) {
  let results = [];
  let temp = [];
  const smallStr = str.toLowerCase();

  // collection phase
  for (let i = 0; i < smallStr.length; i++) {
    const code = smallStr.charCodeAt(i);
    
    if (code > 96 && code < 122) {
      temp.push(smallStr[i]);
    } else if (temp.length) {
      results.push(temp.join(''));
      temp = [];
    }

    if (temp.length && i === smallStr.length - 1) {
      results.push(temp.join(''));
    }
  }

  function matcher(resultsArray) {
    if (resultsArray.length > 1) {
      for (let i = 0; i < resultsArray.length - 1; i++) {
        if (resultsArray[i] === resultsArray[i + 1].split('').reverse().join('')) {
          resultsArray.splice(i, 2);
          break;
        }
      }
    }

    return resultsArray;
  }

  while (results.length) {
    let length = results.length;
    results = matcher(results);
    if (length === results.length) return false;
  }

  return true;
}

// console.log(matchWord('__END_DNE-----'));                                   // -> true
// console.log(matchWord('__ENDDNE__'));                                      // -> false     (not separated by a space)
// console.log(matchWord('IF()()fi[]'));                                       // -> true      (should be case-insensitive)
// console.log(matchWord('for__if__rof__fi'));                                 // -> false     not properly closed. like ( [) ] 
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  // -> true
// console.log(matchWord(''));                                                // -> true

module.exports = matchWord;
