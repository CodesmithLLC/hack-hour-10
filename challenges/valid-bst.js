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
  function bst(tree, min, max) {
    if (tree === null) return true;
    if (tree.value > min && tree.value < max
      && bst(tree.left, min, tree.value)
      && bst(tree.right, tree.value, max))
      return true;
    return false;
  }
  return bst(tree, -Infinity, Infinity);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
