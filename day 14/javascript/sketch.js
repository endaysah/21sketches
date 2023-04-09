var myFont;

function preload(){
    myFont = loadFont("fonts/got-love.regular.otf")
}

function setup (){
    createCanvas(1000, 1000, WEBGL);
    background(0);

    //fill(0);
    //textFont(myFont);
    //textSize(300);
    //text("E", 400, 500);
}

function draw(){
    translate(-100, -50, -300);
    normalMaterial();

    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    fill(255);
    textFont(myFont);
    textSize(300);
    text("E", 450, 300);

    fill(232, 46, 176);
    textFont(myFont);
    textSize(300);
    text("E", 400, 300);
    //plane(200);
    pop();
}