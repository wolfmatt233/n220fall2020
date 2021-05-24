function setup() {
    createCanvas(200, 200)
}

function draw() {
    //Canvas color, rectangle placement is on center, red color fill, no outline
    background(60)
    rectMode(CENTER)
    fill(255, 0, 0)
    noStroke()

    //Setting up first loop for y variable
    for (let y = 50; y <= 175; y += 35) { //y += 35 means to add 35 to y every loop
         
        //Setting up x variable loop inside other loop
        for (let x = 50; x <= y; x += 35) { //x += 35 means to add 35 to x every loop
        
            //squares connected to the variables inside the loop
            rect(x, y, 33, 33);
        }
    }
}

//Algorithm Planning

//setup function 
    //canvas

//draw function
    //background, color fill, styling, etc.

    //For loop: Creating squares in a gridlike pattern that descend in amount\\
    //let y equal number; if y is less than or equal to number,
        //add an amount to y every loop

        //then let x equal number; if x is less than or equal to y,
            //add an amount to x every loop 
            
            //then draw a square with x and y variables inside, size 