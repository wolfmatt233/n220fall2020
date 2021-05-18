let s = 20;

function setup() {
    createCanvas(500, 500)
}


function draw() {
  background(0,0,0)
  circle(mouseX, mouseY, s);

  if(s < 50) {
    if (mouseIsPressed) {
        s = s + 5; 
        console.log(s);
  }
 }  
}
