function setup(){
    createCanvas(1000, 1000);
    background(232, 215, 252);
}

let value = 0;
function draw(){
    noFill(121, 89, 194);
    stroke(0);
    ellipse(mouseX, mouseY, random(50, 50));
} 

function mousereleased(){
    if (value === 0){
        value = 255;
    }
    else {
        value = 0;
    }
}
