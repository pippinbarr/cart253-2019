### Core / CART 253 / Fall 2018 / Pippin Barr

# Object-Oriented Programming

---

## Today

- Today is about a key approach to organising code in software engineering
- It's called Object Oriented Programming (OOP)
- It's pretty great

---

## Welcome to the real (virtual) world!

- Object Oriented Programming (OOP) was a major revolution in software engineering
- It allows us to think about our programs with a different metaphor than the flow of control from one function to the next
- Instead we can think of programs in more "human" terms as little worlds of interacting objects

???

- Note that OOP is still not a particularly __natural__ way of interacting with a computer
- But it does at least allow us to think in terms of __systems__ of objects and agents, which is something
- Also note that thinking of programs as a flow of control between __functions__ is also still a highly valued way of programming called __functional programming__

---

## Objects

- So what are the "objects" in OOP?
- Well in our world, objects are distinct physical entities in the world (a person, a projector, a window, ...)
- Those objects have particular __properties__ (a person has an age, a height, a weight, ...)
- And they have particular __functions__ (a projector can be turned on, project an image, play a sound, ...)
--

- Objects in programming are the same except __we__ can define them
- And which properties and functions we choose to include in our implementation depend on what we're doing

---

## "OOP Brave New World!"

- So, we can start to think about programs as __worlds__ full of little __objects__ that have __properties__ and __functions__ and that can __interact__ with each other
- This is a big part of the solution to writing complicated code that interacts with itself and creates complex, interesting results
- To actually implement this kind of programming we need some new notation/syntax
- Which we will learn now!

???

- Quote: Miranda in William Shakespeare's __The Tempest__. Sort of.

---

Imagine a world...

--

A little white square that lives in inky blackness...

--

It moves through the world, bouncing off its top and bottom...

--

It encounters strange elongated creatures that seek to collide with it...

--

It bounces off them, asking itself... "why?"

--

Yes, that's right, it's a Pong ball.

---

## Designing with objects

- Thinking in objects can be a helpful way to design our programs
- It allows to ask what __things__ there are in the program
- And then to design __objects__ that will represent those things
- And then to create the code for those __objects__ to bring them to life

???

- Note that the objects don't have to represent visible, "solid" elements in our program, some of these things might be invisible.
- Often we create objects whose entire job is to manage all the other objects, for example (in a videogame this is often called the `GameManager` object)

---


## A Ball

- So if we start with this idea of a ball that bounces off walls and want to make it with OOP we need to ask what its __properties__ and __functions__ are... so... well?
--

- In terms of properties it will at least need a __position__, a __velocity__, and a __size__
- In terms of functions it will need to __move__ (including bouncing) and it will need to __display__ itself on the screen
--

- Note: In OOP we often call the __functions__ of an object its __methods__
- But JavaScript is pretty keen on __functions__ so we can continue to use that term, just be aware you might hear people talk about "methods" and they mean the functions of an object

---

## Let there be Ball!

```javascript
let ball;

function setup() {
  createCanvas(640,480);
  ...
}
```
--

- We want to make a Ball that knows how to do all that stuff in our program
- Previous we would have created an explicit object, but they don't know how to __do__ anything, they just have properties (for now)
- We want to be able tell our Ball to "move!" and "display yourself!"
- This would be a new __type__ of value (or data), and we'd store it in a variable...

---

## Let there be Ball!

```javascript
let ball;

function setup() {
  createCanvas(640,480);
  ball = new Ball();
}
```

- This is what it looks like when we create a new __object__ in JavaScript (and many other languages) using OOP
- Importantly we use the special word .hi[`new`] to say we want to make a __new object__
- And we use a special function with the name of the __type__ of object, .hi[`Ball()`] to create it
- That function is called the __constructor__ (it __creates__ a Ball in this case)
- Note it is traditional for the constructor to start with a __capital letter__ (`Ball()` not `ball()`)

---

## Let there be Ball! :(

```javascript
let ball;

function setup() {
  createCanvas(640,480);
  ball = new Ball();
}
```

- When we run this, the JavaScript console tells us something helpful:

`Ball is not defined`

- Because it isn't
- Right now, our program doesn't know how to create a new Ball
- Where previously we might have explicitly created an object with properties, now we're going to tell our program __how to create a new Ball__ instead

---

## Ball? What Ball?

- So, our program doesn't know what a `Ball` is
- It knows about numbers, strings, booleans, images, Audio...
- But it doesn't know about `Ball`
- We need to tell JavaScript what a `Ball` is and how it works
- We need to __define the how a Ball works__
- In OOP this is called __defining a class__
- A __class__ specifies how some type of object in our program, like a ball, can be created and used
- So we need a `Ball` class

---

```javascript
function Ball() {
  this.size = 10;
  this.speed = 5;
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
}

Ball.prototype.update = function () {
  // Move the ball here
}

Ball.prototype.display = function () {
  // Display the ball here
}

Ball.prototype.reset = function () {
  // Reset the ball here
}
```

- This is what a __class__ definition looks like in JavaScript
- It's a __function__ that knows how to create a Ball with properties
- And then a set of __methods__ that can tell the Ball to do things

---

## Constructor

```javascript
function Ball() {
  this.size = 10;
  this.speed = 5;
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
}
```

- This first part of our class definition is a function called the __constructor__
- Any properties this kind of object is going to have should specified here
- __Note how the properties have the special word `this` in front of them!__
- When we're defining a __class__ like this, we refer to the object that will be created from the class as `this`
- And so we set the properties of `this`

---

## Constructor

- In fact, we can now see that it's the constructor function `Ball()` we call when we want to make a new ball, e.g.

```javascript
let ball = new Ball();
```

- As we saw, it sets all the Ball's properties to default values right now

---

## Properties

```javascript
this.size = 10;
this.speed = 5;
this.x = 0;
this.y = 0;
this.vx = 0;
this.vy = 0;
```

- We can see there are __properties__ like speed, size, position and velocity
- Again, note that they are all being set using the special `this` word because each of the properties is a variable that belongs to __this__ hypothetical object that would be created from the class

---

## Methods

```javascript
Ball.prototype.update = function () {
  // Move the ball here
}

Ball.prototype.display = function () {
  // Display the ball here
}

Ball.prototype.reset = function () {
  // Reset the ball here
}
```

- We can see there are three __methods__ like `update` and `display` and `reset`
- Each method is a __function__ that we define in the special way as above
- For now it's probably best to just mimic this syntax rather than dive too deep into JavaScript and prototypes, but do read about it online if you want to

???

- As we can see, each method is a __property__ that is assigned a function
- However these properties are not directly on our __Ball__ class
- Instead they are defined on a property of the Ball class called `prototype`
- This is because JavaScript secretly isn't quite a true object-oriented language
- There is a lot of information online you can read about prototypes and JavaScript
- But it's also okay to not pay attention for now

---

## A Ball class

```javascript
function Ball() {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.size = 10;
  this.speed = 5;
}

Ball.prototype.update = function () {
  // Move the ball here
}

Ball.prototype.display = function () {
  // Display the ball here
}

Ball.prototype.reset = function () {
  // Reset the ball here
}
```

- So, this is a definition of a `Ball` class with properties and methods

---

## Where to put it?

- This code is what we needed for `new Ball()` to work
- Because we've defined `Ball()`, the __constructor__ function that creates Ball objects
- We __can__ put this class definition in `script.js` as well
--

- __But__ it's probably better to put it in a __new file__ with the name of the class - in this case `Ball.js`
- If we do that we need to also go into `index.html` and add a script tag that includes `Ball.js` as well, so that our script can "see" it

---

## Adding the class in a new file

- Create a file in the `js/` folder called `Ball.js` (note the capital)
- Put the Ball class code into that file and save it

```
project/
  index.html
  assets/
  css/
  js/
    libraries/
    Ball.js
    script.js
```

- Add a `<script>` tag referencing the `Ball.js` into `index.html` __before__ `script.js`

```html
<!-- My script(s) -->
<script src="js/Ball.js"></script>
<script src="js/script.js"></script>
```

---

## Using the Ball class

```javascript
let ball;

function setup() {
  createCanvas(640,480);
  ball = new Ball();
}

function draw() {
  background(0);
  ball.update();
  ball.display();
}
```

- We create our ball __object__ by using the Ball __class__'s __constructor__ function
- Then we can call the ball's __methods__ (functions) using the same __dot notation__ we've used to access the __properties__ of objects before

---

## For the record: Accessing objects' properties

```javascript
let ball;

function setup() {
  createCanvas(640,480);
  ball = new Ball();
}

function draw() {
  background(0);
  ball.size = ball.size + 1;
  ball.update();
  ball.display();
}
```

