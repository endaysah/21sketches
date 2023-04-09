var cWidth = 1000;
var cHeight = 1000;
var i = 0; 

function setup(){
    createCanvas(cWidth, cHeight);
    background(0);
    frameRate(30) 
    angleMode(DEGREES) 
}

function draw(){
    push ();
    noFill ();
    stroke(72, 245, 66);
    //ellipse(cWidth / 2, cHeight / 2, 300 + (i * 10), 500) //position, position, dimension, dimension
    ellipse(cWidth / 3.8, cHeight / 2, 20 + (i * 10), 500) // vertical
    stroke(206, 66, 245);
    ellipse(cWidth / 2, cHeight / 3.8, 500, 20 + (i * 10))
    stroke(255);
    ellipse(cWidth / 2, cHeight / 2, 500, 20 + (i * 10))
    stroke(66, 78, 245);
    ellipse(cWidth / 2, cHeight / 1.4, 500, 20 + (i * 10))
    i++; 
    pop(); 

    // to stop sketch when it reaches every x second //
    if(millis() % 2000 > 0 && millis() % 2000 <100) {
        restart();
    }
    console.log(millis());
}

function restart(){
    i = 0;
    setup();
} 