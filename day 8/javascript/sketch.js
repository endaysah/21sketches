let angle = 0;
//var myFont;

function preload(){
    //myFont = loadFont("YUNGA-Display.otf")
}

function setup (){
    createCanvas(1000, 1000, WEBGL);
    //background (240, 161, 212);
    //createLoop({ duration: 3, gif: true })

    //fill(255);
    //textFont(myFont);
    //textSize(300);
    //text("E", 400, 500)
}

function draw (){
   background (247, 239, 205);

   //rectMode(CENTER);
   //noStroke();
   //fill(0, 0, 255);
   //rotateZ(angle);
   //rect(0, 0, 150, 150);
   //angle += 0.07;

    noStroke();
    fill (0);
    rotateZ(angle);
    rect(0, 0, 150, 50);
    fill (0);
    rect(0, 100, 150, 50);
    fill (0);
    rect(0, 200, 150, 50);
    fill (0);
    rect(0, 0, 50, 200);

    noStroke();
    fill (255);
    rotateX(angle);
    rect(0, 0, 150, 50);
    fill (255);
    rect(0, 100, 150, 50);
    fill (255);
    rect(0, 200, 150, 50);
    fill (255);
    rect(0, 0, 50, 200);

    noStroke();
    fill (47, 40, 181);
    rotateY(angle);
    rect(0, 0, 150, 50);
    fill (47, 40, 181);
    rect(0, 100, 150, 50);
    fill (47, 40, 181);
    rect(0, 200, 150, 50);
    fill (47, 40, 181);
    rect(0, 0, 50, 200);

    noStroke();
    fill (181, 40, 85);
    rotateX(angle);
    rect(0, 0, 150, 50);
    fill (181, 40, 85);
    rect(0, 100, 150, 50);
    fill (181, 40, 85);
    rect(0, 200, 150, 50);
    fill (181, 40, 85);
    rect(0, 0, 50, 200);

    angle += 0.07;
    

}