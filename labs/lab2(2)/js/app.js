//variables to set for circle movement
xPos = 0
yPos = 300

//variable set for speed of the circle
xSpeed = 5

//set up canvas
function setup() {
    createCanvas(800, 600)
}

//set up background and other styling
function draw() {
    background(0, 0, 0)
    fill("orange")

    //take the x position of the circle and add the speed to create movement
    xPos = xPos + xSpeed
        console.log(xPos)

    //circle positions using the previous variables and setting size
    circle(xPos, yPos, 30)

    //if the circle is greater than or equal to the right edge of the canvas (800)
    if (xPos >= 800) {
        //then set the x position of the circle back to 0
        xPos = 0
        console.log(xPos)
    }
}
