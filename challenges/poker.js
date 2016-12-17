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
  if( !hand1 || !hand2 ) return undefined;
  if( hand1.length !== 5 || hand2.length !== 5 ) return undefined;

  const handRanks = {
    empty: 0,
    pair: 1,
    twoPair: 2,
    threeKind: 3,
    straight: 4,
    fullHouse: 5,
    fourKind: 6
  };

  let player1 = emptyHand();
  fillHand(hand1, player1);
  let player2 = emptyHand();
  fillHand(hand2, player2);

  const player1Hand = playerToHand(player1);
  const player2Hand = playerToHand(player2);

  const player1Rank = handRanker(handRanks, player1Hand, hand1);
  const player2Rank = handRanker(handRanks, player2Hand, hand2);

  if (player1Rank > player2Rank) return 'Player 1 wins';
  if (player1Rank < player2Rank) return 'Player 2 wins';
  if (player1Rank === player2Rank) {
    return Math.max.apply(0, hand1) > Math.max.apply(0, hand2) ? 'Player 1 wins' : Math.max.apply(0, hand1) === Math.max.apply(0, hand2) ? 'Draw' : 'Player 2 wins';
  }
}

// returns object with keys from 2 to 14 representing all cards, all with values of 0
function emptyHand() {
  let obj = {};
  for ( let i = 2; i <= 14; i++) {
    obj[i] = 0;
  }
  return obj;
}

// create object with all cards and number of cards
function fillHand(hand, player) {
  hand.forEach(function(elem) {
    player[elem] += 1;
  });
}

function playerToHand(hand) {
  let arr = [];
  for ( let card in hand ) {
    if( hand[card] !== 0 ) arr.push( hand[card] );
  }
  arr.sort(function( a, b ){ return a < b } )
  return arr;
}

function handRanker(possibleHands, playerHand, originalArray) {
  if( playerHand[0] === 4 ) return possibleHands.fourKind;
  if( playerHand[0] === 3 ) {
    return playerHand[1] === 2 ? possibleHands.fullHouse : possibleHands.threeKind
  }
  if ( playerHand[0] === 2 ) {
    return playerHand[1] === 2 ? possibleHands.twoPair : possibleHands.pair;
  }
  originalArray.sort( function( a, b ) { return a > b });
  for (var i = 0; i < originalArray.length - 1; i++ ) {
    if(originalArray[i + 1] - originalArray[i] !== 1) return possibleHands.empty;
  }

  return possibleHands.straight;
}


console.log(poker([2,3,4,5,6], [4,2,3,3,3])); //-> "Player 1 wins"


module.exports = poker;
