//circle object
let myCirc = {
    x: 300, yPos: -50, size: 100, ySpeed: 3, //coordinates, diameter, and speed of object
    r: 255, g: 74, b: 61 //fill rgb color
}

//canvas
function setup() {
    createCanvas(600, 500)
}

function draw() {
    background(0,0,0)
    
    //speed calculation
    myCirc.yPos += myCirc.ySpeed

    //color fill and circle drawing
    fill(myCirc.r, myCirc.g, myCirc.b)
    circle(myCirc.x, myCirc.yPos, myCirc.size)

    //resets circle back to the beginning
    if (myCirc.yPos >= 550) {
        myCirc.yPos = -50
        console.log(myCirc.yPos)
    }
}