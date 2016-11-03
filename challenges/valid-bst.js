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
  function checkTree(node, min, max) {
    if (node === null) return true;
    if (node.value >= min
      && node.value < max
      && checkTree(node.left, min, node.value)
      && checkTree(node.right, node.value, max)) return true;
    else return false
  }

  return checkTree(tree, -Infinity, Infinity);

  // if (tree.left === null && tree.right === null) return tree.value;

  // if (tree.value >= validBST(tree.left) && tree.value < validBST(tree.right)) return true;
  // else return false;
}

let bst = new BinaryTree(5);
bst.left = new BinaryTree(5);
bst.right = new BinaryTree(6);
bst.left.left = new BinaryTree(4);
bst.left.right = new BinaryTree
console.log(validBST(bst));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
