function setup() {
    //Variables: Middle Y and Gray Outline on planets
    var midY = 275;
    var grayoutline = (61, 59, 56);

    createCanvas (1350, 550);
    noStroke();

    background(0, 0, 0);
    
    //THE SOLAR SYSTEM

    //Sun
    fill(255, 132, 0);
    stroke(245, 206, 49);
    strokeWeight(2);
    circle(0, midY, 175, 175);
    
    //mercury
    fill(140, 107, 28);
    stroke (grayoutline);
    circle(215, midY, 15, 15);

    //Venus
    fill(232, 167, 46);
    circle(290, midY, 37, 37);

    //Earth
    fill(47, 128, 31);
    circle(400, midY, 40, 40);

    //Luna/Moon
    fill(186, 184, 181)
    circle(435, 220, 7, 7)

    //Mars
    fill(212, 86, 13);
    circle(495, midY, 20, 20);

    //Line between Mars and Earth
    stroke(255, 255, 255);
    line(440, midY, 475, midY);

    //Line between Moon and Earth
    stroke(255, 255, 255)
    line(420, 240, 431, 225)

    //Jupiter
    stroke(grayoutline);
    fill(207, 130, 29);
    circle(650, midY, 100, 100);
        //Jupiter Storm
        strokeWeight(3);
        stroke(196, 98, 0);
        fill(184, 115, 6);
        ellipse(600, 310, 35, 25);
        

    //Saturn
    stroke (grayoutline);
    strokeWeight(2)
    fill (201, 181, 22);
    circle(850, midY, 75, 75);
        //"Ring"
        stroke(128, 111, 73);
        line(775, midY, 923, midY);

    //Uranus
    stroke(grayoutline);
    fill(13, 152, 186);
    circle(1025, midY, 60, 60);

    //Neptune
    fill(29, 67, 207);
    circle(1180, midY, 60, 60);   
}