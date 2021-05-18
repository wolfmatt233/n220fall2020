//variable for the starting circle size
let c = 1;
  console.log(c)

//canvas creation
function setup() {
    createCanvas(600, 600)
}

//background and circle setup
function draw() {
  background(0,0,0)
  //connect circle to c variable
  circle(300, 300, c);

  //if c is less than 200, then increase its size by one
  if(c < 200) {
    c = c + 1; 
      console.log(c);
  }

  //otherwise go back to 1 (if the circle exceeds 200 reset the circle to 1)
  else {
    c = 1
      console.log(c)
  }
 }