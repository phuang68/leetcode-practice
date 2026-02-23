class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let node = this.root;

        for(const c of word) {
            if(!node.children[c]) {
                node.children[c] = new TrieNode();
            }
            node = node.children[c];
        }

        node.isEnd = true;
    }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const res = new Set();
    const ROWS = board.length;
    const COLS = board[0].length;
    const visited = new Set();
    const trie = new Trie();
    // Build Trie
    for(const word of words) {
        trie.addWord(word);
    }
    // Backtracking method with visited
    const dfs = (r, c, word, node) => {
        if(r >= ROWS || c >= COLS || r < 0 || c < 0 || visited.has(`${r}+${c}`) || !(board[r][c] in node.children)) {
            return;
        }


        visited.add(`${r}+${c}`);

        let char = board[r][c];
        word += char;
        let cur = node.children[char];
        if(cur.isEnd) {
            res.add(word);
        }

        // iterate in all directions for next
        dfs(r + 1, c, word, cur);
        dfs(r, c + 1, word, cur);
        dfs(r - 1, c, word, cur);
        dfs(r, c - 1, word, cur);

        visited.delete(`${r}+${c}`);
    }

    // Every character can be a starting point
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            dfs(i, j, '', trie.root)
        }
    }

    return Array.from(res);
};