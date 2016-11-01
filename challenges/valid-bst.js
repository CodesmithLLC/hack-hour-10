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
  //base case true
    if (tree.left === null && tree.right === null) return true;
  //base case false
    if (tree.left.value > tree.value || tree.right.value <= tree.value) return false;
  //recursive call on either side of the tree
    return validBST(tree.left || tree.right)
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };