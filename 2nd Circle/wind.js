
let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  fill(200);
  noStroke();
}

function draw() {
  background('white');
  let t = frameCount / 1000; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(0.001); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 3);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 3; // angular speed
    let angle = w * time + this.initialangle;
    this.posY = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posX += pow(this.size, 5);

    // delete snowflake if past end of screen
    if (this.posX > width) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
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