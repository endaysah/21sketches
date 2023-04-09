let squareSize;
let lineWidth;

function setup() {
    createCanvas(1000, 1000);
    background(255);
}

function draw() {
    lineWidth = random(4, 28);
    squareSize = random(5, 90);
    rectMode(CENTER);
    strokeWeight(lineWidth);
    stroke(0, 0, 255, 10);
    fill(0, 255, 0, 10);
    
    square(200, 150, squareSize);
    square(300, 150, squareSize);
    square(400, 150, squareSize);
    square(500, 150, squareSize);

    square(300, 450, squareSize);
    square(400, 450, squareSize);
    square(500, 450, squareSize);

    square(300, 750, squareSize);
    square(400, 750, squareSize);
    square(500, 750, squareSize);

    square(200, 250, squareSize);
    square(200, 350, squareSize);
    square(200, 450, squareSize);
    square(200, 550, squareSize);
    square(200, 650, squareSize);
    square(200, 750, squareSize);

}
