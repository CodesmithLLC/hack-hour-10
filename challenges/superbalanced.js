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

const superbalanced = tree => {
  // need to return both a boolean + the length
  // so, you made 2x helper functions to do it

  const getLength = (node, length = 0) => {
    if (!node) return length;
    
    let left = getLength(node.left, length + 1);
    let right = getLength(node.right, length + 1);
    
    return Math.max(left, right);
  }

  const checkBalance = (node) => {
    if (Math.abs(getLength(node.left) - getLength(node.right)) > 1) {
      return false;
    } else {
      return true
    }
    return checkBalance(node.left) && checkBalance(node.right);
  }

  return checkBalance(tree);
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
