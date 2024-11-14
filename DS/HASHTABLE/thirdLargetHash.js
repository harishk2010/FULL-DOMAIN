class Hash {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)

        }
        return total % this.size
    }
    insert(key, value) {
        let index = this.hash(key)
        if (!this.table[index]) {
            this.table[index] = [key, value]
        } else {
            this.table[index][1] = value
        }
    }
    get(key) {

        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket) return null;

        if (bucket[0] === key) {
            return bucket[1];
        }
        return null;
    }
    // thirdLarget(){
    //     let firstLargest=-Infinity
    //     let secondLargest=-Infinity
    //     let thirdLargest=-Infinity
    //     for(let i=0;i<this.table.length;i++){
    //         let value=this.table[i]
    //         if(value>firstLargest){
    //             secondLargest=firstLargest
    //             firstLargest=value
    //         }else if(value>secondLargest && value!==firstLargest){
    //             thirdLargest=secondLargest
    //             thirdLargest=value
    //         }else if(value>thirdLargest && value!=secondLargest){
    //             thirdLargest=value
    //             occuranceKey=this.table[i]
    //         }
    //     }
    // }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, "===>", this.table[i])
            }
        }
    }
}
let str = 'abinbabuanuasaanu'


const freq = (str) => {

    let obj
    let hash = new Hash(26)
    for (let i = 0; i < str.length; i++) {
        let count = hash.get(str[i]) || 0
        hash.insert(str[i], count + 1)
    }
    let firstLargest = -Infinity
    let secondLargest = -Infinity
    let thirdLargest = -Infinity
    let theThirdKey = ''

    for (let i = 0; i < hash.table.length; i++) {
        let bucket = hash.table[i]
        console.log(bucket)
        if (bucket) {
            let value = bucket[1]
            if (value > firstLargest) {
                secondLargest = firstLargest
                firstLargest = value
            } else if (value > secondLargest && value !== firstLargest) {
                thirdLargest = secondLargest
                secondLargest = value
            } else if (value > thirdLargest && value !== secondLargest) {
                thirdLargest = value
                theThirdKey = bucket[0]
            }
        }

    }
    hash.display()
    return theThirdKey

}
console.log(freq(str))