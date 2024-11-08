// function powerOfTwo(n){
//     while(n%2===0){
//         n=n/2
//     }
//    return n===1
// }
function powerOfTwo(n){
    if(n & n-1)return false
    return true
}
let a=8
console.log(powerOfTwo(a))