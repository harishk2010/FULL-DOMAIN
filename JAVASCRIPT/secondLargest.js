function secondLarge(arr){
    let max=-Infinity
    let secondMax=-Infinity
    for(let elem of arr){
        if(elem>max){
            secondMax=max
            max=elem
        }else if(elem>secondMax && elem!==max){
            secondMax=elem
        }
    }
    return secondMax
}

console.log(secondLarge([2,1,4,5,7,9,10,2,1]))

