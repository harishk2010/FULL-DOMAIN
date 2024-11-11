class MaxHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }
    getLeftChildIndex(i) {
        return 2 * i + 1
    }
    getRightChildIndex(i) {
        return 2 * i + 2
    }
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    insert(value) {
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp() {
        let index = this.heap.length - 1
        while (index > 0 && this.heap[index] > this.heap[this.getParentIndex(index)]) {
            this.swap(index, this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }
    remove() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) this.heap.pop()

        this.heap[0] = this.heap.pop()
        this.heapifyDown()


    }
    heapifyDown() {
        let index = 0
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let greaterIndex = this.getLeftChildIndex(index)
            if (this.heap.length > this.getRightChildIndex(index) && this.heap[greaterIndex] < this.heap[this.getRightChildIndex(index)]) {
                greaterIndex = this.getRightChildIndex(index)
            }
            if (this.heap[index] > this.heap[greaterIndex]) break
            this.swap(index, greaterIndex)
            index = greaterIndex
        }
    }
    display() {
        console.log(this.heap)
    }
}

let heap = new MaxHeap()
heap.insert(1)
heap.insert(10)
heap.insert(3)
heap.insert(36)
heap.display()
heap.insert(360)
heap.insert(30)
heap.display()
heap.remove()
heap.display()
