class TrieNode {
    constructor() {
        this.children  = new Array(26);
        this.isEnd = false;
    }
}

var Trie = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;

    for(const char of word) {
        let c = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if(!node.children[c]) {
            node.children[c] = new TrieNode();
        }
        node = node.children[c];
    }

    node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;

    for(const char of word) {
        let c = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if(!node.children[c]) {
            return false;
        }
        node = node.children[c];
    }

    return node.isEnd;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;

    for(const char of prefix) {
        let c = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if(!node.children[c]) {
            return false;
        }
        node = node.children[c];
    }

    return true;

};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */