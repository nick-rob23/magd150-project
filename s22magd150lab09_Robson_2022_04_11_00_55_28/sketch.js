var mouth;
let live;

function setup() {
  crealivas(400, 400);
  live = createCapture(VIDEO);
  live.size(320,240); //creating a live video with a size of 320,240
  live.hide();
  mouth = new p5.AudioIn();//enabling the mic on the computer to pick up live sound
  mouth.start();
  
}

function draw() {
  background(220);
  image(live,40,0,320,240);//puts the live video in a box and then displays on canvas
  
   var vol =  mouth.getLevel();
  
  ellipse(200,300, 400,vol*200);
  console.log(vol); //creates a white ellipse making a mirror effect of your mouth on the live video canvas
  
}