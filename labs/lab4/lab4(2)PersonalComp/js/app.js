//declaring color array
let myColors = ["#ff0000", "#ff5100", "#ffd000", "#00ff15", "#00f7ff", "#002fff", "#8800ff", "#ff00c3"]

//random colors: did not work when inserting into fill command
//let randColors = myColors[Math.floor(Math.random() * myColors.length)]


function setup() {
    createCanvas(410, 410)
}

function draw() {
    background(0)

    //slows animation down
    frameRate(3)
    //line of circles horizontal
    for (let i = 0; i < myColors.length; i++) {
            //
        fill(myColors[Math.floor(Math.random() * myColors.length)])
        circle(i * 50 + 30, 205, 50)
    }
    //line of circles vertical
    for (let i = 0; i < myColors.length; i++) {
        fill(myColors[Math.floor(Math.random() * myColors.length)])
        circle(205, i * 50 + 30, 50)
    }
}

//Algorithm\\

//color array 

//for loop horizontal:
//let i equal 0; if i is less than color array's length; add 1 every loop
    //then fill with color array using i
    //then draw a circle at (i * circle diameter, middle of canvas)

//for loop vertical:
    //same as horizontal, but draw a circle at (middle of canvas, i * circle diameter)