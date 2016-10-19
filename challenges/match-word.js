// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
//Or they close a "case" with "esac", i.e. the same keyword backwards.
//for this problem we'll check that all words in a string are "closed".
//Write a function that takes a string and returns true if every word is closed by its backwards counterpart.
//Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {

    if (str.length === 0) return true;

    let strNoSpecials = string.replace(/[^a-zA-Z]/g, "");
    console.log(strNoSpecials);

    if (strNoSpecials.length % 2 !== 0) {
      return false;
    } else {
      let mid= strNoSpecials.length/2;
      let left = strNoSpecials.substring(0,mid);
      let right = strNoSpecials.substring(mid);
      let rightRev = right.split("").reverse().join("");

      console.log(left);
      console.log(right);

      if (left.toLowerCase() === rightRev.toLowerCase() && string[string.indexOf(left) + mid]  != right[0]) {
        return true;
      } else {
        return false;
      }

    }
}

module.exports = matchWord;
