let slider;
var myFont;
function preload(){
    //myFont = loadFont("fonts/Roletta-Regular.ttf")
}

function setup() {
  createCanvas(1000, 1000);
  // hue, saturation, and brightness
  colorMode(HSB, 255);
  // slider has a range between 0 and 255 with a starting value of 127
  slider = createSlider(0, 255, 127);
  
}

function draw() {
  background(0);
  strokeWeight(2);

  // Set the hue according to the slider
  stroke(slider.value(), 255, 255);
  fill(slider.value(), 255, 255, 127);
  //ellipse(360, 200, 200, 200);
  rect (400, 300, 175, 75);
  rect (400, 450, 175, 75);
  rect (400, 600, 175, 75);
  rect (400, 300, 50, 375);
}