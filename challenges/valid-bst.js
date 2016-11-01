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
  if(tree === null) { return true; }
  const validLeftVal = tree.left ? tree.left.value <= tree.value : true;
  const validRightVal = tree.right ? tree.right.value > tree.value : true;
  if (!validLeftVal || !validRightVal) {
     return false;
  }
  return validBST(tree.left) && validBST(tree.right);
}

// const node_1 = new BinaryTree(10);
// const node_2 = new BinaryTree(8);
// const node_3 = new BinaryTree(7);
// const node_4 = new BinaryTree(9);
// const node_5 = new BinaryTree(11);
// const node_6_Err = new BinaryTree(1);
// node_1.left = node_2;
// node_2.left = node_3;
// node_2.right = node_4;
// node_1.right = node_5;
// node_5.right = node_6_Err;

// console.log(validBST(node_1));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
