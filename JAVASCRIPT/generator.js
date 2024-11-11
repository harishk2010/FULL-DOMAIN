function* multiplesOfFive(){
    let num=0

    while(true){
        yield num+=5
    }
}
const generator=multiplesOfFive()
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)

// function*: Declares a generator function that can yield multiple values one at a time.
// yield: Pauses the function and returns the current value.
// Infinite sequence: Since while (true) runs indefinitely, the generator will produce an endless sequence of multiples of 5.
// Increment: The num variable starts at 0 and is incremented by 5 after each yield.