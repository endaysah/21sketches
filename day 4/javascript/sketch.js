function setup(){
    createCanvas(1000, 1000);
}

function draw(){
    background(237, 34, 93);
    if(mouseIsPressed === true){
        noStroke();
        rect(50, 50, 175, 50);
    }
    else {
        noStroke();
        rect(50, 50, 50, 50)
        // rect(50, 100, 200, 50); //(posit. from left, posit. from right, size, size)
    }

    if(mouseIsPressed === true){
        noStroke();
        rect(50, 150, 175, 50);
    }
    else {
        noStroke();
        rect(50, 50, 50, 50)
        // rect(50, 150, 200, 50);
    } 

    if(mouseIsPressed === true){
        noStroke();
        rect(50, 250, 175, 50);
    }
    else {
        noStroke();
        rect(50, 50, 50, 50)
        // rect(50, 200, 200, 50);
    } 

    print(mouseIsPressed);
} 