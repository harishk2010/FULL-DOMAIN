function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let pointer=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[pointer]){
                pointer=j
            }
        }
        
        [arr[pointer],arr[i]]=[arr[i],arr[pointer]]
    }
    return arr
   
}
let arr=[2,1,-1,-9,10,5,3,7,8]
console.log(selectionSort(arr))