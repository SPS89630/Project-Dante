var rain = [];
var rainingNow = true;
var bgcolor = (100, 100, 100);

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  
  for (i = 0; i < 1500; i++) {
    rain[i] = new Rain(random(0, windowWidth), random(0, -3000));
  }
}

function draw() {
  background(10,10,62);
  noStroke();

  rect(0,0,100, windowHeight)

  for (let j =  0; j < 9; j++) {
    fill(0,24,58);;

    rect(100 + j * 250, 0, 50, windowHeight);
    }

  fill(20,31,71);
  rect(0,720,windowWidth,200)

  if (rainingNow == true) {
    for (i = 0; i < rain.length; i++) {
      rain[i].dropRain();
      rain[i].splash();
    }
  } 
}


function Rain(x, y) {
  this.x = x;
  this.y = y;
  this.length = 20;
  this.r = 0;
  this.opacity = 200;


  this.dropRain = function() {
    noStroke();
    fill(150,134,117);
    ellipse(this.x, this.y, 3, this.length);
    this.y = this.y + 15
    if (this.y > 735) {
      this.length = this.length - 10;
    }
    if (this.length < 0) {
      this.length = 0;
    }
  }

  this.splash = function() {
    strokeWeight(2);
    
    stroke(150,134,117, this.opacity);
    noFill();
    if (this.y > 740) {
      ellipse(this.x, 750, this.r * 2, this.r / 2);
      this.r++;
      this.opacity = this.opacity - 10;

      if (this.opacity < 0) {
        this.y = random(0, -100);
        this.length = 15;
        this.r = 0;
        this.opacity = 200;
      }
    }
  }
}

  
