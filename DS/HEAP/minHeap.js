class minHeap{
    constructor(){
        this.heap=[]
    }
    getParentIndex(i){
        return Math.floor((i-1)/2)
    }
    getLeftChidlIndex(i){
        return 2*i+1
    }
    getRightChidlIndex(i){
        return 2*i+2
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    heapifyUp(){
        let index = this.heap.length - 1
        while(index>0 && this.heap[this.getParentIndex(index)]>this.heap[index] ){
            if( this.heap[this.getParentIndex(index)]>this.heap[index] ){
                this.swap(this.getParentIndex(index),index)
                index=this.getParentIndex(index)

            }
        }

    }
    remove(){
        if(this.heap.length===0)return 
        if(this.heap.length===1)this.heap.pop()

        this.heap[0]=this.heap.pop() 
        this.heapifyDown()


    }
    heapifyDown(){
        let index = 0
        while(this.getLeftChidlIndex(index) < this.heap.length){
            let smallerIndex=this.getLeftChidlIndex(index)
            if(this.heap[this.getRightChidlIndex(index)]>this.heap[smallerIndex] && this.getRightChidlIndex(index)>this.heap.length){
                smallerIndex=this.getRightChidlIndex(index)
            }

            if(this.heap[index] <this.heap[smallerIndex])break
            this.swap(index,smallerIndex)
            index=smallerIndex
            

        }
    }
    display(){
    console.log(this.heap)
    }

}

let heap=new minHeap()

heap.insert(80)
heap.insert(100)
heap.insert(20)
heap.insert(10)
heap.insert(5)
heap.display()
heap.remove()
heap.display()
