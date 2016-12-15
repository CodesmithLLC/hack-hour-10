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
  if (!Array.isArray(hand1) || !Array.isArray(hand2)) { throw new Error ('Inputs must be arrays.'); }
  const hand1Obj = {};
  const hand2Obj = {};
  let hand1Combo = {};
  let hand2Combo = {};

  hand1.forEach(card => {
    hand1Obj[card] ? hand1Obj[card] += 1 : hand1Obj[card] = 1;
  });

  hand2.forEach(card => {
    hand2Obj[card] ? hand2Obj[card] += 1 : hand2Obj[card] = 1;
  });

  const hand1UniqCards = Object.keys(hand1Obj);
  const hand2UniqCards = Object.keys(hand2Obj);

  calculateHand(hand1Obj, hand1UniqCards, hand1Combo);
  calculateHand(hand2Obj, hand2UniqCards, hand2Combo);
  return calculateWinner(hand1Combo, hand2Combo);

function calculateHand(handObj, cards, handCombo) {

  cards.forEach(card => {
    if (handObj[card] === 4) {
      handCombo[card] = 5; // four of a kind 
    }
    else if (handObj[card] === 3) {
      handCombo[card] = 3; // three of a kind
    }
    else if (handObj[card] === 2) {
      handCombo[card] = 1; // one pair
    }
  });

  if (!Object.keys(handObj).length) {
    let cardSum = cards.reduce((p, c) => p + c);
    let highCard = Math.max(...hand1UniqCards);
    if (cardSum % 5 === 0) {
      handCombo[highCard] = 3.5; // straight
    }
    else { handCombo[highCard] = 0; }
  }
}

function calculateWinner(hand1, hand2) {
  const hand1Cards = Object.keys(hand1);
  const hand2Cards = Object.keys(hand2);
  const highCard1 = Math.max(...hand1Cards);
  const highCard2 = Math.max(...hand2Cards);
  let score1 = 0;
  let score2 = 0;

  hand1Cards.forEach(card => {
    score1 += hand1[card];
  }) 

  hand2Cards.forEach(card => {
    score2 += hand2[card];
  }) 

  if (hand1Cards.length === 1 && hand2Cards.length === 1) {
    if (score1 < score2) {
      return "Player 2 wins";
    }
    else if (score1 > score2) { 
      return "Player 1 wins";
    }
    else if (score1 === score2) {
      if (highCard1 < highCard2) {
        return "Player 2 wins";
      }
      else if (highCard1 > highCard2) {
        return "Player 1 wins";
      }
      else { return 'Draw'; }
    }
  }

}

}

// console.log(poker([3,2,2,2,2], [2,2,2,2,8]));

module.exports = poker;
