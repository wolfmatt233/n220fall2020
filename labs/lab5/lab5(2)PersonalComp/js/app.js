let dvSquare = document.getElementById("mySquare")

//Messages and color arrays
let message1 = "Primary!"
let message2 = "Secondary!"
let primaryColor = ["#FF0000", "#FFFF00", "#3559e8"]
let secondaryColor = ["#FFA500", "#7F00FF", "#00FF00"]

//Random calculations for colors
let randColorPri = Math.floor(Math.random() * primaryColor.length)
let randColorSec = Math.floor(Math.random() * secondaryColor.length)

//Styling: backgrund, dimensions
dvSquare.style.backgroundColor = "gray";
dvSquare.style.height = "250px";
dvSquare.style.width = "250px";

//Centers text horizontally and vertically to div
dvSquare.style.textAlign = "center";
dvSquare.style.verticalAlign = "middle";
dvSquare.style.lineHeight = dvSquare.style.height
dvSquare.innerHTML = "Flip a coin and guess my color."


function squareChange() {
    //Repurposed coin flip to allow multiple clicks
    let flip = Math.random()
    let side = "heads"
    if(flip > .5) side = "tails"

    //if the coin flip goes to tails then display a primary color with the message "Primary!" 
    if(side == "tails") { 
        dvSquare.innerHTML = message1
        dvSquare.style.backgroundColor = primaryColor[randColorPri]  
    } else { //otherwise display a secondary color with the message "Secondary!"
        dvSquare.innerHTML = message2
        dvSquare.style.backgroundColor = secondaryColor[randColorSec]
    }
}