function greet(msg) {
    console.log(`Hello ${msg}, im ${this.name} , my age is ${this.age} `)
}
let person = {
    name: "John",
    age: 30
}

greet.apply(person, ["GOOD MORNING"])