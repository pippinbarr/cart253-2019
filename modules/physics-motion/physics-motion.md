### Physics / CART 253 / Fall 2018 / Pippin Barr

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

- This is basically the kind of mathematics involved in physics
- And there is a __name__ for the quantity you add to a position each time-step (frame) to make it move
- That name is...
--
 __velocity__
--

- Each step of time (frame) we add the __velocity__ to the __position__ to create movement in space
- __Velocity__ determines the __rate__ that an object's __position__ changes


---

## Velocity

```javascript
let x;
let y;
let vx;
let vy;

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
  vx = 2;
  vy = 2;
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
- Try inputting different velocities into the previous example in `setup()` and notice which direction the shape moves

---

## Speed

- While __velocity__ is positive or negative based on direction, the __speed__ something travels at is only ever positive (it doesn't have a direction, just a magnitude)
- Rather than hard-coding it, we should have a variable called `speed`
- And we can set the velocity to __positive or negative `speed`__ based on the direction we want our object to go

---

## Velocity and speed

```javascript
let x;
let y;
let vx;
let vy;
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

- __Acceleration__ determines the __rate__ that an object's __velocity__ changes

---

## Acceleration

```javascript
let x;
let y;
let speed = 2;
let vx;
let ax = 0.25;

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
  vx = constrain(vx + ax,-speed,speed);
  x = x + vx;
  ellipse(x,y,50,50);
}
```

???

- The `constrain()` function takes __three parameters__

1. The __expression__ to constrain. It will calculate the number this expression results in, and then constrain it.
2. The lower limit. This is the smallest possible value you want the expression to result in.
3. The upper limit. This is the highest possible value you want the experience to result in.

- By constraining our velocity calculation to be between `-speed` and `speed` we're guaranteeing that the the object won't accelerate to a velocity faster than its maximum speed

---

## Physics!

- That is the basics of honest-to-goodness physics in programming
- It's very satisfying to program your own physics, and also quite a good way to actually understand physics in the first place
- Be aware, though, that much of the time when people make games (for example) they tend to use pre-programmed physics rather than programming it themselves (because it's kind of hard to get some of it just right)


---

# Fin.
