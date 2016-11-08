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

function validBST(tree, topVal, limitDir) {
    if (topVal === undefined) topVal = tree.value;
    if (limitDir === "left" && tree.left.value > topVal) return false;
    if (limitDir === "right" && tree.right.value < topVal) return false;
    return (!tree.left || (tree.left.value < tree.value && validBST(tree.left, topVal, limitDir || "left"))) && (!tree.right || (tree.right.value > tree.value && validBST(tree.right, topVal, limitDir || "right")))
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
