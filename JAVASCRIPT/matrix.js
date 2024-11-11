let arr = [[1, 2, 3]
    , [4, 5, 6]
    , [7, 8, 9]]

// Output: [[7, 4, 1]
// [8, 5, 2]
// [9, 6, 3]]
function change(arr) {
    console.log(`${arr[0]}\n${arr[1]}\n${arr[2]}\n`)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]]
        }
        arr[i] = arr[i].reverse()
    }
    return `${arr[0]}\n${arr[1]}\n${arr[2]}`

}
console.log(change(arr))
