

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);
    background(0);
    frameRate(10);
  }

function draw() {
  stroke(206, 204, 195);
    strokeWeight(4);
    fill(245);
    angleMode(DEGREES);
    rect(490, 240, 80, 610);
    rect(1390, 240, 80, 610);

    fill(233)
    rect(0, 800, 2420, 150);

    for (let i = 0; i < 1; i++) {
      for (let j =  0; j < 9; j++) {
      fill(245);
      rotate(-0.5 );

      rect(550 + j * 50, 350 + i * 100, 55, 110);
      }

    }

    for (let i = 0; i < 1; i++) {
      for (let j =  0; j < 9; j++) {
      fill(245);
      rotate(0.5);
      rect(950 + j * 50, 350 + i * 100, 55, 110);
      }

    for (let i = 0; i < 5; i++) {
      for (let j =  0; j < 6; j++) {
      fill(245);
      rect(1380 + j * 110, 270 + i * 100, 110, 50);
      rect(1545 + j * 110, 320 + i * 100, 110, 50);
      }

    }

    for (let i = 0; i < 5; i++) {
      for (let j =  0; j < 5; j++) {
      fill(245);
      rect(-20 + j * 110, 270 + i * 100, 110, 50);
      rect(-85 + j * 110, 320 + i * 100, 110, 50);
      }

    }

    for (let i = 0; i < 1; i++) {
      for (let j =  0; j < 8; j++) {
      fill(245);
      rect(600 + j * 110, 250 + i * 100, 110, 50);
      rect(550 + j * 110, 300 + i * 100, 110, 50);
      }

    }

    }

    //pillars
    fill(255);
    stroke(220, 218, 209);
    strokeWeight(4);
    rect(-20, 770, 600, 80);
    rect(420, 240, 80, 610);
    
    rect(520, 240, 80, 610);
    rect(410, 240, 200, 20);
    rect(400, 230, 220, 20);
    rect(410, 850, 200, 20);
    rect(400, 860, 220, 20);

    stroke(220, 218, 209);
    rect(1450, 770, 700, 80);
    strokeWeight(4);
    rect(1370, 240, 80, 610);
    rect(1470, 240, 80, 610);
    rect(1360, 240, 200, 20);
    rect(1350, 230, 220, 20);
    rect(1360, 850, 200, 20);
    rect(1350, 860, 220, 20);


    //mist
    fill(100,100,100,50)
    noStroke();
    rect(0, yMove, 2420, 500);  
    
}


  