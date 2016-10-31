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
  // Check if it is a square
  // Doesnt check all rows but just checks the firt row
  if (!Array.isArray(grid) || grid.length !== n || grid[0].length !== n) throw new Error('invalid grid');

  // We see that each column becomes the new row in a 90 degrees rotation
  const rotatedGrid = [];
  for (let i = 0; i < n; i++) {
    const newRow = [];
    for (let j = n - 1; j >= 0; j--) {
      newRow.push(grid[j][i]);
    }
    rotatedGrid.push(newRow);
  }

  return rotatedGrid;
}

module.exports = rotateGrid;
