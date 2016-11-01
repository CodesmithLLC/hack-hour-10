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

function validBST(tree, cur = Infinity) {
    if (this.left && this.left.value > cur) return false;
    if (this.right && this.right.value < cur) return false;
    if (this.left && this.right) return validBST(this.left, this.left.value) && validBST(this.right, this.right.value);
    if (this.left) return validBST(this.left, this.left.value);
    if (this.right) return validBST(this.right, this.right.value);
    return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
