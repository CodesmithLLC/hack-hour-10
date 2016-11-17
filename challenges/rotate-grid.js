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
	let board = [];
	for (let i = 0; i < n; i++) {
		board.push([]);
	}
	for(let i = 0; i < n; i++) {
		for (let j=0; j < n; j++) {
			board[i][j] = grid[j][i];
		}
	}

	return board;
}

module.exports = rotateGrid;


let sampleGrid = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

console.log(rotateGrid(sampleGrid, 3));

function rotateGrid(grid, n) {
	let newGrid = [];

}



var grid = [
  [0,0], [0,1], [0,2], [0,3],
  [1,0], [1,1], [1,2], [1,3],
  [2,0], [2,1], [2,2], [2,3],
  [3,0], [3,1], [3,2], [3,3]
];

var newGrid = [];
var rowLength = Math.sqrt(grid.length);
newGrid.length = grid.length

for (var i = 0; i < grid.length; i++)
{
    //convert to x/y
    var x = i % rowLength;
    var y = Math.floor(i / rowLength);

    //find new x/y
    var newX = rowLength - y - 1;
    var newY = x;

    //convert back to index
    var newPosition = newY * rowLength + newX;
    newGrid[newPosition] = grid[i];
}

for (var i = 0; i < newGrid.length; i++)
{
    console.log(newGrid[i])
}
