//color array      red      yellow      green
let myColors = ["#db1212", "#ffd900", "#44de33"]

function setup() {
    createCanvas(300, 300)
    background("black")
}

function draw() {
    for(let i=0; i<myColors.length; i++) {
        //fill the circles with array colors using loop variable (i)
        fill(myColors[i])
        
        //draw stoplight circles to the screen using loop variable (i)
        //i*50 is the amount of space needed for circles to appear below each other
        circle(150,100 + i*50, 50)
    }
}

//Algortithm Plan\\

//create array for colors
    //array: red, yellow, green

//create a loop to draw multiple circles, use color array length to limit amount of circles to three
//for (let i equal 0; if i is equal to color array length; add one)
    //fill with color array and draw circles 
    //fill using colorArray and i variable for array colors
    //draw circles with i variable 