let person = {
    name: "anbu",
    age: 10,
    address: {
        street: "periyar street",
        loaction: "pataravakkam"
    }
}

Object.seal(person)
console.log(person)
person.name = "sombu"   // properties can be modified
person.hobby = "eating" // but new properties can't be added
console.log(person)
