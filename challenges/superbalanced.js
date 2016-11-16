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
  let right = 0;
  let left = 0;
  function subBalanced(tree, sub, depth = 0) {
    depth++;
    if (sub == 'left' && depth > left) left = depth;
    if (sub == 'right' && depth > right) right = depth;
    if (tree.left) subBalanced(tree.left, sub, depth);
    if (tree.right) subBalanced(tree.right, sub, depth);
  }

  if (tree.right) subBalanced(tree.right, 'right');
  if (tree.left) subBalanced(tree.left, 'left');
  if (Math.abs(right - left > 1)) return false;
  if (tree.right && tree.left) return true && superbalanced(tree.right) && superbalanced(tree.left);
  if (tree.right) return true && superbalanced(tree.right);
  if (tree.left) return true && superbalanced(tree.left);
  return true;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
