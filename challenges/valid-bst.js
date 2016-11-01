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

    inOrderTraverseTree(tree, checkTree);

    function inOrderTraverseTree (tree, checkTree) {
        if (tree !== null) {
            inOrderTraverseTree(tree.left, checkTree);
            checkTree(tree.key);
            inOrderTraverseTree(tree.right, checkTree);
        }
        return true;
    };

    function checkTree(value) {
      if (tree.left.value > tree.right.value) {
        return false;
      }
    }

}

// let tree = new BinaryTree(10);
// tree.left = new BinaryTree(6);
// tree.right = new BinaryTree(9);
// tree.left.left = new BinaryTree(4);
// tree.right.right = new BinaryTree(7);
// console.log(tree);

// console.log(validBST(tree));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
