const list = [1, 6, 136, 123];

for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}

// for of, -> 1, 6, 136, 123
console.log("For of")
for (let x of list) {
    console.log(x)
}

// for in, -> 0, 1, 2, 3
console.log("For in array")
for (let x in list) {
    console.log(x)
}

const person = { firstname: "Gunnar", age: 26 }

// for of non-iterable, doesn't work
//console.log("for of in object")
//for (let x of person) {
//    console.log(x)
//}

// for in in non-iterable, -> firstname, age
for (let x in person) {
    console.log(x, person[x])
}

//console.log(person.firstname)
const { firstname: fname, age } = person;
console.log(fname, age)

// Named function
function add(x, y) {
    return x + y;
}

console.log(
    add(5, 2)
)

const add2 = function (x, y) {
    return x + y;
}

console.log(
    add2(5, 10)
)

const add3 = (x, y) => x + y;

console.log(
    add3(20, 20)
)

const add4 = (x, y) => {
    console.log("I'm adding")
    return x + y;
}

// Spread
const numberslist = [1, 65, 2];
// no spreading
console.log(numberslist)
// spread operator
console.log(...numberslist)

// Rest
const myFunc = (firstArg, ...restOfArguments) =>
    console.log(firstArg, restOfArguments)

myFunc(1, 2, 3, 4, 5, 6)

// Callback-funktion
const someFunc = (val, callback) => callback(val)

const callback = (val) => console.log("Hej " + val)
someFunc("Mats", callback)