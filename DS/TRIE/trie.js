class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    insert(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }
    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord
    }
    startsWith(prefix) {
        let node = this.root
        for (let char of prefix) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return true
    }
    _findNode(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return null
            }
            node=node.children[char]
        }
        return node
    }
    autocomplete(prefix){
        let result=[]
        let prefixNode=this._findNode(prefix)
        if(!prefixNode){
            return result
        }

        let dfs=(node,currendWord)=>{
            if(node.isEndOfWord){
                result.push(currendWord)
            }
            for(let char in node.children){
                dfs(node.children[char],currendWord+char)
            }
        }
        dfs(prefixNode,prefix)
        return result
    }
}

let Triee = new Trie()
Triee.insert("harish")
Triee.insert("harishini")
Triee.insert("harini")
Triee.insert("harsha")
console.log(Triee.search("haris"))
console.log(Triee.startsWith("har"))
console.log(Triee.autocomplete("harish"))