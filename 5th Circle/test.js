
let water = []; 
var x = -1000;
var y = 600;
var d = 40;


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(200);
  noStroke();
  
}



function draw() {
  background(3,74,105);

  for (let j =  0; j < 39; j++) {
    fill(135,65,15);
    ellipse(j * 200,400,50,1000);
    }

    for (let j =  0; j < 39; j++) {
      fill(85,107,47);
      ellipse(j * 200,0,400,100);
      }


  fill(93,124,175)
  rect(0, windowHeight - 450, windowWidth,450)
  fill(92, 64, 51)
  rect(0, windowHeight - 450, windowWidth,30)

  for (let j =  0; j < 39; j++) {
    fill(85,107,47);
    ellipse(j * 245,920,10,100);
    }

    for (let j =  0; j < 39; j++) {
      fill(85,107,47);
      ellipse(j * 213,930,10,100);
      }

  let t = frameCount / 1000;

  // create random number of object each frame
  for (let i = 0; i < random(-5,1); i++) {
    water.push(new wateranimation());
  }


  for (let waterflow of water) {
    waterflow.update(t);
    waterflow.display();
  }
  fill(111, 52, 7)
  quad(x-150, y+0, x+20, y+120, x+180, y+120, x+400, y+0);
  if (keyIsPressed){
    if (keyCode == LEFT_ARROW){
      x -= 0.5;
      x += 1.3;
    } else if (keyCode == RIGHT_ARROW){
      x += 0.5;
      x += 1.3;
    }
    if (keyCode == UP_ARROW){
      y -= 0.4;
      x += 1.3;
    } else if (keyCode == DOWN_ARROW){
      y += 0.4;
      x += 1.3;
    } else if (x > width + 100) {
      x = -1000;
    } else if (y > 500) {
      y++;
    }
  } else {
    console.log(x)
    x += 1.3;}

}



function wateranimation() {

  this.posX = -100;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.sizeY = random(2, 3);
  this.sizeX = random(80, 200);

  this.radius = sqrt(random(pow(width / 4, 2)));

  this.update = function(time) {

    let w = 1; 
    let angle = w * time + this.initialangle;
    this.posY = width / 2 + this.radius * sin(angle);


    this.posX += pow(this.sizeY,1.4);


    if (this.posX > width) {
      let index = water.indexOf(this);
      water.splice(index, 1);
    }
  };

  this.display = function() {
    fill(93,164,195)
    ellipse(this.posX, this.posY, this.sizeX, this.sizeY)
  };

  
}