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
  const ordered = [];
  inOrderTraversal(tree);
  return ordered.every((elem, i, arr) => {
    if (i === 0) return true;
    else if (elem < arr[i - 1]) return false;
    else return true;
  });

  function inOrderTraversal(root) {
    if (root.left !== null) {
      inOrderTraversal(root.left);
    }
    ordered.push(root.value);
    if (root.right !== null) {
      inOrderTraversal(root.right);
    }
  }
}

// let tr = new BinaryTree(5);
// tr.left = new BinaryTree(3);
// tr.left.left = new BinaryTree(2);
// tr.left.right = new BinaryTree(4);
// tr.right = new BinaryTree(9);
// tr.right.left = new BinaryTree(8);
// tr.right.right = new BinaryTree(10);

// console.log(validBST(tr));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
