let person = {
    name: "anbu",
    age: 10,
    // address: {
    //     street: "periyar street",
    //     loaction: "pataravakkam"
    // }
}
let copy1=person
// let copy=structuredClone(person)
let copy=JSON.parse(JSON.stringify(person))

console.log(copy===person)
console.log(copy1===person)