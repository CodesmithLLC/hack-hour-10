// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  const xCoord = parseInt(str[1]);
  const yCoord = parseInt(str[3]);
  // // Xmoves are moves where the long part of the L is on the x axis
  // let Xmoves = 1;
  // let Ymoves = 1;
  if (xCoord >= 3 && xCoord <= 6 && yCoord >= 3 && yCoord <= 6) moves = 8;
  else if (xCoord >= 3 && xCoord <= 6 && (yCoord === 2 || yCoord === 7)) moves = 6;
  else if (xCoord >= 3 && xCoord <= 6 && (yCoord === 1 || yCoord === 8)) moves = 4;
  else if ((xCoord === 2 || xCoord === 7) && yCoord >= 3 && yCoord <= 6) moves = 6;
  else if ((xCoord === 1 || xCoord === 8) && yCoord >= 3 && yCoord <= 6) moves = 4;
  else if ((xCoord === 2 || xCoord === 7) && (yCoord === 2 || yCoord === 7)) moves = 4;
  else if ((xCoord === 2 || xCoord === 7) && (yCoord === 1 || yCoord === 8)) moves = 3;
  else if ((xCoord === 1 || xCoord === 8) && (yCoord === 2 || yCoord === 7)) moves = 3;
  else if ((xCoord === 1 || xCoord === 8) && (yCoord === 1 || yCoord === 8)) moves = 2;
  return moves;
}

module.exports = knightjumps;
// console.log(knightjumps('(4 5)'));
// console.log(knightjumps('(5 5)'));
// console.log(knightjumps('(1 1)'));
// console.log(knightjumps('(7 7)'));
// console.log(knightjumps('(1 2)'));
// console.log(knightjumps('(6 7)'));
