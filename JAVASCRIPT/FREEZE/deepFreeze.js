let person = {
    name: "anbu",
    age: 10,
    address: {
        street: "periyar street",
        loaction: "pataravakkam",
        school: {
            name: 'mary angel',
            location: "ambatur"
        }
    }
}

function deepFreeze(obj) {
    let queue = []
    queue.push(obj)
    while (queue.length > 0) {
        let ob = Object.freeze(queue.pop())
        // console.log(queue)
        for (let key in ob) {
            // console.log(ob[key])
            if (typeof ob[key] === 'object' && ob[key] !== null) {
                console.log(ob[key])
                queue.push(ob[key])
            }
        }
    }
    return obj

}
let ab = deepFreeze(person)
console.log(Object.isFrozen(ab.address.school))