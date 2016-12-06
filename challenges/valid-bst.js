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

function validBST(root) {
  var stack = [root];

  while(stack.length !== 0) {
    var node = stack.pop();
    if (node.left) {
      stack.push(node.left);
      if (node.left.val > node.val) return false;
    }
    if (node.right) {
      stack.push(node.right);
      if (node.right.val < node.val) return false;
    }
  }
  return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

let tree = new BinaryTree(5);
let sam = new BinaryTree(3);
let michael = new BinaryTree(7);

tree.left = sam;
tree.right = michael;


console.log(validBST(tree));
