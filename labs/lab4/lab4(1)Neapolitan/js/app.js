//color array - white, pink, brown
let colors = ["#fffcf8", "#ffc0cb", "#7e3f12"]

function setup() {
    createCanvas(320, 300)
}

function draw() {
    //gray background
    background(150)
    //For loop: drawing one square after another until at the size of the color array
    for(i = 0; i < colors.length; i++) {
        //draws a square and fills it with the colors in the array
        fill(colors[i])
        //i * 100 to make squares appear one after another instead of drawing on top of each other (same as square size)
        rect(i * 100 + 10, 100, 100)
    }
}

//Algorithm Plan\\

//Set color array

//Setup Function 
    //Canvas

//Draw Function
    //Background

    //For loop:
    //For i equals 0; if i is less than color array's length; add one every loop
        //then fill using color array's variables
        //then draw a rectangle with i in the x syntax times the size