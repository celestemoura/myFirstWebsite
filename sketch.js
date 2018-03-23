let r = 200;//radius
function setup() {
  // put setup code here
  // rectMode(CENTER);
  createCanvas(innerWidth, innerHeight)
  background(0);
}

function draw() {
  // put drawing code here
  background(0);
  // save mouse positions into variables
  let x = mouseX;
  let y = mouseY;
  background(x % 255, 255 - y % 255, 0);
  // I'm transforming a circle 
  // into a square
  // with an if/else statement
  if(x > width / 2){
    fill(45, 15, 45)
rect(x - r/2, y - r/2, r, r)
  }else{
    fill(10, 15, 15);
    ellipse(x, y, r);
  }
  // map(mouseX, 0, width, min number of vertices, max number of vertices);
  let vertices = map(mouseX, r, width - r, 4, 15);
  let start = 0;
  beginShape();
  for(let i = start; i < vertices; i++){
    let angle = map(i, start, vertices, 0, TWO_PI);
    let posX = r * cos(angle) + x;
    let posY = r * sin(angle) + y;
    vertex(posX, posY);
  }
  endShape();
}

function windowResized(){
  resizeCanvas(innerWidth, innerHeight);
}