class Queue{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        return this.items.length===0
    }
    isSize(){
        return this.items.length
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        this.items.shift()
    }
    reverse(){
        let arr=[]
        for(let i=this.items.length-1;i>=0;i--){
            arr.push(this.items[i])
            }
            return arr
    }
    display(){
        console.log(this.items)
    }
}
let que=new Queue()
console.log(que.isEmpty())
que.enqueue(10)
que.enqueue(100)
que.enqueue(20)
que.display()
// que.dequeue()
que.display()
console.log(que.reverse())