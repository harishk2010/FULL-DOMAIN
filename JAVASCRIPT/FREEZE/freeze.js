let person = {
    name: "anbu",
    age: 10,
    address: {
        street: "periyar street",
        loaction: "pataravakkam"
    }
}
Object.freeze(person)
console.log(person)
person.name = "sombu" //cant be modified
person.hobby = "eating" //cant add new fields
person.address.street = "ambedkar street" // but nested objects can be modified
person.address.pincode = 6000087 // but nested objects can be modified
console.log(person)