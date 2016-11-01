/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */


function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  let min = tree.value;
  let max = tree.value;
  let leftCheck = tree;
  let rightCheck = tree;

  while (leftCheck) {
    if (leftCheck.value > min) {
      return false
    }
    leftCheck = leftCheck.left;
  }
  while (rightCheck) {
    if (rightCheck.value < max) {
      return false
    }
    rightCheck = rightCheck.right;
  }
  return true;
}

module.exports = {
  BinaryTree: BinaryTree,
  validBST: validBST
};
