function setup() {
    createCanvas(825, 300)
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
