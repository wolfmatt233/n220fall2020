function setup() {
    createCanvas(400, 400)
}

function draw() {
    //Canvas color, nofill for circle outlines
    background(200)
    noFill()

    //For loop for circles
    //let i = 0; if i is less than 40
    for(let i = 0; i < 50; i++) { //add 1 to i every loop  
        
        // then create a circle at position 200, 200 with an size of i*4
        //i*4 controls the space in between each circle
        circle(200, 200, i*4)
    }
}