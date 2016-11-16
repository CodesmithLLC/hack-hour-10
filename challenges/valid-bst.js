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

function validBST(tree, leftRightHistory = Infinity, rightLeftHistory = -Infinity) {
    if (tree.left !== null) {if (tree.left.value > tree.value || tree.left.value > leftRightHistory || tree.left.value <= rightLeftHistory) return false}
    if (tree.right !== null) {if (tree.right.value <= tree.value || tree.right.value > leftRightHistory || tree.right.value < rightLeftHistory) return false}
    if (tree.left && tree.right) {
        if(isFinite(leftRightHistory)) {
            return isFinite(rightLeftHistory) ? validBST(tree.left, leftRightHistory, rightLeftHistory) && validBST(tree.right, leftRightHistory, rightLeftHistory) : validBST(tree.left, leftRightHistory, rightLeftHistory) && validBST(tree.right, leftRightHistory, tree.value);
        }
        else return isFinite(rightLeftHistory) ? validBST(tree.left, tree.value, rightLeftHistory) && validBST(tree.right, leftRightHistory, rightLeftHistory) : validBST(tree.left, tree.value, rightLeftHistory) && validBST(tree.right, leftRightHistory, tree.value) ;
    }
    if (tree.left) isFinite(leftRightHistory) ? validBST(tree.left, leftRightHistory, rightLeftHistory) : validBST(tree.left, tree.value, rightLeftHistory);
    if (tree.right) isFinite(leftRightHistory) ? validBST(tree.right, leftRightHistory, rightLeftHistory) : validBST(tree.right, leftRightHistory, tree.value);
    return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
