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
    if (this.left !== null && (this.left.value > this.value || this.left.value > history)) return false;
    if (this.right !== null && (this.right.value <= this.value || this.right.value > history)) return false;
    if (this.left && this.right) {
        return history ? validBST(this.left, history) && validBST(this.right, history) : validBST(this.left, this.value) && validBST(this.right);
    };
    if (this.left) return history ? validBST(this.left, history) : validBST(this.left, this.value);
    if (this.right) return history ? validBST(this.right, history) : validBST(this.right);
    return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
