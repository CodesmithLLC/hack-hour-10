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
  if (tree.left === null || tree.right === null) return tree
  if (tree.left.value < tree.right.value) return false
  if (tree.left.value <= tree.value) return false
  validBST(tree.left), validBST(tree.right)

  return true;
}

const tree = new BinaryTree(2)
tree.left = new BinaryTree(3)
tree.right = new BinaryTree(5)
tree.left.right = new BinaryTree(6)
tree.left.right = new BinaryTree(7)
tree.right.left = new BinaryTree(8)
tree.right.right = new BinaryTree(9)


console.log(validBST(tree))
module.exports = {BinaryTree: BinaryTree, validBST: validBST};
