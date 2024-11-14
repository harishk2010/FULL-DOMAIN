let str='abinbabuanuasaanu'
let obj={}
for(let i=0 ;i<str.length;i++){
    if(!obj[str[i]]){
        obj[str[i]]=1
    }else{
        obj[str[i]]++
    }
}
let first=-Infinity
let second=-Infinity
let third=-Infinity
let thirdkey=''
console.log(obj)
for(let key in obj ){
    if(obj[key]>first){
        second=first
        first=obj[key]
    }else if(obj[key]>second && obj[key]!==first){
        third=second
        second=obj[key]
    }else if(obj[key]>third && obj[key]!==second){
        third=obj[key]
        thirdkey=key
    }
   
}
console.log(first,second,third,thirdkey)
