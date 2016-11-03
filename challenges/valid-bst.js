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

function validBST(tree, history) {
    if (tree.left !== null) {if (tree.left.value > tree.value || tree.left.value > history) return false}
    if (tree.right !== null) {if (tree.right.value <= tree.value || tree.right.value > history) return false}
    if (tree.left && tree.right) {
        return history ? validBST(tree.left, history) && validBST(tree.right, history) : validBST(tree.left, tree.value) && validBST(tree.right);
    }
    if (tree.left) return history ? validBST(tree.left, history) : validBST(tree.left, tree.value);
    if (tree.right) return history ? validBST(tree.right, history) : validBST(tree.right);
    return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
