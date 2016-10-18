// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true
"use strict";
let states = {START : 0,
              WORD  : 1,
              IGNORE: 2,};

/* state machine:
START ===> word if character is matched || ignore if non char is matched 
WORD ===> word if character is matched || ignore if non char is matched 
          & check for matching string     & if currWord len > 0 push to stack
IGNORE ===> word if character is matched || ignore if non char is matched
            & reset word*/

function matchWord(str) {
  str = str.toLowerCase() + " ";
  let i = 0;
  let matchStack = [];
  let currWord = "";
  let state = states["START"];
  while( i < str.length){
    switch (state){
      case states["START"]:
        if(isAlpha(str[i])){
          state = states["WORD"];
          currWord += str[i];
        }else{
          state = states["IGNORE"];
        }
        currWord = "";
        break;
      case states["WORD"]:
        if(isAlpha(str[i])){ // don't change state
          currWord += str[i];
        }else{ //check here if the top is reverse if it is the pop else push
          // here we consumed a word and finished so we need to validate that 
          // word we just captured
          state = states["IGNORE"];
          if(checkTopIsReverse(matchStack, currWord)){
            matchStack.pop();
          }else{
            if(currWord.length > 0) matchStack.push(currWord);
          }
          currWord = "";
        }
        break;
      case states["IGNORE"]:
        if(isAlpha(str[i])){
          state = states["WORD"];
          currWord += str[i];
        }else{ // don't change state but be sure to reset the currWord.
          currWord = "";
        }
        break;
      default:
        return;
    }
    ++i;
  }
  return matchStack.length === 0;
}

function isAlpha(char){
  return char > 'a' && char < 'z';
}
function checkTopIsReverse(stack, str){
  if(stack.length === 0) return false;
  return stack[stack.length - 1] === str.split('').reverse().join('');
}

/*let a = matchWord('__END_DNE-----');
let b = matchWord('__ENDDNE__'); 
let c = matchWord('IF()()fi[]'); 
let d = matchWord('for__if__rof__fi'); 
let e = matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'); 
let f = matchWord(''); 
console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);
console.log(`d: ${d}`);
console.log(`e: ${e}`);
console.log(`f: ${f}`);*/

module.exports = matchWord;
