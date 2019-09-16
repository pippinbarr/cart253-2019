### Physics / CART 253 / Pippin Barr

# Motion

---

## In this module

- Velocity
- Acceleration
- Constraints

---


## We've seen things move

```javascript
let x;
let y;

function setup() {
  createCanvas(500,500);
  x = 0;
  y = height/2;
}

function draw() {
  x = x + 1;
  ellipse(x,y,50,50);
}
```

- That is, if we have a variable that determines the __position__ of something (like `x`)...
- ... and if we __change that position__ each frame
- ... and then __draw the thing__ in question each frame
- ... it will (appear to) __move__

---

## Physics!

- This is exactly the kind of mathematics involved in physics
- And there is a __name__ for the quantity you add to a position each time-step (frame) to make it move
- That name is...
--
 __velocity__
--

- Each step of time (frame) we add the __velocity__ to the __position__ to create movement in space
- __Velocity__ determines the __rate__ that an object's __position__ changes __over time__


---

## Velocity

```javascript
let x = 0;
let y = 0;
let vx = 2;
let vy = 2;

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
}

function draw() {
  x = x + vx;
  y = y + vy;
  ellipse(x,y,50,50);
}
```

???

- Notice again how the code is now __longer__ than it used to be when we introduce velocity as a variable (instead of as a hard coded number)
- But notice now how the velocity can __change__ while the program is running!
- That means that things can __change direction while they move__ for instance!
- Or __accelerate__

---

## Velocity can be negative

- Because positions on the grid of our canvas __increase to the right__ and __decrease to the left__ we use a __positive x velocity__ to move to the right and a __negative x velocity__ to move to the left
- Similarly, we use a __positive y velocity__ to move down and a __negative y velocity__ to move up
- Try inputting different velocities into the previous example and notice which direction the shape moves

---

## Speed

- While __velocity__ is positive or negative based on direction, the __speed__ something travels at is only ever positive (it doesn't have a direction, just a magnitude)
- Rather than hard-coding it, we should have a variable called `speed`
- And we can set the velocity to __positive or negative `speed`__ based on the direction we want our object to go

---

## Velocity and speed

```javascript
let x = 0;
let y = 0;
let vx = 0;
let vy = 0;
let speed = 2;

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
  vx = speed;
  vy = -speed;
}

function draw() {
  x = x + vx;
  y = y + vy;
  ellipse(x,y,50,50);
}
```

---

## (Advanced-ish) Acceleration!

- __Acceleration__ determines the __rate__ that an object's __velocity__ changes over time
- Implementing acceleration can make things look more "realistic" because most things in the real world don't change direction or start moving instantaneously
- Except UFOs

---

## Acceleration

```javascript
let x = 0;
let y = 0;
let speed = 2;
let vx = 0;
let ax = 0.25; // Acceleration

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
  vx = speed;
}

function draw() {
  // Change velocity based on acceleration
  vx = vx + ax;
  // Change position based on velocity
  x = x + vx;
  ellipse(x,y,50,50);
}
```

???

- Note that we're limiting to the x-axis just to keep the code a little smaller
- What happens if you start with a positive velocity and a negative acceleration?
- Play around with these numbers!!

---

## Acceleration with a limit

```javascript
let x;
let y;
let speed = 10;
let vx;
let ax = 0.1;

function setup() {
  createCanvas(500,500);
  x = 0;
  y = height/2;
  vx = 0;
}

function draw() {
  vx = vx + ax;
  vx = constrain(vx,-speed,speed);
  x = x + vx;
  ellipse(x,y,50,50);
}
```

???

- The `constrain()` function takes __three parameters__

1. The __value__ to constrain - mostly likely a variable or an expression.
2. The lower limit. This is the smallest possible value allowed.
3. The upper limit. This is the highest possible value allowed.

```javascript
let x = constrain(y,0,100); // Guarantees x will be between 0 and 100, no matter what value y has
```

- By constraining our velocity calculation to be between `-speed` and `speed` we're guaranteeing that the the object won't accelerate to a velocity faster than its maximum speed

---

## Physics!

- That is the basics of honest-to-goodness physics in programming
- It's very satisfying to program your own physics, and also quite a good way to actually understand physics in the first place
- There are limits, though
- Most of the time when people make games or anything that has physics they tend to use pre-programmed physics rather than programming it themselves
- Because it's hard to get some of it just right
- Nonetheless, it's a great thing to understand at least the basics of


---

# Fin.