- We __can__ directly access the ball's properties using standard dot notation too
- Some people will tell you __not__ to do this kind of "meddling" inside an object
- Instead they would suggest you should write a __method__ to handle anything you want to do with the object (like change its size)
- We won't be that strict in this course, but be aware people can feel that way

---

## All together...

__Slide notes (`P` in slide view) have all three files updated in this way__

???

`index.html`
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>

  <!-- CSS stylesheet(s) -->
  <link rel="stylesheet" type="text/css" href="css/style.css" />

  <!-- Library script(s) -->
  <script src="js/libraries/p5.min.js"></script>

  <!-- My script(s) -->
  <script src="js/Ball.js"></script>
  <script src="js/script.js"></script>
</head>

<body>
  <!-- HTML would go here if needed. -->
</body>

</html>
```

`js/Ball.js`
```javascript
function Ball() {
  this.size = 10;
  this.speed = 5;
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
}

Ball.prototype.update = function () {
  // Move the ball here
}

Ball.prototype.display = function () {
  // Display the ball here
}

Ball.prototype.reset = function () {
  // Reset the ball here
}
```

`js/script.js`
```javascript
let ball;

function setup() {
  createCanvas(640,480);
  ball = new Ball();
}

function draw() {
  background(0);
  ball.update();
  ball.display();
}
```

---

## Let there be Ball!

- If we run our code with `Ball()` added in...
--

- Nothing happens.
- Because...
--

- Because the Ball we defined doesn't do anything and has no representation on the screen.
- We need to improve the class so we get more interesting Balls.

---

## Activity

__Define the three methods of the `Ball` class__

- The `update` method should update the position with the velocity
- The `display` method should draw the Ball on screen as a rectangle using the position and size properties
- The `reset` method should set the position to the centre of the canvas
- Remember to use `this` whenever you refer to properties of the class
- (Answer in the slide notes)

???

```javascript
function Ball() {
  this.size = 10;
  this.speed = 5;
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
}

Ball.prototype.update = function () {
  this.x += this.vx;
  this.y += this.vy;
}

Ball.prototype.display = function () {
  rect(this.x,this.y,this.size,this.size);
}

Ball.prototype.reset = function () {
  this.x = width/2;
  this.y = height/2;
}
```

---

## Go Ball!

- Now when we run the program...
--

- It displays, but nothing happens
- Because...
--

- The starting properties of the ball give it a velocity of 0
- So it won't move

---

## Activity

__Set more interesting starting properties in the `Ball` class__

- Set the starting x and y position to the centre of the canvas (you can use `width` and `height` safely)
- Set the starting x and y velocity to be the `speed` property
- Remember to this `this` whenever you refer to any property of the Ball class
- (Answer in the slide notes)

???

```javascript
function Ball() {
  this.size = 10;
  this.speed = 5;
  this.x = width/2;
  this.y = height/2;
  this.vx = this.speed;
  this.vy = this.speed;
}

Ball.prototype.update = function () {
  this.x += this.vx;
  this.y += this.vy;
}

Ball.prototype.display = function () {
  rect(this.x,this.y,this.size,this.size);
}

Ball.prototype.reset = function () {
  this.x = width/2;
  this.y = height/2;
}
```

---

## Go Ball!

- Now when we run the program...
--

- The ball moves!!
- And it keeps going...
- Off the screen...
--

- In Pong we want the ball to bounce on the upper and lower edges
- And when the ball goes off the left or right edges we want to reset it

---

## Activity

__Improve the `update` method to include Pong behaviour__

- Reverse the ball's y velocity if it touches the top or bottom of the screen
- Reset the ball's position if it goes off the left or right of the screen (remember you can use the `reset` method, but you need to use `this` to call it)
- (Example answer in the notes)

???

```javascript
Ball.prototype.update = function () {
  this.x += this.vx;
  this.y += this.vy;

  if (this.x < 0 || this.x > width) {
    this.reset();
  }

  if (this.y < 0 || this.y > height) {
    this.vy = -this.vy;
  }
}
```

- Again, notice how if we we want to call a method of a class from inside the class we put `this` in front of it because the method is a __method of the hypothetical object being created from the class__

---

## All together now...

__Complete Ball.js code to this point is in the notes__ (`P` in slide view)

???

`Ball.js`:

```javascript
function Ball() {
  this.size = 10;
  this.speed = 10;
  this.x = width/2;
  this.y = height/2;
  this.vx = this.speed;
  this.vy = this.speed;
}

