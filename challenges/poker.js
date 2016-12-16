/*Build a function that takes in two arrays of five elements, with each
* array representing a player's hand and each element
* representing a card from a standard deck of cards:
* 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
*
* The function should return either the string "Player 1 wins", "Player 2 wins", or "Draw"
*  based on the two player's hands:
*
* 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card.
* (keeping in mind how cards out-rank eachother and possible draws)
*
* Start by hard-coding the array/hand inputs, but if there is time also
* create a deck of cards function that creates the two arrays for you,
* keeping in mind that there are only 4 of each card in a deck (52 total).
*
* BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
*
* Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
*/

function poker(hand1, hand2) {

  function generateObjs(arr) {
    const newObj = {}
    arr.forEach(el => {
      if (el === 'Jack') el = 11;
      if (el === 'Queen') el = 12;
      if (el === 'King') el = 13;
      if (el === 'Ace') el = 14;
      if (newObj[el]) newObj[el]++;
      else newObj[el] = 1;
    })
    return newObj;
  }

  function highestDups(obj) {
    let result = {'1': 0, '2': 0, '3': 0, '4': 0};
    for (let key in obj) {
      if (obj[key] === 4 && Number(key) > result[4]) {
        result[4] = Number(key);
      }
      if (obj[key] === 3 && key > result[3]) {
        result[3] = Number(key);
      }
      if (obj[key] === 2 && Number(key) > result[2]) {
        result[2] = Number(key);
      }
      if (obj[key] === 1 && key > result[1]) {
        result[1] = Number(key);
      }
    }
    return result;
  }

  function checkStraight(obj) {
    let arr = Object.keys(obj);
    if (arr.length != 5) return 0;
    let max = 0;
    arr = arr.map(el => Number(el)).sort((a,b) => a-b)
    for (let i=0; i<arr.length-1; i++) {
      if ((arr[i+1] - arr[i]) > 1) return 0;
    }
    return arr[arr.length-1]
  }

  function checkWins(hand1, hand2) {
    const hand1Obj = generateObjs(hand1);
    const hand2Obj = generateObjs(hand2);
    const dups1 = highestDups(hand1Obj);
    const dups2 = highestDups(hand2Obj);
    const straight1 = checkStraight(hand1Obj);
    const straight2 = checkStraight(hand2Obj);

    if (dups1[4] > dups2[4]) return 'Player 1 wins';
    if (dups1[4] < dups2[4]) return 'Player 2 wins';
    if ((dups1[3] > dups2[3]) && (dups1[2] > 0)) return 'Player 1 wins';
    if ((dups1[3] < dups2[3]) && (dups2[2] > 0)) return 'Player 2 wins';
    if (straight1 > straight2) return 'Player 1 wins';
    if (straight1 < straight2) return 'Player 2 wins';
    if (dups1[3] > dups2[3]) return 'Player 1 wins';
    if (dups1[3] < dups2[3]) return 'Player 2 wins';
    if (dups1[2] > dups2[2]) return 'Player 1 wins';
    if (dups1[2] < dups2[2]) return 'Player 2 wins';
    if (dups1[1] > dups2[1]) return 'Player 1 wins';
    if (dups1[1] < dups2[1]) return 'Player 2 wins';
    return 'Draw';
  }

  return checkWins(hand1, hand2);
}

module.exports = poker;
