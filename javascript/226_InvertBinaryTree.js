/**
 * Date: 16/5/1.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (null === root) {
        return null;
    }
    var tmp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmp);

    return root;
};