function setup() {
    createCanvas(1358, 642);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    fill("red");
    
    if(mouseIsPressed){
       rect(mouseX, mouseY, 20, 35);
       }
  }