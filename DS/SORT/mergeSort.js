function merge(arr) {
    if (arr.length < 2) return arr
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return mergeSort(merge(left), merge(right))
}
function mergeSort(left, right) {
    let out = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) out.push(left.shift())
        else out.push(right.shift())
    }
    return [...out, ...left, ...right]
}

let arr = [2, 1, -1, -9, 10, 5, 3, 7, 8]
console.log(merge(arr))