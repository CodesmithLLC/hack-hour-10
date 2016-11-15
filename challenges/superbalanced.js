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
// helper function to get max depth
  function getDepth(node) {
    if (node === null) {
      return 0;
    }
    return 1 + Math.max(getDepth(node.left), getDepth(node.right));
  }

// helper function to get min depth
  function getMinDepth(node) {
    if (node === null) {
      return 0;
    }
    return 1 + Math.min(getMinDepth(node.left), getMinDepth(node.right));
  }

// get minDepth and maxDepth using helper functions
  const minDepth = getMinDepth(tree);
  const maxDepth = getDepth(tree);

// if the max depth is more than 1 greater than the min depth, return false
  if (maxDepth - minDepth > 1) {
    return false;
  }
  return true;
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced};
