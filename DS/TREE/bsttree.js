class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}

class Trees{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(root.value>node.value){
            if(!root.left){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            } 
        }else{
            if(!root.right){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    min(root){
        if(!root.left) return root.value
        else return this.min(root.left)
    }
    max(root){
        if(!root.right) return root.value
        else return this.max(root.right)
    }
    preOrder(root){
        if(!root)return null
        else{
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    depth(){
        if(!this.root) return 0
        else{
            let i=0
            let queue=[this.root]
            while(queue.length>0){
                
            }
        }
    }
}

let bst=new Trees()
bst.insert(8)
bst.insert(3)
bst.insert(1)
bst.insert(10)
bst.insert(11)
bst.preOrder(bst.root)
console.log(bst.max(bst.root))
