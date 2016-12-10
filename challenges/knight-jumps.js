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
  const xyArr = str.slice(0, -1).slice(1).split(' ');
  const xyStart = {
    x: Number(xyArr[0]),
    y: Number(xyArr[1])
  }
  const possibleMoves = ((xy) => {
    const possibilities = [];
    // top right
    possibilities.push({ x: xy.x + 1, y: xy.y + 2 });
    possibilities.push({ x: xy.x + 2, y: xy.y + 1 });
    // bottom right
    possibilities.push({ x: xy.x + 2, y: xy.y - 1 });
    possibilities.push({ x: xy.x + 1, y: xy.y - 2 });
    // bottom left
    possibilities.push({ x: xy.x - 1, y: xy.y - 2 });
    possibilities.push({ x: xy.x - 2, y: xy.y - 1 });
    // top left
    possibilities.push({ x: xy.x - 2, y: xy.y + 1 });
    possibilities.push({ x: xy.x - 1, y: xy.y + 2 });
    return possibilities;
  })(xyStart);
  const validMoves = possibleMoves.filter(xy => xy.x >= 1 && xy.x <= 8 && xy.y >= 1 && xy.y <= 8);
  return validMoves.length;
}

console.log(knightjumps('(4 5)'))
console.log(knightjumps('(0 0)'))

module.exports = knightjumps;
