class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        for(let key in this.adjacencyList){
            if(this.adjacencyList[key].has(vertex)){
                this.removeEdge(key,vertex)
            }
        }
        delete this.adjacencyList[vertex]
    }
    display(){
        for(let key in this.adjacencyList){
            console.log(key," ===> ",[...this.adjacencyList[key]])
        }
    }
    bfs(start){
        let queue=[start]
        let visited=new Set()
        let result=[]
        visited.add(start)
        while(queue.length>0){
            let vertex=queue.shift()
            result.push(vertex);
            for(let neigh of this.adjacencyList[vertex]){
                if(!visited.has(neigh)){
                    visited.add(neigh)
                    queue.push(neigh)
                }
            }
        }
       
        return result
        
    }
}
let graph=new Graph()
graph.addEdge("A" ,"B")
graph.addEdge("C" ,"B")
// graph.removeVertex("A")
graph.display()
console.log(graph.bfs("A"))
// story
// stack
// why
// feature
// challegers
// future