Ball.prototype.update = function () {
  this.x += this.vx;
  this.y += this.vy;

  if (this.x < 0 || this.x > width) {
    this.reset();
  }

  if (this.y < 0 || this.y > height) {
    this.vy = -this.vy;
  }
}

Ball.prototype.display = function () {
  rect(this.x,this.y,this.size,this.size);
}

Ball.prototype.reset = function () {
  this.x = width/2;
  this.y = height/2;
}
```

---

## It's a Ball!

- So the Ball class is now defined enough that we can create a ball and call its methods to have it move and bounce on the screen
- That is, we're back to where we were with a simpler version of a JavaScript Object where we defined all this stuff explicitly
- But the true magic of Object Oriented Programming is the idea that we can have __more than one object of the same type__
- Now that our program knows how to make a Ball, we can make __more than one__
- Each time we make a new Ball __object__ from the Ball __class__ using `new`

---

## Multiball action!

```javascript
let ball1;
let ball2;

function setup() {
  createCanvas(640,480);
  ball1 = new Ball();
  ball2 = new Ball();
}

function draw() {
  ball1.update();
  ball2.update();
  ball1.display();
  ball2.display();
}
```
--

__DANG IT!__
--

What went wrong?
--

Yeah. Both balls have the same position and velocity.
--

How do we fix it?
--

Yeah. Arguments in the `Ball()` function (the __constructor__) that tell the ball where to start.

---

## Building a better constructor

- It would make more sense to be able to pass some parameters to our `Ball()` constructor so we can say, for example, where we want our new ball to start and how fast it should be moving, and how big it is, etc...
- We can add arguments to our constructor in the same way know already because it's just another function!

---

## Activity

__Add the arguments to the Ball constructor and assign them to the correct properties__

- An x and y position
- An x and y velocity
- A size
- A speed
- (Answer in the slide notes)

???

```javascript
function Ball(x,y,vx,vy,size,speed) {
  this.size = size;
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.vx = this.speed;
  this.vy = this.speed;
}
```

---

## True multiball action!

Now we can make our two `Ball` objects and give their constructors __different parameters__ so they behave distinctly...

```javascript
let ball1;
let ball2;

function setup() {
  createCanvas(640,480);
  ball1 = new Ball(width/3,height/2,5,5,10,5);
  ball2 = new Ball(2*width/3,height/2,-5,-5,20,5);
}

function draw() {
  background(0);
  ball1.update();
  ball2.update();
  ball1.display();
  ball2.display();
}
```

__They both act like bouncing balls!__

---

## Objects and Classes

- Let's go over these ideas again now we know what they look like...
- A `class` is the __abstract definition__ of what something (like a ball) can do, including properties and method
- So the class `Ball` defines the __idea__ of a ball
- We define classes in JavaScript by creating a __constructor function__ with the name of the class
- An __object__ is a specific __instance__ of a class that exists in your running program
- We create __instances__ or __objects__ of a __class__ using `new` and the __constructor__
- So the variable `ball1` contains an __object__ that actually exists and does things in your program (like bounce around), so does `ball2`

---

## Multiple classes and objects

- Generally speaking when we're making a little world we probably want more than __one__ kind of thing
- Pong, for example, has __two__ kinds of things...
- Our current Ball has some of the behaviour of a Pong ball already, but what is it missing?
--

- A Paddle, so...
- We need to add __another class definition__, this time for a `Paddle`
- Maybe it could have the option of being controller by the mouse or the arrow keys?
- Let's do it?

???

- The Ball right now is missing the ability to bounce off paddles (in no small part because they don't exist yet!)
- To add a Paddle we'll need to define a new class

---

## Paddles

- To get our game of Object-Oriented Pong working, we'll need a class that defines paddles
- So, again, we need to think about what that kind of class would need...
--

- Paddles have positions, velocities, and dimensions... (properties)
- Paddles can be controlled by the player, move, and display on screen (methods)
- Paddles also introduce the idea of bouncing Balls in the opposite direction if they collide (another method)

---

## Basic paddle class

```javascript
function Paddle(x,y,w,h,speed) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  this.speed = speed;
}

Paddle.prototype.handleInput = function() {
}

Paddle.prototype.update = function() {
}

