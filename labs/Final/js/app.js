let gameCard = document.getElementsByClassName("gameCard") //game card class collection in JS
let twoArray = [] //empty array: when divs are clicked data-attributes are added to it
twoArray.slice(0, 2)

//this loop searches through the collection of game cards 
//uses the event listener to activate the function once a card has been clicked
for(let i = 0; i < gameCard.length; i++) { 
    gameCard[i].addEventListener("click", squareClick)
}

function squareClick(event) {
    let showColor = event.target.getAttribute("data-cardColor") //card color variable
    event.target.style.backgroundColor = showColor //clicked div background turns into the card's data-attribute
    twoArray.push(showColor) //push the clicked div's color data-attribute to the array
    console.log(twoArray)

    //if the first clicked div's  data-attribute equals the second clicked one's then
    if (twoArray[0] == twoArray[1]) { 
        console.log("same",twoArray)

        setTimeout(function() {        
            //remove the two clicked divs after 2 seconds
            event.target.style.backgroundColor = "white"
            event.target.style.border = "none"
            twoArray = []
        }, 2000)
    }

    // if (twoArray[0] != twoArray[1]) {
    //     event.target.style.backgroundColor = "gray"
    //     event.target.style.border = "solid"
    //     //twoArray = []
    // } 
}

function resetGame() {
    //very long placeholder for resetting divs to beginning color
    gameCard[0].style.backgroundColor = "gray"
    gameCard[0].style.border = "solid"
    gameCard[1].style.backgroundColor = "gray"
    gameCard[1].style.border = "solid"
    gameCard[2].style.backgroundColor = "gray"
    gameCard[2].style.border = "solid"
    gameCard[3].style.backgroundColor = "gray"
    gameCard[3].style.border = "solid"
    gameCard[4].style.backgroundColor = "gray"
    gameCard[4].style.border = "solid"
    gameCard[5].style.backgroundColor = "gray"
    gameCard[5].style.border = "solid"
    gameCard[6].style.backgroundColor = "gray"
    gameCard[6].style.border = "solid"
    gameCard[7].style.backgroundColor = "gray"
    gameCard[7].style.border = "solid"
    gameCard[8].style.backgroundColor = "gray"
    gameCard[8].style.border = "solid"
    gameCard[9].style.backgroundColor = "gray"
    gameCard[9].style.border = "solid"
    gameCard[10].style.backgroundColor = "gray"
    gameCard[10].style.border = "solid"
    gameCard[11].style.backgroundColor = "gray"
    gameCard[11].style.border = "solid"
    gameCard[12].style.backgroundColor = "gray"
    gameCard[12].style.border = "solid"
    gameCard[13].style.backgroundColor = "gray"
    gameCard[13].style.border = "solid"
    gameCard[14].style.backgroundColor = "gray"
    gameCard[14].style.border = "solid"
    gameCard[15].style.backgroundColor = "gray"
    gameCard[15].style.border = "solid"
    twoArray = [] //sets array back to nothing so the game can function
}


//Instructions\\

//4x4 grid of cards laid face down
//when clicked, reveal the face of a card
//when a second card is tapped, reveal it as well
//if the two cards match, remove them from the game
//if not, don't remove them from the game and allow the user to choose two more 


//Algorithm\\

//4x4 grid of cards
    //divs in a collection
//reveal value of card on click
    //event listener and loop
    //loop: i < 2, a max of 2 cards flipped at once
//if two revealed cards match, remove them
    //if statement
    //data-attributes of two cards equal
    //remove them
//if two cards do not match, return them to face over
    //if statement
    //if data-attributes of two cards do not equal
    //flip them back over
//replay game button
//use setTimeout to keep both face up cards visible for two seconds before hiding / removing them

//game grid of 16 cards, each with a data-attribute
//on a click, the data-attribute is taken and put makes the background color of the clicked div
//push the clicked div's data-attribute to an array
//allow this only tiwce to keep the array at a minimum of 2
//if the first array object is equal to the second
    //then make the div's with that color disappear after 2 seconds
//if the first and second array objects are not the same
    //then make the clicked divs back to gray after 2 seconds
    