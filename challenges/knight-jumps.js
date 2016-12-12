// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"
function strToCoords(str){
  return str.slice(1,4).split(' ').map(el => parseInt(el));
}
function knightjumps(str) {
  str = strToCoords(str);
  x = str[0];
  y = str[1];
  if(x >= 3 && x <= 6 && y >= 3 && y<= 6){
    return 8;
  }
  
  if( ( ((x <= 3) || (x >= 7)) && ( y <= 6 && y >= 3 ) ) ){
    if(x === 7 || x === 2){
      return 2;
    }
    return 4;
  }
  if( ((y <= 3) || (y >= 7)) && ( x <= 6 && y >= 3 ) ){
    if( y === 7 || y === 2){
      return 2;
    }
    return 4;
  }
  if((x === 1 || x === 2) && (y === 2 || y === 7)){
    return 4;
  }
  if( (x === 1 || x === 2 || x === 7 || x === 8) && (y === 1 || y === 2 || y === 7 || y === 8) ){
    return 5;
  }
  return 6;
}
let grid = [];
for( let x = 1; x <= 8; ++x){
  grid.push([]);
  for( let y = 1; y <= 8; ++y){
    grid[x-1].push(knightjumps(`(${x} ${y})`));
  }
}
console.log(grid);

module.exports = knightjumps;
