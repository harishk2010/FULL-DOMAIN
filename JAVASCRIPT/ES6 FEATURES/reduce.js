let arr=[1,-2,5,8,-2,-5,-10,2,4,8,9]
let sum=arr.reduce((acc,curr)=>{
    if(curr>0){
        acc+=curr
    }
    return acc
},0)
console.log(sum)