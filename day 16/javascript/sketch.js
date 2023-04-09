function preload(){
    
}

function setup(){
    createCanvas (1000, 1000);
    background(179, 177, 224);
}

function draw (){
    noStroke();
    fill(random(50, 255), random(50, 150), random(50, 255), 100);
    circle(mouseX, mouseY, random(24, 64));
}

function mousePressed() {
    background(0);
  }