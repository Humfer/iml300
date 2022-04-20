/*This is a tumbleweed simulator! For my project 3, I want to do a sort of Wild West theme. I imagine that these weeds so tumble by as you scroll along the page. They bounce across the screen and reset when they stop bounce out of frame. As the sketch continues, the tumblweeds will become more and more dispersed. Feel free to change the amount of tumbleweeds. I got the bouncing animation from Jeff Thompson
 --> https://www.youtube.com/watch?v=rsOnrL2bg0o
 */

let dia = 50; //tumbleweed average diameter
let position; //where the tumbleweed starts
let speed; //the speed at which the tumbleweed moves
let gravity; //the speed at which the tumbleweed falls
let bounciness = 0.8; //how high the tumbleweed bounces back up
let tumbles = []; //array of tumbles
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight*1.05);
  canvas.position(0,0);
canvas.style('z-index', '-1');
  //creating different tumbleweeds. You can play with the number of tumbleweeds by changing the inequality on second i. 
  for (i = 0; i < 3; i++) {
    tumbles[i] = new Weed(0, dia * random(1, 7));
  }
}

function draw() {
   background(0);
  //drawing the tumbleweeds
  for (let i = 0; i < tumbles.length; i++) {
    tumbles[i].move();
  }
}

class Weed {
  constructor(x, y) {
    //sets "position" to whatever x and y values were used in the instantiation in setup
    this.x = x;
    this.y = y;
    this.position = createVector(x, y);
    //sets a gravity for the y, gravity does not apply to x
    this.gravity = createVector(0, 0.2);
    //sets the speed at which the weed is moving right
    this.speed = createVector(3.5, 0);
  }
  move() {
    // the gravity is added to speed to make the tumbleweed drop at the rate of gravity
    this.speed.add(this.gravity);
    //the speed then affects the position to make the weed move
    this.position.add(this.speed);
    //if the tumbleweed hits the canvas floor, the speed will reverse and the ball will move/bounce up. The weed will also begin to slow down to the right
    if (this.position.y + dia / 2 > height) {
      this.position.y = height - dia / 2;
      this.speed.y *= -bounciness;
      this.speed.x *= bounciness;
    }
    if(this.speed.x < 1){
     this.position.x = this.x;
      this.position.y = this.y + random(-2,3);
      this.speed = createVector(3, 0);
    }
    //the tumbleweed
    fill(255);
    noStroke();
    noFill();
    stroke(255);
    strokeWeight(2);
    push();
    translate(this.position.x, this.position.y);
    for (i = 0; i < 10; i++) {
      rotate(random(0, 90));
      ellipse(0, 0, random(10, 40), random(10, 70));
    }
    pop();
  }
}
