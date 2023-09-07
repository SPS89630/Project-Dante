function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);
    background(153,76,0);
    frameRate(30);
    noStroke();

    for (let i = 0; i < 2; i++) {
      for (let j =  0; j < 39; j++) {
      fill(200);

      rect(-10 + j * 57, windowHeight / 2.4 + 112 * i,55, 110);
      }

    }

    for (let i = 0; i < 2; i++) {
        for (let j =  0; j < 12; j++) {

  
        rect(-10 + 342 * j, windowHeight / 5 + 95,55, 110);
        rect(47 + 342 * j, windowHeight / 5 + 95,55, 110);
        rect(104 + 342 * j, windowHeight / 5 + 95,55, 110);
        }
  
      }

      for (let i = 0; i < 2; i++) {
        for (let j =  0; j < 7; j++) {

  
        rect(-181 + 342 * j, windowHeight / 5,55, 110);
        rect(-124 + 342 * j, windowHeight / 5,55, 110);
        rect(-67 + 342 * j, windowHeight / 5,55, 110);
        }
  
      }

  }


  