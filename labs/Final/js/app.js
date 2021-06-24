let gameCard = document.getElementsByClassName("gameCard") //game card class collection brought to JS
let clickedArray = [] //empty array: data-attributes are stored in it when divs are clicked
let storeCard = [] //empty array: stores the card that is clicked to be modified later

//this loop searches through the collection of game cards 
for(let i = 0; i < gameCard.length; i++) { 
    //listens for a gameCard div to be clicked, then activates the cardFlip function
    gameCard[i].addEventListener("click", cardFlip)
}

//this function is activated once a card is clicked
//it has most of the functionality for the game 
function cardFlip(event) {
    let showColor = event.target.getAttribute("data-cardColor") //data-attribute, card color variable

    let clickedCard = this //variable to store the div that is clicked
    storeCard.push(clickedCard) //pushes the stored div variable into the storeCard array to store it

    //uses the div's data-attribute to change the card's background color; aka flipping the card
    event.target.style.backgroundColor = showColor 
    //pushes the clicked cards's color data-attribute to the clickedArray to store the color
    clickedArray.push(showColor) 

    //console.log testing
    console.log(this)
    console.log(clickedArray)
    console.log(storeCard)

    //once two cards have been chosen, check to see if they match
    if (clickedArray.length === 2) {

        setTimeout(function() { //setTimout to 2000 milliseconds to delay div change

            //if the first and second clicked divs have the same color attribute 
            if (clickedArray[0] === clickedArray[1]) {

                //then remove the two divs (make them invisible using white background)
                //use the first and second stored array div locations to be able to find and modify the clicked divs' style 
                storeCard[0].style.backgroundColor = "white" //first clicked div in array
                storeCard[0].style.border = "none" //first clicked div in array
                storeCard[1].style.backgroundColor = "white" //second clicked div in array
                storeCard[1].style.border = "none" //second clicked div in array
                console.log("match") //console.log testing

                //set the arrays back to nothing so the user can click other divs afterwards
                clickedArray = []
                storeCard = []

            } else { //if the first and second clicked divs are not the same then flip them back over (gray)
                //use stored div locations of clicked divs
                //set divs to back to gray
                storeCard[0].style.backgroundColor = "gray" //first clicked div in array
                storeCard[1].style.backgroundColor = "gray" //second clicked div in array
                console.log("no match") //console.log testing

                //set the arrays back to nothing so the user can click other divs afterwards
                clickedArray = [] 
                storeCard = []
            }
        }, 2000)
    }
}

function resetGame() {
    //very long placeholder for resetting divs to beginning color and border
    //i don't know how to affect every div in the collection with one line of code
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
    
    //set arrays back to nothing so the user can click other divs afterwards 
    clickedArray = [] 
    storeCard = [] 
}


//Instructions\\

//4x4 grid of cards laid face down
//when clicked, reveal the face of a card
//when a second card is tapped, reveal it as well
//if the two cards match, remove them from the game
//if not, don't remove them from the game and allow the user to choose two more 


//Algorithm\\

//4x4 grid of cards
    //divs in a class collection
//reveal value of card on click
    //event listener and loop
//if two revealed cards match, remove them
    //if statement
    //data-attributes of two cards equal
    //remove them, make white background
//if two cards do not match, return them to face over
    //if statement
    //if data-attributes of two cards do not equal
    //flip them back over, make gray again
//replay game button
    //set all cards back to gray
//use setTimeout to keep both face up cards visible for two seconds before hiding / removing them


//game grid of 16 cards, each with a data-attribute
//on a click, the data-attribute is taken and put makes the background color of the clicked div
//push the clicked div's data-attribute to an array
//allow this only tiwce to keep the array at a minimum of 2
//if the first array object is equal to the second
    //then make the div's with that color disappear after 2 seconds
//if the first and second array objects are not the same
    //then make the clicked divs back to gray after 2 seconds