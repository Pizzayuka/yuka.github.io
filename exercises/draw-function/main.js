function setup() {
    createCanvas(windowWidth, windowHeight);
    slider = createSlider(10, 1000, 0);
    slider.class("slider");
  }
  
  function draw() {
   randR = round(random([0],[255]));
     randG = round(random([0],[255]));
     randB = round(random([0],[255]));
  
  
    fill(randR, randG, randB);
    strokeWeight(4);
  ellipseMode(CENTER);
    ellipse(mouseX, mouseY,slider.value(), slider.value());
  }
  
  function mousePressed(){
    background("white")
  }