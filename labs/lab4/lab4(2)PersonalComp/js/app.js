//declaring color array
let myColors = ["#ff0000", "#ff5100", "#ffd000", "#00ff15", "#00f7ff", "#002fff", "#8800ff", "#ff00c3"]

function setup() {
    createCanvas(410, 410)
}

function draw() {
    background(0)

    //line of circles horizontal
    for (let i = 0; i < myColors.length; i++) {
        fill(myColors[i])
        circle(i * 50 + 30, 205, 50)
    }
    //line of circles vertical
    for (let i = 0; i < myColors.length; i++) {
        fill(myColors[i])
        circle(205, i * 50 + 30, 50)
    }
}