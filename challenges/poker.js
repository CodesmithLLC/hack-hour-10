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

function poker(hand1,hand2) {
  let board = [];

  let count = 0;
  while (count < 3){
    let card = Math.floor(Math.random()*14);
    board.push(card);
    count++;
  }

  let player1 = hand1.forEach(function(card){
    board.push(card);
  });
  let player2 = hand1.forEach(function(card){
    board.push(card);
  });

  console.log(player1);
  console.log(player2);
}

poker([1,1],[2,2]);

module.exports = poker;
