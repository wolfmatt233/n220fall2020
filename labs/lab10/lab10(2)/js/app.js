let divColored = document.getElementById("divColored") //colored div square
let colorCurrent = document.getElementById("colorCurrent") //current color

//red buttons
let redOne = document.getElementById("redOne")
let redFive = document.getElementById("redFive")
let redTen = document.getElementById("redTen")
//green buttons
let greenOne = document.getElementById("greenOne")
let greenFive = document.getElementById("greenFive")
let greenTen = document.getElementById("greenTen")
//blue buttons
let blueOne = document.getElementById("blueOne")
let blueFive = document.getElementById("blueFive")
let blueTen = document.getElementById("blueTen")

//red event listeners
redOne.addEventListener("click", plusRedOne)
redFive.addEventListener("click", plusRedFive)
redTen.addEventListener("click", plusRedTen)
//green event listeners
greenOne.addEventListener("click", plusGreenOne)
greenFive.addEventListener("click", plusGreenFive)
greenTen.addEventListener("click", plusGreenTen)
//red event listeners
blueOne.addEventListener("click", plusBlueOne)
blueFive.addEventListener("click", plusBlueFive)
blueTen.addEventListener("click", plusBlueTen)

//RGB starting position
r = 0; g = 0; b = 0;

//Red addition functions
function plusRedOne(event) {
    let colorVal = event.target.getAttribute("colorVal")
    //coloarVal = r++
    currentRGB()
}
function plusRedFive(event) {
    r = r + 5
    currentRGB()
}
function plusRedTen(event) {
    r = r + 10
    currentRGB() 
}
//Green addition functions
function plusGreenOne(event) {
    g++
    currentRGB()
}
function plusGreenFive(event) {
    g = g + 5
    currentRGB()
}
function plusGreenTen(event) {
    g = g + 10
    currentRGB()
}
//Blue addition functions
function plusBlueOne(event) {
    b++
    currentRGB()
}
function plusBlueFive(event) {
    b = b + 5
    currentRGB()
}
function plusBlueTen(event) {
    b = b + 10
    currentRGB()
}

function currentRGB() {
    colorCurrent.innerHTML = "Current Color: rgb(" + r + "," + g + "," + b + ")"
    divColored.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
}


//Algorithm\\

//start a div at a black color
//user presses buttons associated with RGB
//div will change to new colors
//button presses should affect additively 
    //if a div is currently blue, pressing  +red buttons will change the div to a purple color

//9 buttons (Red, Green, Blue associations)
    //+1, +5, and +10 button for each color
    //1 div will change colors to the rgb color calculated
//1 div that shows current rgb color

//must use attributes on the buttons for the values to change the colors by