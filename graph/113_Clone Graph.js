/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const oldToNew = new Map();
    return bfs(node, oldToNew);
};

const bfs = (node, oldToNew) => {
    if(node === null) return null;

    const queue = [];
    const copy = new Node(node.val);
    oldToNew.set(node, copy)
    queue.push(node);

    while(queue.length > 0) {
        const cur = queue.shift();
        const curCopy = oldToNew.get(cur);

        for(const n of cur.neighbors) {
            if(!oldToNew.has(n)) {
                const newCopy = new Node(n.val);
                oldToNew.set(n, newCopy);
                queue.push(n);
            }
            curCopy.neighbors.push(oldToNew.get(n));
        }
    }

    return copy;
}

const dfs = (node, oldToNew) => {
    if(node === null) {
        return null;
    }

    if(oldToNew.has(node)) {
        return oldToNew.get(node);
    }

    const copy = new Node(node.val);
    oldToNew.set(node, copy);

    for(const n of node.neighbors) {
        copy.neighbors.push(this.dfs(n, oldToNew));
    }

    return copy;
}