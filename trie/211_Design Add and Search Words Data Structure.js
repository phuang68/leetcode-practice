
class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }
}

var WordDictionary = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;

    for(const char of word) {
        let c = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if(node.children[c] === null) {
            node.children[c] = new TrieNode();
        }
        node = node.children[c];
    }

    node.isEnd = true;
};

const searchHelper = (word, start, root) => {
    let node = root;

    for(let i = start; i < word.length; i++) {
        if(word.charAt(i) === '.') {
            for(const child of node.children) {
                if(child !== null && searchHelper(word, i + 1, child)) {
                    return true;
                }
            }
            return false;
        } else {
            let c = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if(!node.children[c]) {
                return false;
            }
            node = node.children[c];
        }
    }

    return node.isEnd;
}

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return searchHelper(word, 0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */