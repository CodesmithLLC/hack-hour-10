/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  let left = 0, right = 0;
  if (tree.left === null && tree.right === null) return true;
  if (tree.left) {
    left += 1;
    superbalanced(tree.left);
  }
  if (tree.right) {
    right += 1;
    superbalanced(tree.right);
  }
  if (right + 1 === left || left === right) return true;
  return false;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
