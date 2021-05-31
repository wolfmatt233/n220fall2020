//create variable to connect html to js
let dvSquare = document.getElementById("square")

//Styling
dvSquare.style.height = "100px"
dvSquare.style.width = "100px"
dvSquare.style.backgroundColor = "#2f84fa"

//Hover functions, connected to the sqaure element
    //hovering over the div, change to black
    function hoverOn() { 
        dvSquare.style.backgroundColor = "#000000"
    }

    //not hovering over black, change back to blue
    function hoverOff() {
        dvSquare.style.backgroundColor = "#2f84fa"
    }

//Algorithm\\

//document.getElementById

//Styling: height, width, background

//Functions: Hovering over the div and not hovering over it
    //Hovering --> change to black
    //Not hovering --> change to blue