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
  hand1 = hand1.sort((a, b) => a - b)
  hand2 = hand2.sort((a, b) => a - b)

  const obj1 = {}
  hand1.forEach(card => {
    if (!obj1[card]) obj1[card] = 1
    else obj1[card] += 1
  })

  function fourKind(obj) {
    return +Object.keys(obj).filter(card => obj[card] === 4)
  }

  function fullHouse(obj) {
    const three = +Object.keys(obj).filter(card => obj[card] === 3)
    const two = +Object.keys(obj).filter(card => obj[card] === 2)
    return three && two ? three : 0
  }

  function straight(hand) {
    for (let i = 1; i < 5; i++) {
      if (hand[i - 1] !== hand[i] - 1) return 0
    }
    return hand[4]
  }

  function threeKind(obj) {
    return +Object.keys(obj).filter(card => obj[card] === 3)
  }
  
  function twoPair(obj) {
    return Object.keys(obj).filter(card => obj[card] === 2).length === 2
  }
  
  function onePair(obj) {
    return Object.keys(obj).filter(card => obj[card] === 2).length === 1
  }

  function highCard(hand) {
    return hand[4]
  }
}

function drawHand() {
  const hand = []
  for (let i = 0; i < 5; i++)
    hand.push(Math.floor(Math.random() * 13 + 2))
  return hand
}

module.exports = poker;
console.log(poker([1, 1, 2, 2, 3], [1, 2, 3, 4, 5]));