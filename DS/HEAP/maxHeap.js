class maxHeap{
    constructor(){
        this.heap=[]
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }
    getLeftChildIndex(i){
        return 2*i+1
    }
    getRightChildIndex(i){
        return 2*i+2
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let index=this.heap.length-1
        while(index>0 && this.heap[index]>this.heap[this.getParentIndex(index)]){
            this.swap(index,this.getParentIndex(index))
            index=this.getParentIndex(index)
        }
    }
    remove(){
        if(this.heap.length===0)return null
        if(this.heap.length===1) this.heap.pop()
            this.heap[0]=this.heap.pop()
        this.heapifyDown()
    }
    heapifyDown(){
        let index=0
        while(this.getLeftChildIndex(index)<this.heap.length){
            let largerIndex=this.getLeftChildIndex(index)
            if(this.getRightChildIndex(index)>this.heap.length && this.heap[largerIndex]<this.heap[this.getRightChildIndex(index)]){
                largerIndex=this.getRightChildIndex(index)
            }
            if(this.heap[index]>this.heap[largerIndex])break
            this.swap(index,largerIndex)
            index=largerIndex
        }
    }
    display(){
        console.log(this.heap)
    }
}

let max=new maxHeap()
max.insert(10)
max.insert(1)
max.insert(101)
max.insert(100)
max.display()
max.remove()
max.display()