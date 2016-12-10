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
  const x = parseFloat(str.slice(1, 2));
  const y = parseFloat(str.slice(3, 4));
  const mutations = [[-1, 2],[1, 2],[-1, -2],[1, -2],[2, 1],[2, -1],[-2, 1],[-2, -1]];
  const acceptedMoves = mutations.filter((val)=>{
    return okayPosition(x + val[0]) && okayPosition(y + val[1]);
  });
  return acceptedMoves.length;
}

function okayPosition (loc) {
  return loc <= 8 && loc >=1;
}

const str = "(4 5)";
console.log(knightjumps(str));

module.exports = knightjumps;
