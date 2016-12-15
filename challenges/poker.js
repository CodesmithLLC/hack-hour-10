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
function straight(hand) {
  for(let i = 0; i < hand.length - 1; i++) {
    if(hand[i] - 1 !== hand[i+1]) return false;
  } return true;
}

function type(hand) {
  hand = hand.reduce( (acc, cur) => { 
      if(acc[cur] === undefined) acc[cur] = 1;
      else acc[cur]++;
      return acc;
  }, {});
  let cards = Object.keys(hand);
  cards = cards.sort( (a, b) => {
    if(hand[b] - hand[a] < 0) return hand[b] - hand[a];
    else return b - a;
  });
  // console.log('in the type function',cards);
  let result;
  if(hand[cards[0]] === 4) result = {type: 7, high: cards};
  else if(hand[cards[0]] === 3 && hand[cards[1]] === 2) result = {type: 6, high: cards};
  else if(hand[cards[0]] === 3 && hand[cards[1]] === 2) result = {type: 6, high: cards};
  else if(hand[cards[0]] === 3) result = {type: 4, high: cards};
  else if(hand[cards[0]] === 2 && hand[cards[1]] === 2) result = {type: 3, high: cards};
  else if(hand[cards[0]] === 2) result = {type: 2, high: cards};
  else result = {type: 2, high: cards};
  return result;

}

function poker(hand1, hand2) {
  console.log(hand1, hand2);
  let h1 = hand1.sort( (a, b) => b - a);
  let h2 = hand2.sort( (a, b) => b - a);
  let res1, res2;
  let k1 = [], k2 = [];
  if(straight(h1)) res1 = {type: 5, high: [h1[0]]};
  if(straight(h2)) res2 = {type: 5, high: [h2[0]]};

  if(!res1) res1 = type(h1);
  if(!res2) res2 = type(h2);

  if(res1.type > res2.type) return "Player 1 wins";
  else if(res2.type > res1.type) return "Player 2 wins";
  else {
    for(let i = 0; i < res1.high.length; i++) {
      if(res1.high[i] > res2.high[i]) return "Player 1 wins";
      else if(res2.high[i] > res1.high[i]) return "Player 2 wins";
    }
    return "Draw";
  }
}



module.exports = poker;
