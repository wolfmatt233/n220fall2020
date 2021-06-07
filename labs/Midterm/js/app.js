//2 circles array: 1st (100, 100, 20) and 2nd (300, 200, 20)
var circs = [100, 100, 20, 300, 200, 20]

//size of circle to be increased
let size = 20

function setup() {
    createCanvas(500, 400)  
}

function draw() {
    background(0,0,0)

    //new circle with mouse position to be added to array later
    let newCircle = circle(mouseX, mouseY, 20)

    //Update function for drawing circles
    for(let i = 0; i < circs.length; i++) { //no i++
        //first and second circles of array
        circle(circs[0], circs[1], size)
        circle(circs[3], circs[4], size)
    
        if(frameCount % frameCount == 0) { //every 1 frame
            //increase size of circles
            size = size + 0.1
            console.log(size)
        } 
        if(frameCount % 30 == 0) { //every 30 frames
            //push new circle to circs array
            circs.push(newCircle)
            circs.shift()
            console.log(newCircle)
        }
        
    }
}

//Algorithm Plan\\

//Draw circles to the screen in update funciton 
    //for loop and circles with array usage

//increase size of each circle by 0.1 each draw call
    //frameCount
    //size increase x = x + 0.1

//Every 30 frames, add new circle to array at mouse location, start size 20
    //frameCount
    //variable for new circle
    //push shift