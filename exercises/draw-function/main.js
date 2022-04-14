
var slider;

function setup() {
    let canvas =  createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);

  
    slider = createSlider(10, 1000, 0);
    slider.class("slider");
  }
  
  function draw() {
   randR = round(random([0],[255]));
     randG = round(random([0],[255]));
     randB = round(random([0],[255]));      
  
  
    fill(randR, randG, randB);
    strokeWeight(2);
  // ellipseMode(CENTER);
    ellipse(windowWidth/2, windowHeight/2,slider.value(), slider.value());
  }
  
  function mousePressed(){
    background("black")
  }