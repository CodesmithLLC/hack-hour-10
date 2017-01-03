/**
 * Given a binary tree, return if it is super balanced.
 * Constraints:
 * 1) Difference in heights of left and right trees <= 1
 * 2) Left and right subtrees are also balanced
 *
 * @param {BinaryTree} tree
 * @return {boolean}
 */
function superbalanced(tree) {
  return heightbalanced(tree) && heightbalanced(tree.left) && heightbalanced(tree.right)
}

function treeHeight(tree) {
  if (!tree) return 0
  return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right))
}

function heightbalanced(tree) {
  return Math.abs(treeHeight(tree.left) - treeHeight(tree.right)) <= 1
}

function BinaryTree(value) {
  this.value = value
  this.left = null
  this.right = null
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced }
