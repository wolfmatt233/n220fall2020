let userInput = document.getElementById("userInput") //not an array yet, just what user types
let dvResult = document.getElementById("dvResult") //displays that bad words have been found

//bad word array
let badWords = ["clear", "water", "tires"]

//button function to perform the tasks
function wordCatch() {
    let userWord = userInput.value //user input variable
        userWord = userWord.toLowerCase() //changes user input to lowercase once button pressed
    let splitWord = userWord.split(" ") //splits setence into an array with spaces

    let lookForC = splitWord.find(function(item) {
        return splitWord.includes("clear")
    })
    let lookForW = splitWord.find(function(item) {
        return splitWord.includes("water")
    })
    let lookForT = splitWord.find(function(item) {
        return splitWord.includes("tires")
    })

    console.log(lookForC)

    userInput.value = "" //sets the user input field back to blank
}

//Algorithm\\

//use array.find
    //returns the first true item that appears in an array

//use array.include
    //returns true or false to whether a certain string or number is in an array