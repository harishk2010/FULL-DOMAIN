class Hash{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    insert(key,value){
        let index=this.hash(key)
        if(!this.table[index]){
            this.table[index]=[[key,value]]
        }else{
            this.table[index].push([key,value])
        }
    }
    get(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket)return null
        else{
            let sameItem=bucket.find(e=>e[0]===key)
            if(sameItem){
                return sameItem[1]
            }
        }
    }
    remove(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let same=bucket.find(e=>e[0]===key)
            console.log(same)
            if(same){
                bucket.splice(bucket.indexOf(same),1)
            }
        }

    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,"==>",this.table[i])
            }
        }
    }
}

let hash=new Hash(10)
hash.insert("name","harish")
hash.insert("mane","harish111")
hash.insert("age",2)
console.log(hash.get("name"))
hash.display()
hash.remove("mane")
hash.display()