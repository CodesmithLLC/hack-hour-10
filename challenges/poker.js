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
  let score1 = {points: null, highCard: null};
  let score2 = {points: null, highCard: null};

  function handCounter(hand, score) {
    let count = hand.reduce((acc, curr) => {
      if (!acc[curr]) acc[curr] = 1;
      else acc[curr]++;
      return acc;
    }, {});

    for (let prop in count) {
      if (count[prop] === 4) {
        score.points = 7;
        break;
      } else if (count[prop] === 3) {
        for (let key in count) {
          if (count[key] === 2) {
            score.points = 6;
            break;
          } else {
            score.points = 4;
          }
        }
      } else if (count[prop] === 2) {
        for (let key in count) {
          if (count[key] === 2 && key !== prop) {
            score.points = 3;
            break;
          } else {
            score.points = 2;
          }
        }
      }
    }

    if (!score.points) {
      let arr = Object.keys(count).map(num => Number(num)).sort((a,b) => a - b);
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
          score.points = 1;
          break;
        }
        score.points = 5;
      }
    }
  }
  handCounter(hand1, score1);
  handCounter(hand2, score2);

  if (score1.points > score2.points) {
    return "Player 1 wins";
  } else if (score1.points === score2.points) {
    return "Draw";
  } else {
    return "Player 2 wins";
  }
}

module.exports = poker;
