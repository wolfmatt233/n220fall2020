let dvSquare = document.getElementById("square")

dvSquare.style.backgroundColor = "#117007"
dvSquare.style.width = "100px"
dvSquare.style.height = "100px"

//When div is clicked increase its size (height and width) by 10%
function divLarger() {

    //Store height and width in a new variable and create a variable for the new size * 1.1 for 10%
        //offsetHeight grabs the width and height of the div element
        //as far as I know offsetHeight and offsetWidth are more or less identical in this specific situation
    let sqSize = dvSquare.offsetHeight
    let newSize = sqSize * 1.1

    //Set the new height and width: new variable plus "px"
    dvSquare.style.height = newSize + "px"
    dvSquare.style.width = newSize + "px"
}

//Algorithm\\

//document.getElementById

//Styling: height, width, background

//Mouse click function
    //create variable to store the height and width of the div
    //create a new variable for the new size, + 10% (size * 1.1)
    //take height and width of dv(varname) equaling the new size plus "px"