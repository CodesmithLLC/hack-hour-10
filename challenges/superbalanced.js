/**
 * Given a binary tree, return if it is super balanced.
 * Constraints:
 * 1) Difference in heights of left and right trees <= 1
 */
function superbalanced(tree) {

}

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
