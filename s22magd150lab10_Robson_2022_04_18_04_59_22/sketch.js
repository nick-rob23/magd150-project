let map;
function setup() {
  createCanvas(400, 400, WEBGL);
  map = loadImage('GTAV-map-2-0.jpg');
  
}

function draw() {
  background(0);
  
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(450,450,450, -dirX, -dirY, -1);
  
  camera(0, 0, 10 + sin(frameCount * 0.01) * 400, 0, 0, 0, 0, 1, 0);
  
  translate(-120, -10, 0);
  normalMaterial();
  
  push();
  rotateZ(frameCount * 0.02);
  texture(map);
  plane(70);
  pop();

  translate(120, 0, 0);
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(map);
  box(70, 70, 70);
  pop();
  
  translate(120, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(map);
  sphere(40);
  pop();
  
 
}