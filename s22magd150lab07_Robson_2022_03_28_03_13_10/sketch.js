let bubbles = []; 
var grass =[];


function setup() {
  createCanvas(710, 400);
  for (let i = 0; i < 150; i++) {
    bubbles.push(new Blowing());
  }
  
  for (var i = 0; i<width; i++){
    push();
  grass[i] = color(81, 207, 35);
    pop();
}
}

function draw() {
  background(187,220,250);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
  for (var i=0; i< grass.length; i++){
    stroke(grass[i]);
    line(i,400,i,300);
  }
}

class Blowing {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
    this.c = color(random(62,201,247), random(10,98,240), random(255,255,255));
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    fill(this.c);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
