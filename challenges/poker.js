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
  const p1 = checkHand(hand1);
  const p2 = checkHand(hand2);
  // let p2 = [6, 9]
  // console.log(p1, p2);  
  if (p1[0] > p2[0]) return 'Player 1 wins';
  if (p2[0] > p1[0]) return 'Player 2 wins';
  if (p1[0] === p2[0]) {
    if (p1[1] > p2[1]) return 'Player 1 wins';
    if (p2[1] > p1[1]) return 'Player 2 wins';
    else return 'draw';
  }
}

function checkHand(hand, highCard) {
  const cards = {};  

  hand.forEach((num) => {
    if (!cards[num]) cards[num] = 1;
    else cards[num]++;
  });

  const cardsKeys = Object.keys(cards);

  // console.log(hand, cards);
  // console.log(cards[cardsKeys[1]]);

  // 4 of a kind => handRank = 7;
  for (let key in cards) {
    if (cards[key] === 4) return [7, key];
  };

  // full house => handRank = 6;
  if (cards[cardsKeys[0]] === 3){
    if (cards[cardsKeys[1]] === 2) {
      return [6, cardsKeys[0]]
    } 
  }
  if (cards[cardsKeys[1]] === 3){
    if (cards[cardsKeys[0]] === 2) {
      return [6, cardsKeys[1]];
    }
  }  

  // straight => handRank = 5;
  if (cardsKeys.length === 5) {
    let straight;
    for (let i = 0; i < cardsKeys.length - 1; i++) {
      straight = false;
      if (cardsKeys[i + 1] - cardsKeys[i] === 1) straight = true;
      else straight = false;
    }
    if (straight === true) return [5, Math.max(...cardsKeys)];
  }

  // trip => handRank = 4;
  for (let key in cards) {
    if (cards[key] === 3) return [4, key];
  };
  
  // 2pair => handRank = 3;
  let count = 0;
  let highest = 0;
  for (let i = 0; i < cardsKeys.length; i++) {
    if (cards[cardsKeys[i]] === 2) {
      count++;
      if (cardsKeys[i] > highest) highest = cardsKeys[i];
    }
    if (count === 2) return [3, highest];
  }
  
  // 1pair => handRank = 2;
  for (let key in cards) {
    if (cards[key] === 2) return [2, key];
  };

  // highcard => handRank = 1;
  return [1, Math.max(...cardsKeys)];
}

// console.log(poker([1, 11, 2, 4, 3], [2, 3, 9, 5, 6]));

module.exports = poker;
