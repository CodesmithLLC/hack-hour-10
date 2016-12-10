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
  const coords = str.replace(/[()]/g, '');
  const x = +coords[0], y = +coords[2];
  const upLeft = (x, y) => y + 2 <= 8 && x - 1 >= 1
  const leftUp = (x, y) => y + 1 <= 8 && x - 2 >= 1
  const upRight = (x, y) => y + 2 <= 8 && x + 1 <= 8
  const rightUp = (x, y) => y + 1 <= 8 && x + 2 <= 8
  const downLeft = (x, y) => y - 2 >= 1 && x - 1 >= 1
  const leftDown = (x, y) => y - 1 >= 1 && x - 2 >= 1
  const downRight = (x, y) => y - 2 >= 1 && x + 1 <= 8
  const rightDown = (x, y) => y - 1 >= 1 && x + 2 <= 8
  const moves = [
    upLeft, leftUp, upRight, rightUp, downLeft, leftDown, downRight, rightDown
  ]
  return moves.reduce((moves, currMove) => currMove(x, y) ? moves + 1 : moves, 0)
}

module.exports = knightjumps;
