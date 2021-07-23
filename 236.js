function lowestCommonAncestor(root, p, q) {
    let parentNodeMap = {};
    let visited = {};
    function dsf(node) {
        if (node.left) {
            parentNodeMap[node.left.val] = node.val;
            dsf(node.left);
        }
        if (node.left) {
            parentNodeMap[node.right.val] = node.val;
            dsf(node.right);
        }
    }
    dsf(root);

    while (p !== undefined) {
        visited[parentNodeMap[p]] = p;
        p = parentNodeMap[p];
    }
    do {
        q = parentNodeMap[q];
    } while (visited[q] === undefined);
    return q;
};
const tree = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6
        },
        right: {
            val: 2,
            left: {
                val: 7
            },
            right: {
                val: 4
            }
        }
    },
    right: {
        val: 1,
        left: {
            val: 0
        },
        right: {
            val: 8
        }
    }
}
console.log(lowestCommonAncestor(tree, 8, 0));
// @lc code=end
// {
//  5:3,
//  6:5,
//  2:5,
//  7:2,
//  4:2,
//  1:3,
//  0:1,
//  8:1
// }
// {
//     2:7,
//     5:2,
//     3:5
// }
// {
//     0:1
//     1:3
// }
