var bgColor; // for random bckg


function setup (){
    createCanvas(1000, 1000);
    bgColor = color(random(255), random(255), random(255)); // for random bckg
    //rectMode(CENTER);
   
}

function draw (){
    background(bgColor); // for random bckg
    //background(231, 218, 237);
    //fill(244, 122, 158);
    //rect(mouseX, 100, mouseX, 100);
    //fill (244, 122, 158);
    //rect(100, mouseY, 100, mouseY);
   
    /*noStroke();
    fill (244, 122, 158);
    rect (400, 300, 175, 25);

    noStroke();
    fill (244, 122, 158);
    rect (400, 400, 175, 25);

    noStroke();
    fill (244, 122, 158);
    rect (400, 500, 175, 25);

    noStroke();
    fill (244, 122, 158);
    rect (400, 300, 25, 200); 



    noStroke(); // top bar
    fill (255);
    rect (450, 325, 100, 25);

    noStroke(); // left vertical bar
    fill (255);
    rect (425, 350, 25, 125);
    
    noStroke(); // middle bar
    fill (255);
    rect (450, 400, 100, 25);

    noStroke(); // right vertical bar
    fill (255);
    rect (550, 350, 25, 75);

    noStroke(); // bottom bar
    fill (255);
    rect (450, 475, 125, 25); */

    if (mouseIsPressed === true) {
        noStroke();
        fill (255, 146, 3);
        //rect (450, 425, 100, 25);
        rect (450, 325, 100, 25);

        noStroke();
        fill (3, 255, 32);
        //rect (425, 450, 25, 125);
        rect (425, 350, 25, 125);
        
        noStroke();
        fill (3, 188, 255);
        //rect (450, 500, 100, 25);
        rect (450, 400, 100, 25);

        noStroke();
        fill (255, 3, 49);
        //rect (550, 450, 25, 75);
        rect (550, 350, 25, 75);

        noStroke();
        fill (255, 3, 167);
        //rect (450, 575, 125, 25);
        rect (450, 475, 125, 25); 

    } else {
        noStroke(); // top bar
        fill (255);
        rect (400, 300, 175, 25);

        noStroke(); // middle bar
        fill (255);
        rect (400, 400, 175, 25);

        noStroke(); // bottom bar
        fill (255);
        rect (400, 500, 175, 25);

        noStroke(); // vertical bar
        fill (255);
        rect (400, 300, 25, 200);
      }
    
}

function mousePressed(){
    bgColor = color(random(255), random(255), random(255)); // for random bckg
    
}