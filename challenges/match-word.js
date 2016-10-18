
// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
//Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words 
//in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. 
//Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true


function matchWord(str) {
  const results = [];
  const alphabet = ' abcdefghijklmnopqrstuvwxyz';
  const letters = str.toLowerCase().split('');

  //not sure why filter didn't work here
  letters.forEach(function (input) {
    if (alphabet.indexOf(input) !== -1) results.push(input);
  });

  //also unsure why I can't just make results an array of words and check for reversed words...currently have ['w','h','i','l','e','','','t','r','y']
  //and am expecting ['while', 'try']
  return results;

}

module.exports = matchWord;