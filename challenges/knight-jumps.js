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
  const xCoord = Number(str[1]);
  const yCoord = Number(str[3]);
  const LOW = 1, HIGH = 8;
  const onBoard = (x, y) => x >= LOW && x <= HIGH && y >= LOW && y <= HIGH
  const dist = [2, 1], dir = [1, -1], vectors = [], moves = []
  for (let ds in dist)
    for (let dr in dir)
      vectors.push(dist[ds] * dir[dr]);
  for (let x in vectors)
    for (let y in vectors)
      if (Math.abs(vectors[x]) !== Math.abs(vectors[y])) moves.push({ x: vectors[x], y: vectors[y] });
  const where = moves.map(coords => { return { x: coords.x + xCoord, y: coords.y + yCoord } });
  const legal = where.filter(coords => onBoard(coords.x, coords.y));
  return legal.length;
}

module.exports = knightjumps;

