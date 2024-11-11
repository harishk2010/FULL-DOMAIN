let obj={
    a:1,
    b:2,
    c:3
}
let arr=Object.entries(obj).sort((a,b)=>b[1]-a[1])

console.log(arr[0][0])