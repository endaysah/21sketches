function setup (){
    createCanvas(1000, 1000);
    background(217, 195, 227);
}

function draw (){
    stroke(255);
    strokeWeight(5);
    if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}