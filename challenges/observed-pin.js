/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. 
We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to 
this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the 
PIN he saw, when Robby entered it.

The keypad has the following layout:


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
*/
let expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}



let combinations = {
  "1": "124",
  "2": "135",
  "3": "26",
  "4": "157",
  "5": "2468",
  "6": "359",
  "7": "48",
  "8": "5790",
  "9": "68",
  "0": "8"
}

function getPINs(observed) {
  let strPin = observed.toString();
  let arrCombos = strPin.split('').map((val) => {
    return combinations[val];
  });
  // console.log(strPin);
  // console.log(arrCombos);
  let pinCombos = [];
  generatePins(arrCombos, 0, "");
  function generatePins(kpossibilities, index, currCombination, numPossibilities=observed.toString().split('').length-1){
    if(index === numPossibilities+1){
      pinCombos.push(currCombination);
    }
    let possibilities = kpossibilities.slice()
    // for(let i = 0; i < possibilities[index].length; ++i){
    while(possibilities[index] && possibilities[index].length > 0){
      let currLetter = possibilities[index].slice(0,1);
      possibilities[index] = possibilities[index].slice(1);
      // console.log(`index ${index}: currLetter: ${currLetter}`);
      // console.log(currCombination + currLetter);
      generatePins(possibilities, index+1, currCombination + currLetter);
    }
  }
    // console.log(pinCombos);
    return pinCombos;
}

// getPINs(369);

module.exports = getPINs