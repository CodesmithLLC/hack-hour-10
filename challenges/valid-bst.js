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

  let arr = [];
  arr.push(tree.value);

  function getNodes(tree) {

    while (tree.left != null && tree.right != null) {
      if (tree.left) {
        arr.unshift(tree.left.value);
        tree = tree.left;
        getNodes(tree.left);
      } else {
        arr.push(tree.right.value);
        tree = tree.right;
        getNodes(tree.right)
    }

    return getNodes(tree);
}


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
