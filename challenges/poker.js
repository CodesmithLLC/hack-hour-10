/*Build a function that takes in two arrays of five elements, with each
* array representing a player's hand and each element
* representing a card from a standard deck of cards:
* 52 cards,
* 				2 - Ace,
* 				NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
*
* The function should return either the string "Player 1 wins", "Player 2 wins", or "Draw"
*  based on the two player's hands:
*
* 4-of-a-kind: 4 cards of same rank & one of some other rank.
*
* full house : 3 cards of 1 rank (number) and 2 cards of another rank. 2 or more full houses are ranked by the triplet card.
*
* straight: 5 cards of a sequential rank
*
* 3-of-a-kind: 3 cards of the same rank
*
* 2-pair: 2 pairs of cards (each pair of a different rank)
*
* 1-pair: a pair (2 cards of same rank)
*
* high card: NOTHING, not sequential, not the same rank, (so you take the highest card)
*
* (keeping in mind how cards out-rank each other and possible draws)
*
* Start by hard-coding the array/hand inputs, but if there is time also
* create a deck of cards function that creates the two arrays for you,
* keeping in mind that ***there are only 4 of each card in a deck (52 total)***
*
* BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
*
* Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
*/

function poker(hand1, hand2) {

	let numberoftimesforhand1 = {};

	function createObject(array1, array2){
		for(var key in array) {
			if(numberoftimes[key] === undefined) {
				numberoftimes[array[key]] = 1;
			} else {
				numberoftimes[array[key]] = numberoftimes[array[key]] + 1;
			}
		}
		return numberoftimes;
	}
	console.log(createObject(hand1));
	console.log(createObject(hand2));
}

console.log(poker([3,5,5,5,2], [4,6,7,8,8]));  //-> "Player 1 wins"

// module.exports = poker;
