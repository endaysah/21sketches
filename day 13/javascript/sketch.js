var cWidth = 1000;
var cHeight = 1000;
var i = 0; 

function setup(){
    createCanvas(cWidth, cHeight);
    background(126, 163, 171);
    frameRate(30) //no semicolon
    angleMode(DEGREES) //no semicolon
}

function draw(){
    push ();
    noFill ();
    stroke(255);
    //line(cWidth / 2, cHeight / 2, 300 + (i * 10), 500) //position, position, dimension, dimension
    //rect(cWidth / 3.5, cHeight / 3, 300 + (i * 10), 500)
    rect(cWidth / 5, cHeight / 7, 200 + (i * 5), 50 + (i * 5))
    stroke (0);
    rect(cWidth / 5, cHeight / 3, 200 + (i * 5), 50 + (i * 5))
    stroke(245, 66, 182);
    rect(cWidth / 5, cHeight / 2, 200 + (i * 5), 50 + (i * 5))
    stroke(232, 189, 46);
    rect(cWidth / 5, cHeight / 7, 5 + (i * 5), 410 + (i * 5))
    //square(cWidth / 5, cHeight / 4, 100 + (i * 100), 500 + (i * 100))
    //stroke (0);
    //square(cWidth / 5, cHeight / 3, 300 + (i * 10), 500 + (i * 10))

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