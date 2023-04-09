var myFont;
function preload(){
    myFont = loadFont("fonts/CHNOPixelCodePro-Regular.ttf")
}

function setup(){
    createCanvas(1000, 1000, WEBGL);
    background(153, 199, 194)

    fill (255);
    textFont(myFont);
    textSize(300);
    text("e", 400, 500);
}

function draw(){
    background(0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    text("e", 400, 500);
} 
