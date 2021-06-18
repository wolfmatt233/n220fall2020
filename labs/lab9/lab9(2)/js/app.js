let userInput = document.getElementById("userInput") //not an array yet, just what user types
let dvResult1 = document.getElementById("dvResult1") //displays that bad words have been found
let dvResult2 = document.getElementById("dvResult2") //displays amount of bad words 

//bad word array
let badWords = ["clear", "water", "tires"]

function wordCatch() {
    //user input variable
    let userWord = userInput.value

    //splits setence into an array
    let splitWord = userWord.split(" ")

    let badVar = badWords

    let badAmount = 0 //baseline amount for the amount of bad words, used to keep track of bad words

    for(let i = 0; i < splitWord.length; i++) { //loops through the user input words

        //if the split array I am searching through equals any bad word
        if(splitWord[i] == badWords) {
            dvResult1.innerHTML = "Found a bad word." //the display that a bad word has been found
            badAmount += 1 //adds one to the amount of bad words found
            dvResult2.innerHTML = "Number of bad words found: " + badAmount //displays the amount of bad words typed
        }
        //repeat the same process above across the other pieces of the bad words array
        if(splitWord[i] == "water") {
            dvResult1.innerHTML = "Found a bad word."
            badAmount += 1
            dvResult2.innerHTML = "Number of bad words found: " + badAmount
        }
        if(splitWord[i] == "tires") {
            dvResult1.innerHTML = "Found a bad word."
            badAmount += 1
            dvResult2.innerHTML = "Number of bad words found: " + badAmount
        }
    }

    userInput.value = ""
}

//Algorithm\\

//user input, split strings on spaces

//loops through array looking for bad words in the array
    //adds 1 to a tally count when a bad word is found
//outputs: if any bad words were found / not found AND how many bad words, total, were found
//clears text field after