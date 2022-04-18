var x,y;
var xspeed;

var rectX, rectY;      // Position of square button
var circleX, circleY;  // Position of circle button
var rectSize = 25;    // Diameter of rect
var circleSize = 25;   // Diameter of circle
var rectColor, circleColor, baseColor;
var rectHighlight, circleHighlight;
var currentColor;
var rectOver = false;
var circleOver = false;

function setup() {
  createCanvas(600,600);
  rectColor = color(0);
  rectHighlight = color(51);
  circleColor = color(255);
  circleHighlight = color(204);
  baseColor = color(102);
  currentColor = baseColor;
  circleX = width/6+circleSize+2;
  circleY = height/5;
  rectX = width/4-rectSize-10;
  rectY = height/4-rectSize/4;
  ellipseMode(CENTER);
  
  x=25;
  y=height/2;
  xspeed =3;
}

function draw() {
  
  
  update(mouseX, mouseY);
 // background(currentColor);
  
  push();
  colorMode(RGB);
  fill(94,63,24);
  rect(100,100,400,300);
  pop();
  
  push();
  fill(currentColor);
  rect(150,120,320,250);
  pop();
  
  if (rectOver) {
    fill(rectHighlight);
  } else {
    fill(rectColor);
  }
  stroke(255);
  rect(rectX, rectY, rectSize, rectSize);
  
  if (circleOver) {
    fill(circleHighlight);
  } else {
    fill(circleColor);
  }
  stroke(0);
  ellipse(circleX, circleY, circleSize, circleSize);
  
 ellipse(x,y,50,50);
  x+= xspeed; //move ellipse horizontally by speed variable
  
  if(x-25< 0 || x+25>470){
    xspeed *= -1;  
  }

}

function update( x,  y) {
  if ( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
    rectOver = false;
  } else if ( overRect(rectX, rectY, rectSize, rectSize) ) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
}

function mousePressed() {
  if (circleOver) {
    currentColor = circleColor;
  }
  if (rectOver) {
    currentColor = rectColor;
  }
}

function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}