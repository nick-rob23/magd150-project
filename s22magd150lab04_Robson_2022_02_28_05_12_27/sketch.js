function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(RGB)
  background(237,230,154);
  
  var x = 0;
   while (x <= width){
     noStroke();
     fill(240,79,79);
     ellipse(x,70,40,40);
     x = x+65;
   }
  
  for (var x=0; x <= width; x=x+60){
    noStroke();
    fill(240,79,79);
    ellipse(x,210,40,40);
    
  }
for (var x=0; x <= width; x=x+55){
    noStroke();
    fill(240,79,79);
    ellipse(x,350,40,40);
    
  }  
  
  push();
  stroke(133,96,60);
  strokeWeight(20);
  noFill();
  rect(10,10,380,380);
  pop();
  
  fill(0);
  ellipse(mouseX,mouseY,10,10);
}