class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function sumRootToLeaf(root) {
    if (!root) return 0;
    let sum = 0;
    function dfs(node, pathSum) {
        if (!node) return;
        pathSum = pathSum * 10 + node.val;
        if (!node.left && !node.right) {
            sum += pathSum;
        }
        dfs(node.left, pathSum);
        dfs(node.right, pathSum);
    }
    dfs(root, 0);
    return sum;
}
```

Kodni ishlatish uchun misol:

```javascript
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(sumRootToLeaf(root)); // 30238
