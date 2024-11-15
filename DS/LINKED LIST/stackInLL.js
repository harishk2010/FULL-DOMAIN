

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Stack{
    constructor(){
        this.root=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    sizeOf(){
        return this.size
    }
    peek(){
        return this.head.value
    }
    push(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    pop(){
        if(this.sizeOf()===1){
            this.head=null
        }else{
            let curr=this.head
            while(curr.next.next){
                curr=curr.next
            }
            curr.next=null
        }
        this.size--
    }
    print(){
        let out=""
        let curr=this.head
        while(curr){
            out+=curr.value+" "
            curr=curr.next

        }
        console.log(out)
    }
}

let stack=new Stack()
stack.push(1)
stack.push(4)
stack.push(40)
stack.push(0)
stack.print()
stack.pop()
stack.pop()
console.log(stack.peek())
stack.print()