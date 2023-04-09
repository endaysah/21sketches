function preload(){
    
}

function setup(){
    createCanvas (1000, 1000);
    background(224, 177, 211);
}

function draw (){
    noStroke(); 
    fill(random(0));
    rect(mouseX, mouseY, 50, 100); 
    fill(207, 41, 132);
    rect(mouseX, mouseY, 100, 50); 
}

function mousePressed(){
    background(224, 177, 211);
}

function keyTyped() {
    if (key === 's') {
      photo.save('photo', 'png');
    }
}