class Stack{
    constructor(){
        this.item=[]
    }

    isEmpty(){
        return this.item.length===0
    }
    isSize(){
        return this.item.length
    }
    push(item){
        this.item.push(item)
    }
    pop(){
        this.item.pop()
    }
    peak(){
        console.log(this.item[this.item.length-1])
    }
    display(){
        console.log(this.item)
    }
}

let stack=new Stack()
stack.push(10)
stack.push(70)
stack.push(90)
stack.push(0)
stack.push(20)
stack.display()
stack.pop()
stack.display()
stack.peak()