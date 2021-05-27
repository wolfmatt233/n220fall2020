//x and y arrays for mouse locations, 10 variables for trail
let xPos = [0,0,0,0,0,0,0,0,0,0]
let yPos = [0,0,0,0,0,0,0,0,0,0]

function setup() {
    createCanvas(500, 400)
}

function draw() {
    background(0)

    //Push and shift to attach mouseX to the x array
    xPos.push(mouseX)
    xPos.shift()

    //Push and shift to attach mouseY to the y array
    yPos.push(mouseY)
    yPos.shift()

    //let i = 0; if i is less than 10 (trail amount); add 1 to i every loop
        //then draw a circle at x array[i] and y array[i]
    for(let i = 0; i < 10; i++) {
        circle(xPos[i], yPos[i], 50)
    }
}

//Algorithm Plan\\

//make x and y arrays for mouse location, include 10 variables for 10 trail positions

//setup and canvas

//draw
    //background, style, etc. 
    
    //x array: push mouseX to the end of the array to attach the circle to the mouse x location
    //x array: shift to remove an element from the front of the array

    //y array: push mouseY to the end of the array to attach the circle to the mouse y location
    //y array: shift to remove an element from the front of the array

    //for loop:
    //let i equal 0; if i is less than 10; add 1 to i every loop
        //then draw a circle at (x array[i], y array[i])