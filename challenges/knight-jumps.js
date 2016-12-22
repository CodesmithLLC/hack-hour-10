// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

// Other approach to try: Compare knight starting position with edges of board
// Solution needs fixing :/

// Brute force method! Check all possible moves. O(1) space; O(n) time

function knightjumps(str) {
  const x = Number(str[1]);
  const y = Number(str[3]);
  let potentialMoves = 0;

  // Check if move two squares up and one square left is possible

  if (x - 1 >= 1 && y + 2 >= 1) {
    potentialMoves += 1;
  }

  // Check if move two squares up and one squares right is possible

  if (x + 1 <= 8 && y + 2 >= 1) {
    potentialMoves += 1;
  }

  // Check if move one square up and twos squares left is possible

  if (x - 2 >= 1 && y + 1 >= 1) {
    potentialMoves += 1;
  }

  // Check if move one square up and twos squares right is possible

  if (x + 2 <= 8 && y + 1 >= 1) {
    potentialMoves += 1;
  }

  // Check if move two squares down and one square left is possible

  if (x - 1 >= 1 && y - 2 <= 8) {
    potentialMoves += 1;
  }

  // Check if move two squares down and one square right is possible

  if (x + 1 <= 8 && y - 2 <= 8) {
    potentialMoves += 1;
  }

  // Check if move one square down and twos squares left is possible

  if (x - 2 >= 1 && y - 1 <= 8) {
    potentialMoves += 1;
  }

  // Check if move one square down and twos squares right is possible

  if (x + 2 <= 8 && y - 1 <= 8) {
    potentialMoves += 1;
  }

  return potentialMoves;
}

// console.log(knightjumps('(8 8)'))

module.exports = knightjumps;
