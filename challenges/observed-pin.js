
/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. 
We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to 
this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the 
PIN he saw, when Robby entered it.
The keypad has the following layout:
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually 
be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it 
could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.
He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they 
never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.
* possible in sense of: the observed PIN itself and all variations considering the adjacent digits
Can you help us to find all those variations? It would be nice to have a function, that returns an array 
of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs. 
But please note that all PINs, the observed one and also the results, must be strings, because of 
potentially leading '0's. Don't worry about the order of the array.
Detective, we count on you!
expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}
*/


//1357

function getPINs(observed) {
  let results = []
  //turn entries into an array
  let entries = observed.split('');
  //start the potential entries as the observed numbers
  let potentialNumbers = entries;

  let potentialNumbersNoDuplicates = [];
  //loop through each observed number and add the adjacent numbers to the potential numbers array
  for (let i = 0; i < entries.length; i++) {
    if (entries[i] === '0') potentialNumbers.push.apply(potentialNumbers, ['8']);
    if (entries[i] === '1') potentialNumbers.push.apply(potentialNumbers, ['2','5','4']);
    if (entries[i] === '2') potentialNumbers.push.apply(potentialNumbers, ['1','3','5']);
    if (entries[i] === '3') potentialNumbers.push.apply(potentialNumbers, ['2','6']);
    if (entries[i] === '4') potentialNumbers.push.apply(potentialNumbers, ['1','5','7']);
    if (entries[i] === '5') potentialNumbers.push.apply(potentialNumbers, ['2','4','6','8']);  
    if (entries[i] === '6') potentialNumbers.push.apply(potentialNumbers, ['3','5', '9']);
    if (entries[i] === '7') potentialNumbers.push.apply(potentialNumbers, ['4','8']);
    if (entries[i] === '8') potentialNumbers.push.apply(potentialNumbers, ['5','7','9','0']);
    if (entries[i] === '9') potentialNumbers.push.apply(potentialNumbers, ['6','8']);
  }
  
  potentialNumbers.forEach((num) => {
    if (!potentialNumbersNoDuplicates[num]) potentialNumbersNoDuplicates.push(num)
   })
  
console.log(potentialNumbersNoDuplicates);

}


module.exports = getPINs