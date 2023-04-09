var myFont;

function preload (){
    myFont = loadFont("fonts/AlteHaasGroteskBold.ttf");
}

function setup(){
    createCanvas(1000, 1000, WEBGL);
    /*background(107, 93, 158);*/
    /*textFont(myFont);*/

   /*  fill (225);
    textFont(myFont);
    textSize(200);
    text("E", 450, 500); */

    /* var k = 0;
    while (k < 200){
        fill(255);
        textFont(myFont);
        textSize(300);
        text("E", 500 + k, 500);
        k = k + 5;
    } */

    textFont(myFont);
    textSize(width/3);
    textAlign(CENTER, CENTER);  
}

function draw(){
    /* fill (225);
    textFont(myFont);
    textSize(200);
    text("E", 450, 500); */

    background(107, 93, 158);
    let time = millis();
    rotateX(time / 1000);
    rotateZ(time / 1234);
    fill(0);
    text('E', 0, 0);
    fill(255);
    text('E', 20, 20);
    //fill(245, 236, 66);
    //text('E', 20, 10);
}