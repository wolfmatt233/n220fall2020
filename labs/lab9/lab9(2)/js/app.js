let userInput = document.getElementById("userInput") //not an array yet, just what user types
let dvResult = document.getElementById("dvResult") //displays that bad words have been found

//bad word array
let badWords = ["clear", "water", "tires"]

//button function to perform the tasks
function wordCatch() {
    let userWord = userInput.value //user input variable
    let splitWord = userWord.split(" ") //splits setence into an array with spaces

    let badAmount = 0 //baseline amount for the amount of bad words, used to keep track of bad words

    for(let i = 0; i < splitWord.length; i++) { //loops through the user input words

        //if the split array I am searching through equals any bad word
        if(splitWord[i] == "clear") {
            badAmount += 1 //adds one to the amount of bad words found
            //displays that a bad word has been found and displays the amount of bad words typed
            dvResult.innerHTML = "Found a bad word." + "<br>" + "Number of bad words found: " + badAmount
        }
        //repeat the same process above across the other pieces of the bad words array
        if(splitWord[i] == "water") {
            badAmount += 1
            dvResult.innerHTML = "Found a bad word." + "<br>" + "Number of bad words found: " + badAmount
        }
        if(splitWord[i] == "tires") {
            badAmount += 1
            dvResult.innerHTML = "Found a bad word." + "<br>" + "Number of bad words found: " + badAmount
        }
    }

    userInput.value = "" //sets the user input field back to blank
}

//Algorithm\\

//connect user input and result div to javascript

//create bad word array

//button function
    //split the user input words into an array
    //create a variable equal to 0 to start the amount of bad words found at

    //create a loop that loops through the recently split user input array
        //if the split input array[i] that is being searched equals a word from the bad word array
            //then display that a bad word has been found
            //add one to the amount of bad words variable
            //display the number of bad words found
        //repeat across the whole bad word array