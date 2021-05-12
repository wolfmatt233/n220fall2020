function setup() {

    //Variable to use for every planet to keep them all in the middle
    var midY = 300;

    createCanvas (1585, 600);
    noStroke();

    background(0, 0, 0)
    
    //Sun
    fill(235, 137, 52)
    stroke(245, 206, 49)
    strokeWeight(3)
    circle(0, 300, 175, 175);
    
    //mercury
    fill(209, 189, 159)
    stroke (61, 59, 56)
    circle(215, midY, 15, 15)

    //Venus
    fill(232, 167, 46)
    circle(290, midY, 37, 37)

    //Earth
    fill(47, 128, 31)
    circle(400, midY, 40, 40)

    //Mars
    fill(212, 86, 13)
    circle(500, midY, 20, 20)

    //Jupiter
    fill(0,0,0)
    circle(700, midY, 100, 100)

    //Saturn


    //Uranus


    //Nepture

}