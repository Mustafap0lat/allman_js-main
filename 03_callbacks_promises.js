const checkSomething = (valueToTest, callback) => {
    let booleanResult = callback(valueToTest);
    return booleanResult;
}

const ourCallbackPredicate = x => x < 3

console.log(
    checkSomething(5, ourCallbackPredicate)
)

const users = []

const userToBeFetched = {
    userId: 30,
    userName: "SuperPowerWonderMan"
}

const fakeFetch = (callback) => {

    console.log("Påbörjar hämtning...")

    setTimeout(() => {
        console.log("Klar med hämtning")
        callback(userToBeFetched)
    }, 2000)

}

//akeFetch(() => {
//    users.push(userToBeFetched)
//    console.log(users)
//})

const fakeFetchPromise = (success) => {

    console.log("Påbörjar hämtning av data...")

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (success) {
                console.log("Klar med hämtningen")
                resolve(userToBeFetched);
            } else {
                reject(new Error("The fetch was unsuccessful"))
            }

        }, 2000)

    })
}

const handleData = (data) => {
    return Promise.resolve(data)
}

// fakeFetchPromise(true)
//     .then(val => handleData(val))
//     .then(processedval => console.log(processedval))
//     .catch(err => console.log(err))

const makeFetch = async () => {
    let returnedvalue = await fakeFetchPromise(true)
    console.log(returnedvalue);
}


// Funkar med v. 18 av node, experimental
//makeFetch()
//console.log("Saker som sker under tiden")

//fetch('https://jsonplaceholder.typicode.com/posts/1')
//    .then(res => res.json())
//    .then(body => console.log(body))

//const handleClick = async () => {
//    let result = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//    let body = await result.json()
//    console.log(body)
//}

handleClick()
