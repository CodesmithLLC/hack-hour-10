// Some languages have "if" statements that are closed by "fi"
// instead of curly brackets. Or they close a "case" with "esac", i.e.
// the same keyword backwards. for this problem we'll check that all words in a
// string are "closed". Write a function that takes a string and returns true if every word
// is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	const possibles = {
		'if': 'fi',
		'while':'elihw',
		'for' : 'rof',
		'end' : 'dne'
	};
	const multiples = {};
  if (str === '') return true;
 // const removeString = str.replace(/[!@#$%-_^&*]/g," ").toLowerCase();
  const lowerCase = str.toLowerCase();
  for (let prop in possibles){
  	//console.log(removeString);
//  	console.log(prop)
  	console.log(lowerCase.indexOf([prop]));
  	if (lowerCase.indexOf(possibles[prop]) !== -1){
  	if (!lowerCase.includes(possibles[prop]) || lowerCase.indexOf(possibles[prop]-1) === lowerCase.indexOf(prop) ) return false
  	}
  	if (!multiples[prop] || multiples[possibles[prop]]){
  	multiples[prop] = lowerCase.indexOf(possibles[prop]);
  	multiples[possibles[prop]] = lowerCase.indexOf([prop]);
  	}
  }

  return true;
}

module.exports = matchWord;
