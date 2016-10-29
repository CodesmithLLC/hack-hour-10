/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  const floor = Math.floor(n / 2);
  const ceil = Math.ceil(n / 2);

  for (let i = 0; i < floor; i++) {
    for (let j = 0; j < ceil; j++) {
      let temp = grid[i][j];
      grid[i][j] = grid[n - 1 - j][i];
      grid[n - 1 - j][i] = grid[n - 1 - i][n - 1 - j];
      grid[n - 1 - i][n - 1 - j] = grid[j][n - 1 - i];
      grid[j][n - 1 - i] = temp;
    }
  }

  return grid;
}

// const grid0 = [[0, 1],
//                [2, 3]]
// console.log(rotateGrid(grid0, 2));
// const grid1 = [   [1, 2, 3],
//                   [4, 5, 6],
//                   [7, 8, 9]   ]
// console.log(rotateGrid(grid1, 3));

// const grid2 = [   [1, 2, 3, 4],
//                   [5, 6, 7, 8],
//                   [9, 10, 11, 12],
//                   [13, 14, 15, 16]];
// console.log(rotateGrid(grid2, 4));
/*
4x4 BEFORE

 
  [0][0] becomes [0][3] === [0][n]
  [0][3] becomes [3, 3] === [n][n]
  [3, 3] becomes [3][0] === [n][n - 3]
  [3][0] becomes [0][0] === [n - 3][0]

  pattern for corners:
  if [0][0] add n-1 to second array
  if [0][n] add n-1 to first array
  if [n][n] subtract n-1 from second array
  if [n][0] subtract n-1 from first array

  pattern for middle outer:
    [0][1] becomes [1][3] === [1][n]
    [0][2] becomes [2][3] === [2][n]
    if [0] and not 0 or n second, then swap array indices and make second n

    [1][3] becomes [3][2] === [n][n - 1]
    [2][3] becomes [3][1] === [n][n - 2]
    if end in n, swap and subtract second from n

  general pattern:
  [0,i] -> [i,n-i],
  [i,n-i] -> [n-1,n-(i+1)],
  [n-1,n-(i+1)] -> [n-(i+1),0],
  [n-(i+1),0] to [0,i]

*/

module.exports = rotateGrid;
