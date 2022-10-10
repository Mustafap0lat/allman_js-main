// Higher order functions, knutna till arrayer

const numbers = [6, 23, 634, 5315, 12, 5, 123]

// Filter - filtererar varje enskilt element utifrån ett predikat
const numbersAboveTen = numbers
    .filter(x => x > 10)

console.log("filtered list", numbersAboveTen)

// Map - transformerar varje enskilt element i listan
const mapped = numbers
    .map(x => `Talet ${x} plus ett blir ${x + 1}`)

console.log(
    mapped
)

const mapped2 = numbers
    .map((x, index, arr) =>
        `På index ${index} av ${arr.length - 1} fanns värdet ${x}`)

console.log(
    mapped2
)

// ForEach - konsumerar värdena i listan - t.ex. printa till konsol, spara till fil etc.)
numbers
    .forEach(x => {
        console.log(x)
        console.log("Något mer")
    })

// Sort - sorterar listan, obs! Muterar också listan, kan "skyddas" med slice
const sorted = numbers
    .slice()
    .sort((a, b) => a - b)
    .reverse()

console.log(sorted)

const names = ["Bob", "Gunnar", "Özcan", "bob", "Charlie", "Ägil"]

const sorted2 = names
    .slice()
    .sort((str1, str2) => str1.localeCompare(str2, 'sv', { caseFirst: "upper" }))
    .reverse()

console.log(sorted2)

const names2 = ["Bob", "Gunnar", "Özcan", "bob", "Charlie", "Ägil"]; //Ö och Ä hamnar som a och O

const sortNames = names2
    .slice()
    .sort((str1, str2) => str1.localeCompare(str2, "sv", { caseFirst: "upper" }))
    .reverse();

console.log(sortNames)

// // Reduce - reducerar ned elementen i en lista till ett slutvärde
// // genom att applicera en viss logik på varje element / utföre en viss operation på varje element

// const nums = [5, 25, 13, 2, 3]

// const sumOfElements = nums
//     .reduce((prev, current) => prev + current, 0)

// console.log(sumOfElements)

// const productOfElements = nums
//     .reduce((prev, current) => prev * current, 1)

// console.log(productOfElements)

// const words = ["En", "båt", "jag", "en", "gång", "såg", "jazz"]

// const stringFromWords = words
//     .reduce((prev, current) => prev + ", " + current)

// console.log(stringFromWords)

// //const wordsToUpperCase = words
// //    .map(str => str.toUpperCase())
// //
// //console.log(wordsToUpperCase)

// const wordsToUpperCase = words
//     .reduce((prev, current) => prev.concat(current.toUpperCase()), [])

// console.log(wordsToUpperCase)

// const filteredWords = words
//     .reduce((prev, current) => current.startsWith("j") ? prev.concat(current) : prev, [])

// console.log(filteredWords)

// const numberslist = [1, 5, 2, 10, 6, 1254, 12, 8, 35, 10564]

// const percentageOver1000 = numberslist
//     .map(x => x > 1000 ? 1 : 0)
//     .reduce((prev, current, _, array) => prev + (current / array.length), 0)

// // (0 + 1 + 0 + 0) / 4 <==>
// // (0 / 4) + (1 / 4) + (0 / 4) + (0 / 4)

// console.log(percentageOver1000)

// const reducedToObject = names
//     .reduce((prev, currrent, index) => ({ ...prev, ["val".concat(index + 1)]: currrent }), {})

// console.log(reducedToObject);
// console.log(reducedToObject.val6)