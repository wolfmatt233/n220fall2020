//color array       cyan       orange     purple      pink
let colorArray = ["#42e6f5", "#f58a42", "#7242f5", "#f542a7"]

function setup() {
    createCanvas(300, 300)
    background("black")
}

//creates randomized color fill, it comes before the circle and outside of the draw function
function randColor() {
    //chooses random color from color array using math.random
        //math.random gets a number from 0-1
        // multiplying by array.length makes it cycle the array options from 0-3
    fill(colorArray[Math.floor(Math.random() * colorArray.length)])
    
    //logging color code to console
    console.log(colorArray[Math.floor(Math.random() * colorArray.length)])
}

function draw() {
    //draw circle
    circle(150, 150, 100)
}

//Algorithm Plan\\

//create color array for 4 colors

//use button onclick function in combination with the fill command
    //randomize colors when the button is clicked
        //use: array[math.floor(math.random() * array length)]

//draw function
    //draw the circle