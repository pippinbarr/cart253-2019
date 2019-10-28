// Basic OO Pong
// by Pippin Barr
//
// A primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
let ball;
let balls = [];
let leftPaddle;
let rightPaddle;

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(640, 480);
  // Create the various balls and add them to the balls array
  let invisiBall = new InvisiBall(width / 2, height / 2, 5, 5, 10, 5);
  balls.push(invisiBall);
  let noiseBall = new NoiseBall(width / 2, height / 2, 5, 5, 10, 5);
  balls.push(noiseBall);
  let wrapBall = new WrapBall(width / 2, height / 2, 5, 5, 10, 5);
  balls.push(wrapBall);
  let standardBall = new Ball(width / 2, height / 2, 5, 5, 10, 5);
  balls.push(standardBall);
  // Reset and set the current ball to a random ball
  this.chooseBall();
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87);
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
//
// Note how the ball can use update, isOffScreen, handleCollision, and display no matter
// which of the extended versions it might be at any given time because all the
// children ultimately have Ball as their parent.
function draw() {
  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  if (ball.isOffScreen()) {
    // When the ball goes off screen choose a new ball type
    this.chooseBall();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  rightPaddle.display();
}

// chooseBall()
//
// Choose a random ball from the balls array and reset it
// Meaning that ball will contain a random kind of ball
// which will behave according to its definition in its specific class
// (e.g. Ball, WrapBall, NoiseBall, or InvisiBall)
function chooseBall() {
  ball = random(balls);
  ball.reset();
}