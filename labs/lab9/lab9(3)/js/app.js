let userInput = document.getElementById("userInput") //not an array yet, just what user types
let dvResult = document.getElementById("dvResult") //displays results

//bad word array
let badWords = ["clear", "water", "tires"]

function wordCatch() {
    //user input variable
    let userWord = userInput.value

    //splits setence into an array
    let splitWord = userWord.split(" ")

    let lookForBad = splitWord.find(function(item) {
        splitWord.includes(badWords)
    })
    
    
    console.log(lookForBad)

    userInput.value = ""
}


//Algorithm\\

//use array.find
//use array.include
