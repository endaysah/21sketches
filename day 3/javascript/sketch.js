var myFont;
function preload(){
    myFont = loadFont("fonts/CHNOPixelCodePro-Regular.ttf")
}

function setup(){
    createCanvas(1000, 1000)
    background(153, 199, 194)

    fill (255);
    textFont(myFont);
    textSize(300);
    text("e", 400, 500);
}

function draw(){
    if (keyIsPressed === true) {
        fill(0);
        stroke(255)
      } else {
        fill(255);
      }
      textFont(myFont);
      textSize(300);
      text("e", 400, 500);
      describe('text turns black on keypress.'); 
}