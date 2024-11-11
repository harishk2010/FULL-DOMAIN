function greet(msg) {
    console.log(`hello goodmorning ,${msg} , im ${this.name}`)
}

let person = {
    name: "john",
    age: 25
}

greet.call(person, "GOD")