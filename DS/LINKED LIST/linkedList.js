class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }

}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    sizeOf() {
        return this.size
    }
    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }
    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value == value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }
    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    convert(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.append(arr[i])

        }

    }
    removeFromStart() {
        if (this.size === 1) {
            this.head = null
        } else {
            this.head = this.head.next
        }
        this.size--
    }
    removeFromEnd() {
        let rem
        if (this.size == 1) {
            this.head = null
        } else {
            
            let curr = this.head
            while (curr.next.next) {
                curr = curr.next
            }
            rem=curr.next
            curr.next = null
        }
        this.size--
        return rem.value
    }
    reverse(){
        let prev=null
        let curr=this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
        
    }
    duplicate(){
        let arr=new Set()
        let duplicate=new Set()
        let curr=this.head
        while(curr){
            if(!arr.has(curr.value)){
                arr.add(curr.value)
            }else{
                duplicate.add(curr.value)
            }
            curr=curr.next
        }
        return [...duplicate]
    }
    removeDuplicate(){
        let arr=new Set()
        let duplicate=new Set()
        let curr=this.head
        while(curr){
            if(!arr.has(curr.value)){
                arr.add(curr.value)
            }else{
                duplicate.add(curr.value)
            }
            curr=curr.next
        }
        // curr=this.head
        let dummy = { next: this.head }; // Temporary dummy node to handle head removal
    curr = dummy;
        while(curr.next){
            if(duplicate.has(curr.next.value)){
                curr.next=curr.next.next
            }else{

                curr=curr.next
            }
        }
        this.head=dummy.next

    }
    unique(){
        let arr=new Set()
        let dummy={next:this.head}
        let curr=dummy
        while(curr.next){
         
            if(!arr.has(curr.next.value)){
                arr.add(curr.next.value)
                curr=curr.next
            }else{
                curr.next=curr.next.next
            }
           

        }
        this.head=dummy.next
       

    }
    print() {
        let list = ""
        let curr = this.head
        while (curr) {
            list += `${curr.value} `
            curr = curr.next
        }
        console.log(list)
        return list
    }
}
let arr = [11, 22, 33, 44,11]
let list = new LinkedList()
list.append(1)
list.append(12)
list.append(123)
list.prepend(321)
list.prepend(321)
list.prepend(21)
list.prepend(21)
list.print()
list.convert(arr)
list.print()
// console.log(list.sizeOf())
console.log(list.search(321))
// list.removeFromStart()
list.print()
// console.log(list.sizeOf())
// list.removeFromEnd()
// console.log(list.sizeOf())
// list.removeFromEnd()
console.log(list.sizeOf())
list.print()
// console.log(list.duplicate())
// list.removeDuplicate()
list.unique()
list.print()
list.reverse()
list.print()

let str="MALAYALAM"
function palindrome(str){
    let list=new LinkedList()
    for(let i=0;i<str.length;i++){
        list.append(str[i])
    }
    let normal=list.print()
    list.reverse()
    let rev=list.print()
    return normal===rev
    
}
console.log(palindrome(str))
list.print()