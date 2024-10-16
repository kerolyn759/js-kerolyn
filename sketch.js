function setup() {
  createCanvas(400, 400);
 background(220);
}
function draw() {
    background("white");
   stroke("blue") 
  fill("red");
    console.log(mouseIsPressed);
    rect(mouseX, mouseY, 100, 150);
}function setup() {
  createCanvas(400, 400);
  background("white")
}

function draw() {
  stroke("blue");
  fill("red");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
