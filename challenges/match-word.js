// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // Store reverse as a string in a stack
  const reversedStrings = [];
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    // Prep our word
    if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
      let word = '';
      let reverse = '';

      // Generate a word
      let char = str.charCodeAt(i);
      while ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
        word += str[i];
        reverse = str[i] + reverse;
        i++;
        char = str.charCodeAt(i);
      }
      // Logic to check if next string is in the stack
      if (reversedStrings[reversedStrings.length - 1] === word) reversedStrings.pop();
      else reversedStrings.push(reverse);
    }
  }

  // In the end, we should have an empty array
  if (reversedStrings.length > 0) return false;
  return true;
}

module.exports = matchWord;
