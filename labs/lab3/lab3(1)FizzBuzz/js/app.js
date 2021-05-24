function setup() {
    createCanvas(800, 300)
}

function draw() {
    background(150)
    fill(0)

    //For loop to create circles
    for(let x = 16; x <= width; x+=32) { //place 35 pixels in between each circle

        //creation of circles and connection to x variable
        circle(x, 150, 15)

        if (x % 3 == 0) {
            fill("purple")
        }
        
        rectMode(CENTER);
        if (x % 5 == 0) {
            fill("green")
            rect(x, 150, 32, 32)
        }

        if (x % 3 == 0 && x % 5 == 0) {
            fill("blue")
            rect(x, 150, 32, 32)
        }
    }
}

//Algorithm Plan

//setup canvas and background

//Set x equal to number. Add # * 2 
//If x is less than the width of the canvas, 
    //then create a circle. 
    //Loop this until x is greater than the width of the canvas

    //if x is divisible by 3 with 0 remainders
        //then fill the circle with purple

    //if x is divisible 5 with 0 remainders
        //then draw a square and fill it with green 

    //if x is divisible by 3 with 0 remainders AND if x is divisible by 5 with 0 remainders
        //then draw a square and fill it with blue
