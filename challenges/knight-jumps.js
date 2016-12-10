// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

// Brute force method! Check all possible moves. O(1) space; O(n) time

function knightjumps(str) {
  const x = Number(str[0]);
  const y = Number(str[2]);
  let potentialMoves = 0;

  // Check if move two squares up and one square left is possible

  if (x - 1 > 0 && y + 2 > 0) {
    potentialMoves += 1;
  }

  // Check if move two squares up and one squares right is possible

  if (x + 1 < 9 && y + 2 > 0) {
    potentialMoves += 1;
  }

  // Check if move one square up and twos squares left is possible

  if (x - 2 > 0 && y + 1 > 0) {
    potentialMoves += 1;
  }

  // Check if move one square up and twos squares right is possible

  if (x + 2 < 9 && y + 1 > 0) {
    potentialMoves += 1;
  }

  // Check if move two squares down and one square left is possible

  if (x - 1 > 0 && y - 2 < 9) {
    potentialMoves += 1;
  }

  // Check if move two squares down and one square right is possible

  if (x + 1 < 9 && y - 2 < 9) {
    potentialMoves += 1;
  }

  // Check if move one square down and twos squares left is possible

  if (x - 2 > 0 && y - 1 < 9) {
    potentialMoves += 1;
  }

  // Check if move one square down and twos squares right is possible

  if (x + 2 < 9 && y - 1 < 9) {
    potentialMoves += 1;
  }

  return potentialMoves;
}

module.exports = knightjumps;
