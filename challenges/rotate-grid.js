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
<<<<<<< HEAD
  var nu = [];
  for (var i = 0; i < n; i++) {
    nu.push([]);
  }
  grid.forEach(row => { 

    for (var i = 0; i < row.length; i++) {
      if (!nu[i]) nu[i].push(row[i])
      else nu[i].unshift(row[i])
    }
  })
  return nu;
}

module.exports = rotateGrid;
//console.log(rotateGrid([[1,2,3, 'b'], [4,5,6, 'a'], [7,8,9, 'n']], 4))
//Contact GitHub API Training Shop Blog About
=======

}

module.exports = rotateGrid;
>>>>>>> 1fc71476c68176665849c71dab3cf9ea5913440d
