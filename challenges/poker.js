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

function filterToSets(arr) {
  return arr.filter((num) => {
    return arr.indexOf(num) !== arr.lastIndexOf(num);
  });
}

function sum(arr) {
  return reduce((sum, num) => sum + num);
}

function poker(hand1, hand2) {
  let winner;
  const matchedHand1 = filterToSets(hand1);
  const matchedHand2 = filterToSets(hand2);
  // 4 oak
  if ((matchedHand1.length) === 4 && (sum(matchedHand1) / 4 === matchedHand1[0])) winner = '1';
  if ((matchedHand1.length) === 4 && (sum(matchedHand1) / 4 === matchedHand1[0])) winner = '1';
  // full house
  // straight
  // 3 oak
  // 2 pair
  // 1 pair
  // high card
}

module.exports = poker;
console.log(filterToSets([1, 2, 3, 4, 4]));
console.log(filterToSets([1, 2, 2, 4, 4]));
console.log(filterToSets([1, 2, 2, 2, 4]));
console.log(filterToSets([1, 2, 3, 5, 4]));
