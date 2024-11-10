class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}

class LinkedList{
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
    append(value){
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
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0
        let curr=this.head
        while(curr){
            if(curr.value==value){
                return i
            }
            curr=curr.next
            i++
        }
        return -1
    }
    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    convert(arr){
        for(let i=0;i<arr.length;i++){
            this.append(arr[i])
            
        }
       
    }
    removeFromStart(){
        if(this.size===1){
            this.head=null
        }else{
            this.head=this.head.next
        }
        this.size--
    }
    removeFromEnd(){
        if(this.size==1){
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
        let list=""
        let curr=this.head
        while(curr){
            list+=`${curr.value} `
            curr=curr.next
        }
        console.log(list)
    }
}
let arr=[11,22,33,44]
let list=new LinkedList()
list.append(1)
list.append(12)
list.append(123)
list.prepend(321)
list.prepend(21)
list.print()
list.convert(arr)
list.print()
// console.log(list.sizeOf())
console.log(list.search(321))
list.removeFromStart()
list.print()
// console.log(list.sizeOf())
list.removeFromEnd()
// console.log(list.sizeOf())
list.removeFromEnd()
// console.log(list.sizeOf())
list.print()