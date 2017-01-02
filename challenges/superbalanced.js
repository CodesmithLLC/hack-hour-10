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
  function height(tree) {
    if (!tree.left && !tree.right) return 0;
    if (tree.left && tree.right)
      return Math.max(height(tree.left), height(tree.right)) + 1;
    if (tree.left)
      return height(tree.left);
    if (tree.right)
      return height(tree.right);
  }
  function heightbalanced(tree) {
    return Math.abs(height(tree.left) - height(tree.right)) <= 1;
  }
  function bst(tree, min, max) {
    if (tree === null) return true;
    if (tree.value > min && tree.value < max
      && bst(tree.left, min, tree.value)
      && bst(tree.right, tree.value, max))
      return true;
    return false;
  }
  return bst(tree, -Infinity, Infinity) && heightbalanced(tree);
}

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