Paddle.prototype.display = function() {
}
```

- We'll actually add a `handleBounce()` method to our `Ball` class a bit later
- For now, let's get the controls working.
- How would we do that?

---

## Defining input keys

```javascript
function Paddle(x,y,w,h,speed,downKey,upKey) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  this.speed = speed;
  this.downKey = downKey;
  this.upKey = upKey;
}
```

- Since we'll make more than one Paddle, we should assign its control keys in the constructor
- We'll need to decide whether this should be a key code or a character...
- For this one we'll use a key code

---

## Handling input

- Now we need to define the `handleInput` method that handles input for this paddle
- What will it need to do?
--

- It will need to check which keys are pressed and set the paddle's velocity accordingly

---

## `handleInput` definition

```javascript
Paddle.prototype.handleInput = function() {
  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) {
    this.vy = this.speed;
  }
  else {
    this.vy = 0;
  }
}
```

- We can handle input in the way we've seen before
- By using `keyDown()` to check whether this paddle's control keys are being pressed
- And changing its velocity if so

---

## Updating

- Now we need to define how the paddle gets updated each frame, just like the ball
- Mostly that means it needs to...
--

move.

---

## `update` definition

```javascript
Paddle.prototype.update = function() {
  this.y += this.vy;
  this.y = constrain(this.y,0,height-this.h);
}
```

- Our `update` method for our paddle moves it according to velocity
- And while we're here we can `constrain()` the paddle so it doesn't go off the screen...

---

## Displaying the paddle

- Finally we need to actually be able to see our paddle on the screen
- Otherwise the game will be a bit hard to play
- So we need to...
--

display it using a shape (or an image).

---

## `display` definition

```javascript
Paddle.prototype.display = function() {
  fill(255);
  rect(this.x,this.y,this.w,this.h);
}
```

- Just a rectangle will do nicely for now

---

## Adding a paddle

```javascript
let ball1;
let ball2;
let leftPaddle;

function setup() {
  createCanvas(640,480);
  ball = new Ball(width/3,height/2,5,5,10,5);
  ball2 = new Ball(2*width/3,height/2,-5,-5,20,5);
  leftPaddle = new Paddle(0,height/2,10,60,10,DOWN_ARROW,UP_ARROW);
}

function draw() {
  background(0);

  leftPaddle.handleInput();

  ball.update();
  ball2.update();
  leftPaddle.update();

  ball.display();
  ball2.display();
  leftPaddle.display();
}
```

---

## Ghost Pong!

- Actually this game is a lot like Pippin's __Ghost Pong__ game
- Because the ball doesn't bounce off the paddle!
- This makes sense given that there's nowhere in our code that defines what should happen if the ball and paddle overlap
- So we'll need to introduce another method to handle this situation

---

## Bouncing

- We should be able to check for collisions between a Ball and a Paddle
- It's debatable whether the method to handle this should be in the Ball class or the Paddle class
- But let's put it in the Ball class this time (I imagine it as being the Ball deciding how to bounce when it hits something)
- It will need to do what?
--

- Check whether the ball and paddle overlap, and reverse the x velocity of the ball if so
- Primitive, but enough for now

---

## `handleCollision` definition

In `Ball.js`:
```javascript
Ball.prototype.handleCollision = function(paddle) {
  if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
    if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
      this.x -= this.vx;
      this.vx = -this.vx;
    }
  }
}
```

???

- Note that the line `this.x -= this.vx` is used to move the ball back to where it was in the previous frame so it's no longer intersecting with the paddle - this will help it not become embedded in the paddle!
- (Though it's not perfect.)

---

## All together!!!

__See game code for "Basic OO Pong"__

---

## One last time

- A __class__ is a definition of how some kind of object behaves
- A class defines this behaviour via __properties__ (which are like variables specifically for that thing) and __methods__ (which are like functions specifically for that thing)
- An __object__ is a specific __instance__ of a class that is created when your program runs, it is a "real thing" in the program with proper values in its properties and which can meaningfully have its methods called to make something happen
- `Paddle` is a __class__ (the idea of a how a paddle words), but `leftPaddle` and `rightPaddle` are __objects__ or __instances__ of the `Paddle` class - they actually exist when the program runs
- The __objects__ we create with a __class__ are in fact __JavaScript__ objects, it's "just" a special and incredibly organised way of creating them

---

## Other people's objects

- Finally, objects are also amazing because __other people__ can define them __for__ us to save us work
- For example when we use `new Audio()` we're creating an object that represents an audio file in our code, which we can then `.play()` and `.pause()` and set the `.loop` property of...
- In fact, this is how __libraries__ in programming very often work: they create some special __object__ which you then use to access the powers of the library

---

# Fin
