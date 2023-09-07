
let water = []; // array to hold wateranimation objects

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(200);
  noStroke();
}



function draw() {
  background(103,174,205);
  fill(93,124,175)
  rect(0, windowHeight - 450, windowWidth,450)
  let t = frameCount / 1000; // update time

  // create a random number of water each frame
  for (let i = 0; i < random(-5,1); i++) {
    water.push(new wateranimation()); // append wateranimation object
  }

  // loop through water with a for..of loop
  for (let waterflow of water) {
    waterflow.update(t); // update wateranimation position
    waterflow.display(); // draw wateranimation
  }
}

// wateranimation class
function wateranimation() {
  // initialize coordinates
  this.posX = -100;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.sizeY = random(2, 3);
  this.sizeX = random(80, 200);

  // radius of wateranimation spiral
  // chosen so the water are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 4, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 1; // angular speed
    let angle = w * time + this.initialangle;
    this.posY = width / 2 + this.radius * sin(angle);

    // different sizeY water fall at slightly different y speeds
    this.posX += pow(this.sizeY,1.2);

    // delete wateranimation if past end of screen
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
