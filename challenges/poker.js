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

  // Function to return object with SCORE and IMPORTANTCARD.
  const assignScore = (hand) => {
    const scores = {
      fourOfAKind: 7,
      fullhouse: 6,
      straight: 5,
      threeOfAKind: 4,
      twoPair: 3,
      onePair: 2,
      highCard: 1
    }
    const counts = {}
    let highestCount = 0, importantCard = 0, totalUnique = 0, values = []
    hand.forEach(card => {
      values.push(card)
      if (counts[card] !== undefined) counts[card]++
      else {
        counts[card] = 1
        totalUnique++
      }
      if (counts[card] === highestCount) importantCard = Math.max(importantCard, card)
      if (counts[card] > highestCount) {
        highestCount = counts[card]
        importantCard = card
      }
    })
    // Sort array of card values.
    values.sort((a, b) => a > b)
    let score = 0
    switch (highestCount) {
      case 1:
        // Check for straight. If not, then it is just "high card."
        if (values[4] - values[0] === 4) score = 5
        else score = 1
        break
      case 2:
        // Check for 1 pair or 2 pair
        if (totalUnique === 3) score = 3
        else score = 2
        break
      case 3:
        // Check if it is a full house. If not, it is just three of a kind.
        if (totalUnique === 2) score = 6
        else score = 4
        break
      case 4:
        // Four of a kind.
        score = 7
        break
    }
    return { score, importantCard }
  }
  if (assignScore(hand1).score > assignScore(hand2).score) return "Player 1 wins"
  if (assignScore(hand1).score < assignScore(hand2).score) return "Player 2 wins"
  if (assignScore(hand1).score === assignScore(hand2).score) {
    if (assignScore(hand1).importantCard > assignScore(hand2).importantCard) return "Player 1 wins"
    if (assignScore(hand1).importantCard < assignScore(hand2).importantCard) return "Player 2 wins"
    if (assignScore(hand1).importantCard === assignScore(hand2).importantCard) return "Draw"
  }
}

module.exports = poker;
