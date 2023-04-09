var myFont;
function preload(){
    myFont = loadFont("fonts/CHNOPixelCodePro-Italic.otf");
}

function setup(){
    createCanvas(1000, 1000);
    background(242, 174, 195);

    /*fill(0);
    stroke(255);
    strokeWeight(3);
    textFont(myFont);
    textSize(700);
    text("E", 400, 500);*/

    var k = 0; 
    while (k < 200){
        fill(255);
        stroke(0);
        strokeWeight(3);
        textFont(myFont);
        textSize(700);
        text("E", 400 - k, 700);
        k = k + 5;
    }

}