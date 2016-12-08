/**
 * Given a tree, return if the tree is a valid BST.
 * Constraints:
 * 1) Value of all nodes in left tree must be < value.
 * 2) Value of all nodes in right tree must be > value.
 *
 * O(n) time and O(1) space
 *
 * @param {BinaryTree} tree
 * @return {boolean}
 */
function validBST(tree) {
  function validate(tree, min, max) {
    if (!tree) return true;
    if (tree.value > min && tree.value < max
      && validate(tree.left, min, tree.value)
      && validate(tree.right, tree.value, max))
      return true;
    return false;
  }
  return validate(tree, -Infinity, Infinity);
}

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
