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
  const arr = [];

  function helper(node) {
    if (node.left) helper(node.left);
    arr.push(node.value);
    if(node.right) helper(node.right);
  }
  helper(tree);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i+1]) return false;
  }
  return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
