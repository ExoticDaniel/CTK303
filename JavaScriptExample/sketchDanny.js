let water = [];
let i1;

function preload (){

   i1 = loadImage("ImageAssets/LawnPvZ.png");
   i2 = loadImage ("ImageAssets/Sunflower.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  imageMode(CENTER);
  // Spawn one object
  //cars = new Car();
}

function draw() {
  
  background("lightgreen");
  image(i1, windowWidth / 2, windowHeight / 2);
  image(i2, width / 2, height / 2, 50, 50);
 
  water.push(new Car());
  for (let i = 0; i < water.length; i++) {
    water[i].display();
    water[i].move();
    if (water[i].o <= 0) {
      water.splice(i, 1);
    }
  }

  fill("white");

  //text(cars.length, 100, 100 ) ;
}

class Car {
  // constructor
  constructor() {
    // this.y = height-50 ;  // initialize your attributes here
    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(random(2, 10), random(2, 10));
    this.o = random(200, 255);
    this.size = random(10, 50);
  }

  // methods

  display() {
    fill(225, this.o);
    fill("blue");
    textSize(this.size);
    text("water", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    this.o = this.o - 5;
  }
}
