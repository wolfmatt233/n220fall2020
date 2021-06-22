//two divs for display connected to JS
let divColor = document.getElementById("divColor") //div square
let currentColorDisplay = document.getElementById("currentColorDisplay") //displays the rgb color on the page

//base RGB values
let r = 0; let g = 0; let b = 0;

function redFunc(event) { //function for red color buttons
    //collects the data-attribute from the button that was clicked and turns it into a number for js to read
    let redAdd = Number(event.target.getAttribute("data-colorVal"))

    //calculation for the new color number, using the base rgb values and the previous data-attribute
    r = r + redAdd

    //displays the new calculated number to the page using the display div
    currentColorDisplay.innerHTML = "Current Color: rbg(" + r + "," + g + "," + b + ")"

    //changes the background color for the square div by taking the new rgb number and putting it in with the rest
    divColor.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
}

//repeat the above function process for the other two rgb colors, blue and green

function blueFunc() { //function for blue color buttons
    let blueAdd = Number(event.target.getAttribute("data-colorVal"))
    b = b + blueAdd
    currentColorDisplay.innerHTML = "Current Color: rbg(" + r + "," + g + "," + b + ")"
    divColor.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
}

function greenFunc() { //function for green color buttons
    let greenAdd = Number(event.target.getAttribute("data-colorVal"))
    g = g + greenAdd
    currentColorDisplay.innerHTML = "Current Color: rgb(" + r + "," + g + "," + b + ")"
    divColor.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
}



//Instructions\\
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



//Algorithm\\

//div for square 
//div for displaying rgb

//9 buttons, 3 for each color, adding +1, +5, and +10 to each rgb value
    //create a function for each color, attach it to each button
    //set data-attribute values for each button corresponding to its addition: 1, 5, and 10

//connect display and square divs to JavaScript
//create rgb variables, all starting at 0

//function connected to color buttons
    //get attribute from button that was pressed and convert it to a number so JS can read it in a calculation
    //create a calculation adding the attribute number to the current rgb variable of the same color
    //display the results using innerHTML
    //use the new numbers for the square div's style.backgroundColor

//repeat function process across the other two colors