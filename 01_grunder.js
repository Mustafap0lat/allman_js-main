// Hello World
console.log("Hello World!");

// Variabel
let firstname = "Gunnar";
console.log(firstname);
console.log(typeof firstname)

// Lista
const nameList = ["Alice", "Bob", "Charlie", 1, true, undefined];
console.log(nameList)
console.log("Length:", nameList.length)
console.log("Element index 3:", nameList[3])

// Objekt
const person = { name: "Gunnar", age: 15 };
console.log(person, person.name, person["age"])

// Funktioner
const sum = function (x, y) {
    return x + y;
}

// Funktionsanrop
console.log(
    sum(5, 5)
)

// Truthy
if ("Tecken" && "Mer Tecken") {
    console.log(true)
} else {
    console.log(false)
}

console.log(
    (10 > 2) ? "Sant" : "Falskt"
)

console.log(
    ("" || false)
)