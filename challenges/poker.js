/*Build a function that takes in two arrays of five elements, with each
* array representing a player's hand and each element
* representing a card from a standard deck of cards:
* 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
*
* The function should return either the string "Player 1 wins", "Player 2 wins", or "Draw"
*  based on the two player's hands:
*
* 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card.
* (keeping in mind how cards out-rank each other and possible draws)
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
  const p1Wins = "Player 1 wins";
  const p2Wins = "Player 2 wins";
  const draw = "Draw";

  function cardCounter(hand) {
    return hand.reduce((table, card) => {
      table[card] ? table[card] += 1 : table[card] = 1;
      return table;
    }, {});
  }

  const hand1Count = cardCounter(hand1);
  const hand2Count = cardCounter(hand2);

  function checkFourOfAKind(hand1, hand2) {
    if (Object.values(hand1Count).includes(4) && !Object.values(hand2Count).includes(4)) return p1Wins;
    if (Object.values(hand2Count).includes(4) && !Object.values(hand1Count).includes(4)) return p2Wins;
    // handle tie
  }

  function checkFullHouse(hand1, hand2) {
    const player1FullHouse = Object.values(hand1Count).includes(3) && Object.values(hand1Count).includes(2);
    const player2FullHouse = Object.values(hand2Count).includes(3) && Object.values(hand2Count).includes(2);
    if (player1FullHouse && !player2FullHouse) return p1Wins;
    if (player2FullHouse && !player1FullHouse) return p2Wins;
  }

  function checkStraight(hand1, hand2) {
    const hand1Sorted = hand1.sort((a, b) => a - b);
    const hand2Sorted = hand2.sort((a, b) => a - b);
    let hand1HasStraight = true;
    let hand2HasStraight = true;
    
    for (let i = 0; i < hand1Sorted.length - 1; i += 1) {
      if (hand1Sorted[i] + 1 !== hand1Sorted[i + 1]) {
        hand1HasStraight = false;
        break;
      }
    }

    for (let j = 0; j < hand2Sorted.length - 1; j += 1) {
      if (hand1Sorted[j] + 1 !== hand1Sorted[j + 1]) {
        hand2HasStraight = false;
        break;
      }
    }

    if (hand1HasStraight && !hand2HasStraight) return p1Wins;
    if (hand2HasStraight && !hand1HasStraight) return p2Wins;

    // handle ties
  }

  function checkThreeOfAKind(hand1, hand2) {
    if (Object.values(hand1Count).includes(3) && !Object.values(hand2Count).includes(3)) return p1Wins;
    if (Object.values(hand2Count).includes(3) && !Object.values(hand1Count).includes(3)) return p2Wins;
    // handle tie
  }

  function checkTwoPair(hand1, hand2) {
    const hand1HasTwoPair = Object.values(hand1Count).filter(card => card === 2).length === 2;
    const hand2HasTwoPair = Object.values(hand2Count).filter(card => card === 2).length === 2;
    if (hand1HasTwoPair && !hand2HasTwoPair) return p1Wins;
    if (hand2HasTwoPair && !hand1HasTwoPair) return p2Wins;
  }

  function checkOnePair(hand1, hand2) {
    if (Object.values(hand1Count).includes(2) && !Object.values(hand2Count).includes(2)) return p1Wins;
    if (Object.values(hand2Count).includes(2) && !Object.values(hand1Count).includes(2)) return p2Wins;
    // handle tie
  }

  function checkHighCard(hand1, hand2) {
    const hand1Sorted = hand1.sort((a, b) => a - b);
    const hand2Sorted = hand2.sort((a, b) => a - b);
    const hand1Highest = hand1Sorted.pop();
    const hand2Highest = hand2Sorted.pop();
    if (hand1Highest > hand2Highest) return p1Wins;
    if (hand2Highest > hand1Highest) return p2Wins;
    // handle tie if all cards identical
  }

  return checkFourOfAKind(hand1, hand2) ||
    checkFullHouse(hand1, hand2) ||
    checkStraight(hand1, hand2) ||
    checkThreeOfAKind(hand1, hand2) ||
    checkTwoPair(hand1, hand2) ||
    checkOnePair(hand1, hand2) ||
    checkHighCard(hand1, hand2);
}

// console.log(poker([3, 5, 5, 5, 2], [4, 6, 7, 8, 8])) // -> "Player 1 wins";
// console.log(poker([5,5,5,5,2], [4,8,7,8,8])) // -> "Player 1 wins";
// console.log(poker([3,2,5,5,2], [4,6,8,8,8])) // -> "Player 2 wins";
// console.log(poker([3,5,1,4,2], [4,6,7,9,8])) // -> "Player 2 wins";

module.exports = poker;
