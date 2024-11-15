class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Queue{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    sizeOf(){
        return this.size
    }
    enqueue(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }else if(this.sizeOf()===1){
            this.head=null
        }else{
            this.head=this.head.next
        }
        this.size--
    }

    print(){
        let res=''
        let curr=this.head
        while(curr){
            res+=`${curr.value} `
            curr=curr.next
        }
        console.log(res)
    }
    peek(){
        return this.head.value
    }
}

let que=new Queue()
que.enqueue(1)
que.enqueue(4)
que.enqueue(6)
que.enqueue(64)
que.print()
que.dequeue()
que.dequeue()
que.print()
console.log(que.peek())