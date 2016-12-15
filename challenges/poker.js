/*Build a function that takes in two arrays of five elements, with each
* array representing a player's hand and each element
* representing a card from a standard deck of cards:
* 52 cards, 2 through Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
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
  let hand1Max = 0;
  let hand1MaxCount = 0;
  let hand1Max2 = 0;
  let hand1MaxCount2 = 0;
  let hand2Max = 0;
  let hand2MaxCount = 0;
  let hand2Max2 = 0;
  let hand2MaxCount2 = 0;
  const hand1Obj = hand1
    .sort((a, b) => b - a)
    .reduce((all, item) => {
      all[item] ? all[item]++ : all[item] = 1;
      if (item > hand1Max) hand1Max = item;
      if (all[item] > hand1MaxCount) hand1MaxCount = all[item];
      if (all[item] < hand1MaxCount && all[item] > hand1MaxCount2) {
        hand1MaxCount2 = all[item];
        hand1Max2 = item;
      }
      return all;
  }, {});
  const hand2Obj = hand2
    .sort((a, b) => b - a)
    .reduce((all, item) => {
      all[item] ? all[item]++ : all[item] = 1;
      if (item > hand2Max) hand2Max = item;
      if (all[item] > hand2MaxCount) hand2MaxCount = all[item];
      if (all[item] < hand2MaxCount && all[item] > hand2MaxCount2) {
        hand2MaxCount2 = all[item];
        hand2Max2 = item;
      }
      return all;
  }, {});
  console.log(hand1Obj);
  console.log(hand1MaxCount);
  console.log(hand1Max);
  console.log(hand1MaxCount2);
  console.log(hand1Max2);
  console.log(hand2Obj);
  console.log(hand2MaxCount);
  console.log(hand2Max);
  console.log(hand2MaxCount2);
  console.log(hand2Max2);

  if (hand1MaxCount > hand2MaxCount) {
    return 'Player 1 wins';
  }
  if (hand2MaxCount > hand1MaxCount) {
    return 'Player 2 wins';
  }
  if (hand1MaxCount === hand2MaxCount) {
    if (hand1MaxCount2 > hand2MaxCount2) {
      return 'Player 1 wins';
    }
    if (hand2MaxCount2 > hand1MaxCount2) {
      return 'Player 1 wins';
    }
  }

}

console.log(poker([3,5,5,5,2], [4,6,7,8,8])); //-> "Player 1 wins"

// const cards = {
//   2: [ 2, 15, 28, 41 ],
//   3: [ 3, 16, 29, 42 ],
//   4: [ 4, 17, 30, 43 ],
//   5: [ 5, 18, 31, 44 ],
//   6: [ 6, 19, 32, 45 ],
//   7: [ 7, 20, 33, 46 ],
//   8: [ 8, 21, 34, 47 ],
//   9: [ 9, 22, 35, 48 ],
//   10: [ 10, 23, 36, 49 ],
//   11: [ 11, 24, 37, 50 ],
//   12: [ 12, 25, 38, 51 ],
//   13: [ 13, 26, 39, 52 ],
//   14: [ 14, 27, 40, 53 ]
// };

module.exports = poker;
