
let windcurrents = [];

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  fill(200);
  noStroke();
}

function draw() {
  background('white');
  let t = frameCount / 1000;


  for (let i = 0; i < random(0.001); i++) {
    windcurrents.push(new windcurrent());
  }

  for (let current of windcurrents) {
    current.update(t);
    current.display();
  }
}

function windcurrent() {
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 3);

  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 3;
    let angle = w * time + this.initialangle;
    this.posY = width / 2 + this.radius * sin(angle);
    this.posX += pow(this.size, 5);
    if (this.posX > width) {
      let index = windcurrents.indexOf(this);
      windcurrents.splice(index, 1);
    }
  };
  this.display = function() {
    rect(this.posX, this.posY, 100, this.size)
  };
}







































// let x, y;



// function setup() {
//   createCanvas(windowWidth - 20, windowHeight - 20);
//   // Starts in the middle
//   x = width;
//   y = height / 2;
// }

// function draw() {
//   background(200);
  
//   // Draw a circle
//   stroke(50);
//   fill(100);
  
//   for (let i = 0; i < 100; i++) {
//     curve(x, y, x+100, y, x-100, y, x+350, y+90);
//   }
  
//   // Jiggling randomly on the horizontal axis
//   x = x - 100;
//   // Moving up at a constant speed
//   y = y - 1;
  
//   // Reset to the bottom
//   if (x < -10000) {
//     x = width;
//   }

//   if (y < -10) {
//     y = height;
//   }
// }