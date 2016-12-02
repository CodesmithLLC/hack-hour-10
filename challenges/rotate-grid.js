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
  let length = grid[0].length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1; j++) {
      let temp = grid[i][j];
      grid[i][j] = grid[i][length - 1 - j];
      grid[length - 1 - j][i] = grid[length - 1 - j][length - 1 - i];


    }
  }
  return grid;
}

const sampleGrid = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(rotateGrid(sampleGrid, 3)); // [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ]


module.exports = rotateGrid;
