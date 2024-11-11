let arr = [1, 2, 4, 1, 2, 6, 0, 6, 4, 5, 8, 2, 3, 5, 9, 7]
function rep(arr) {
    let unique = new Set()
    let repeated = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (repeated.has(arr[i])) {
            continue
        }
        if (!unique.has(arr[i])) {
            unique.add(arr[i])

        } else {
            if (arr[i] % 2 !== 0) {

                repeated.add(arr[i])
            }
            unique.delete(arr[i])

        }
    }
    console.log(unique)
    console.log(repeated)
}
rep(arr)