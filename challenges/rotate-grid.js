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
    for (let x = 0; x < Math.floor(n / 2); x++) {
        for (let y = x; y < n - x; y++) {
            let tempUR = grid[y][n - x - 1];
            let tempDR = grid[n - x - 1][n - y - 1];
            let tempDL = grid[n - y - 1][x];
            let tempUL = grid[x][y];
            let temp = grid[y][n - x - 1];
            grid[y][n - x - 1] = grid[x][y];
            grid[x][y] = grid[n - y - 1][x];
            grid[n - y - 1][x] = grid[n - x - 1][n - y - 1];
            grid[n - x - 1][n - y - 1] = temp;
        }
    }
    return grid;
}

module.exports = rotateGrid;

console.log(rotateGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3))