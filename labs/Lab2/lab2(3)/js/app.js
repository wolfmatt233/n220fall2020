//variable for the starting circle size
let c = 1;
  console.log(c)

//canvas creation
function setup() {
    createCanvas(600, 600)
}

//background, circle color fill, and circle setup
function draw() {
  background(233, 245, 66)
  fill(245, 66, 188)

  //connect circle to c variable and set to middle
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