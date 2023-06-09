const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
  createCanvas(1000, 1000);

  // Define colors
  b1 = color(255);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);

  noLoop();
}

function draw() {
  background(255);
  //setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
  //setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
  setGradient(250, 150, 540, 80, c1, c2, Y_AXIS);
  setGradient(250, 380, 540, 80, c2, c1, X_AXIS);
  setGradient(250, 610, 540, 80, c2, c1, X_AXIS);
  setGradient(250, 150, 80, 540, c1, c2, Y_AXIS);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
    } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}