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

function validBST(tree, topVal) {
    return (!tree.left || (tree.left.value <= tree.value && tree.left.value <= topVal ? topVal : tree.value && validBST(tree.left, topVal ? topVal : tree.value))) && (!tree.right || (tree.right.value > tree.value && tree.right.value > topVal ? topVal : tree.value && validBST(tree.right, topVal ? topVal : tree.value)))
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
