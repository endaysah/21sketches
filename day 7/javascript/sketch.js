let r, g, b;

function setup() {
  createCanvas(1000, 1000);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(255);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(325, 200, 100, 100); // top row
  ellipse(375, 200, 100, 100);
  ellipse(425, 200, 100, 100);
  ellipse(475, 200, 100, 100);
  ellipse(525, 200, 100, 100);
  ellipse(575, 200, 100, 100);
  ellipse(625, 200, 100, 100);
  ellipse(675, 200, 100, 100);

  fill(r, g, b, 127);
  ellipse(325, 275, 100, 100); // vertical bar
  ellipse(325, 350, 100, 100);
  ellipse(325, 425, 100, 100);
  ellipse(325, 500, 100, 100);
  ellipse(325, 575, 100, 100);
  ellipse(325, 650, 100, 100);
  ellipse(325, 725, 100, 100);
  ellipse(325, 800, 100, 100);
 
  fill(r, g, b, 127);
  ellipse(325, 800, 100, 100); // bottom row
  ellipse(375, 800, 100, 100);
  ellipse(425, 800, 100, 100);
  ellipse(475, 800, 100, 100);
  ellipse(525, 800, 100, 100);
  ellipse(575, 800, 100, 100);
  ellipse(625, 800, 100, 100);
  ellipse(675, 800, 100, 100);

  fill(r, g, b, 127);
  ellipse(375, 500, 100, 100);
  ellipse(425, 500, 100, 100);
  ellipse(475, 500, 100, 100);
  ellipse(525, 500, 100, 100);
  ellipse(575, 500, 100, 100);
  ellipse(625, 500, 100, 100);
  ellipse(675, 500, 100, 100);
  
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}



