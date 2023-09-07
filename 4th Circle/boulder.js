let xMove = 0;
let yMove = 0;
let xSpeed = 1;
let BSpin = 0;

let xCloud = 0;

let img;

function preload() {
  img = loadImage('../media/imgs/boulder.png');
}

function setup() {
  // setup() runs once
  frameRate(60);
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  // draw() loops forever, until stopped
  
   background(245);
  // fill(200,200,200);

  fill(40);
  beginShape(QUADS);
  vertex(windowWidth, 1330);
  vertex(400, -190);
  vertex(-windowWidth, 3900);
  vertex(windowWidth, windowHeight);
  endShape();

  fill(30);
  beginShape(QUADS);
  vertex(windowWidth, 1330);
  vertex(-330, -150);
  vertex(-windowWidth, 900);
  vertex(windowWidth, windowHeight);
  endShape();

  fill(30);
  beginShape(QUADS);
  vertex(windowWidth, 2930);
  vertex(-1000, -340);
  vertex(-windowWidth, 100);
  vertex(windowWidth, windowHeight);
  endShape();

  fill(50);
  beginShape(QUADS);
  vertex(windowWidth, 1330);
  vertex(100, -100);
  vertex(-windowWidth, 1300);
  vertex(windowWidth, windowHeight);
  endShape();
  
  fill(60)
  beginShape(QUADS);
  vertex(windowWidth, 1330);
  vertex(-800,-290);
  vertex(-windowWidth + 1000, 200);
  vertex(windowWidth, windowHeight);
  endShape();

  fill(70)
  beginShape(QUADS);
  vertex(windowWidth, 1330);
  vertex(800, -190);
  vertex(-windowWidth - 1000, 2300);
  vertex(windowWidth, windowHeight);
  endShape();

  fill(100,100,100);
  noStroke()
  beginShape(QUADS);
  vertex(windowWidth, 0);
  vertex(1200, 0);
  vertex(-windowWidth, 300);
  vertex(windowWidth, windowHeight);
  endShape();


  //clouds
  fill(255)
  ellipse(-100, -windowHeight / 2, 550, 80, 50);
  ellipse(600, -windowHeight / 2, 550, 65, 50);
  ellipse(-900, -windowHeight / 2, 550, 45, 50);
  
  // quad(0, windowHeight / 1.5, windowWidth, windowHeight / 2, windowWidth, 970, 0, 970);
  xMove = xMove - xSpeed;
  yMove = yMove - xSpeed / 6;
  // console.log("X " + xMove)
  // console.log("Y " + yMove)
 console.log("SPD " + "x" + xSpeed)
 console.log("rotation " + BSpin)
  if (xMove < -25 && yMove) {
    xMove = width + 100;
    yMove = height;
  }

  xSpeed += 0.01;
  BSpin = xSpeed * xSpeed;
  fill(100,100,100);
  //ellipse(0 + xMove, windowHeight - yMove / 2, 50);
  drawCircle(-50 + xMove, windowHeight - yMove / 2);
//   line(mouseX, 0, mouseX, windowHeight);


  if (mouseX > xMove - 80 && mouseX < xMove - 10 && mouseIsPressed === true) {
    xSpeed = xSpeed - 0.0125 * xSpeed;
    BSpin = 0;
  }

  if (xSpeed > 12) {
    xSpeed--
  }
  
  if (xSpeed < 1 && mouseX > xMove -80 && mouseX < xMove - 10) {
    xSpeed -= 0.015;
    BSpin - 10;
  }



 
}


function drawCircle(x, y){

  x = x - width/2;
  y -= height/2;
  //ellipse(x,y,0, 50);
// console.log("X " + x)
// console.log("X " + y)

    translate(x,y);
    rotate(-BSpin);
    texture(img);
    textureMode(NORMAL);
    beginShape();
    vertex(-50, -50, 0, 0);
    vertex(50, -50, 1, 0);
    vertex(50, 50, 1, 1);
    vertex(-50, 50, 0, 1);
    endShape();
  




}