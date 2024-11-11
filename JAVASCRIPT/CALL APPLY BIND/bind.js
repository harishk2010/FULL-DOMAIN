function greet(msg) {
    console.log(`Hello ${msg}, im ${this.name} , my age is ${this.age} `)
}

let person = {
    name: 'John',
    age: 30
}
let bind = greet.bind(person, ["GOOD NIGHT"])
bind()