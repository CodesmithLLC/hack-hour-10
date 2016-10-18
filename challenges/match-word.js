// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (!str.length) return true;
  var qeue = [];
  
  var test = str.toUpperCase();
  var testing = '';
  for (var i = 0; i < test.length; i++){
    if (/\w/.test(str[i]) && str[i] !== '_') {
      testing += test[i];
    }
    else { 
      if(testing) qeue.push(testing);
      testing = '';
    }
  }
   if (testing) qeue.push(testing);
   var checkqeue = [qeue[0]];
 
  for (var j = 1; j < qeue.length; j++) { 
    if (checkqeue[0] !== qeue[j].split('').reverse().join('')) {
      checkqeue.unshift(qeue[j])
    }
    else checkqeue.shift();
  }
console.log(checkqeue)
  return checkqeue.length === 0;
}

module.exports = matchWord;

