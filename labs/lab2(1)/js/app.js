//set up canvas
function setup() {
    createCanvas(400, 300);
}

//set up background and line in the middle to offer visual separation between sides
function draw() {
    background(0,0,0)

    //color, weight, and dimensions of line
    stroke(255)
    strokeWeight(2)
    line(200, 0, 200, 300)

    //clear the outline for the circle 
    noStroke() 

    //place the circle on mouse movement and set the size
    circle(mouseX, mouseY, 15)

    //if mouse position x is greater than the middle (200 --> right side), then the circle should fill red
    if (mouseX > 200) {
        fill("red")
    } 
    //otherwise make the circle red (less than 200 --> left side)
    else {
        fill("blue")
    }
}