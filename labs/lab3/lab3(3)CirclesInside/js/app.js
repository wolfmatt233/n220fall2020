function setup() {
    createCanvas(400, 400)
}

function draw() {
    //Canvas color, nofill for circle outlines
    background(200)
    noFill()

    //For loop for circles
    
    for(let i = 0; i < 50; i++) { //add 1 to i every loop  
        
        //i*4 controls the space in between each circle
        circle(200, 200, i*4)
    }
}


//Algorithm Planning

//let i = 0; if i is less than 40; increase i by one every loop

    //then create a circle at middle
        //insert i into circle and modify it for spacing