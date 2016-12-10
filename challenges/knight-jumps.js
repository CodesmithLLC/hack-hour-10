// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 
// chess board with no other pieces on the board.

// The structure of str will be the following: "(x y)" which represents 
// the position of the knight with x and y ranging from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should 
// output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  const x = Number(str[1]);
  const y = Number(str[3]);

  if (x === 1 || x === 8) {
    if (y === 1 || y === 8) return 2;
    if (y === 2 || y === 7) return 3;
    if (y > 2 && y < 7) return 4;
  }

  if (x === 2 || x === 7) {
    if (y === 1 || y === 8) return 3;
    if (y === 2 || y === 7) return 4;
    if (y > 2 && y < 7) return 6;
  }

  if (x > 2 && x < 7) {
    if (y === 1 || y === 8) return 4;
    if (y === 2 || y === 7) return 6;
    if (y > 2 && y < 7) return 8;
  }
}

// console.log(knightjumps('(4 5)')); // 8
// console.log(knightjumps('(1 1)')); // 2
// console.log(knightjumps('(8 7)')); // 3
// console.log(knightjumps('(2 2)')); // 4
// console.log(knightjumps('(3 7)')); // 6

module.exports = knightjumps;