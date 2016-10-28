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

//1,1 -> 1,3
//1,2 -> 2,3
//1,3 -> 3,3
//2,1 -> 1,2
//2,2 -> 2,2
//2,3 -> 3,2
//3,1 -> 1,1
//3,2 -> 2,1
//3,3 -> 3,1

// function rotateGridInPlace(grid, n) {
//   for (let i = 0; i < n; i++) {
//     let j = i;
//     console.log('iteration', i);
//     let done = false;
//     let currentSquare = grid[i][j];
//     let startSquare = grid[i][j];
//     while (!done) {
//       let tempI = i;
//       i = j
//       j = n - tempI - 1;
//       grid[i][j] = currentSquare;
//       currentSquare = grid[i][j]
//       if (tempSquare = startSquare) done = true
//     }
//   }
//   return grid;
// }

function rotateGrid(grid, n) {
  // scan the entire grid once
  // map column j to row (n-j+1)
  // map column row i to column i
  let rotated = false;
  const newGrid = [];
  for (let i = 0; i < n; i++) {
    newGrid.push([]);
    for (let j = 0; j < n; j++) {
      newGrid[i][j] = grid[n - j - 1][i]
    }
  }
  return newGrid;
}


console.log(rotateGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3));
module.exports = rotateGrid;
