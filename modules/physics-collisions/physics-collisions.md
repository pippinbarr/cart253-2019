### Physics / CART 253 / Pippin Barr

# Collisions

---

## In this module

- Simple collisions with the edges of the canvas
- More accurate collisions with the edges of the canvas

---

## We've seen things move

- If we have a __position__ of an element (its x,y coordinates)...
- ... and we have a __speed__ that element can move at...
- ... and we have a current __velocity__ (in x and y) it is travelling at...
- ... and we update the position based on the velocity...
- Then we have motion over time

---

```javascript
let x;
let y;
let vx;
let vy;
let speed = 2;
let squareSize = 50;

function setup() {
  createCanvas(500,500);
  x = width/4;
  y = height/2;
  vx = speed;
  vy = speed;
}

function draw() {
  x += vx;
  y += vy;
  rect(x,y,squareSize,squareSize);
}
```

---

## But physical objects have a physical presence

- This is good, but in many circumstances when things move they should bump into each other
- What happens in a collision?
--

- Most simply put, the colliding elements __change their velocities__
--

- It could be super complex, involving mass, density, etc.
- But for out purposes let's think of a frictionless, mass-less environment

---

## Two things hit each other...

- What should we do when an object collides with something?
- Essentially we should __reverse its velocity__ on the axis of the collision
- So if it hit something on its left or right side, we should reverse its __x velocity__
- And it it hit something on its top or bottom, we should reverse its __y velocity__

---

## Collision detection with canvas edges

```javascript
let x;
let y;
let vx;
let vy;
let speed = 2;
let squareSize = 50;

function setup() {
  createCanvas(500,500);
  x = width/4;
  y = height/2;
  vx = speed;
  vy = speed;
  rectMode(CENTER);
}

function draw() {
  x += vx;
  y += vy;
  rect(x,y,squareSize,squareSize);
}
```

- What kind of thing do we need to add?

???

- We need to add __conditionals__ that check whether we hit the walls after we've moved our shape...

---

```javascript
if (x < 0 || x > width) {
  vx = -vx;
}

if (y < 0 || y > height) {
  vy = -vy;
}
```

- If we insert this into our `draw()` loop after calculating the latest value of `x` then our rectangle will appear to __bounce__ off the walls

???

- If it's easier to think about, you could instead multiple by -1

```javascript
if (x < 0 || x > width) {
  vx = vx * -1;
}

if (y < 0 || y > height) {
  vy = vy * -1;
}
```

---

## Accounting for shape

```javascript
if (x - squareSize/2 < 0 || x + squareSize/2 > width) {
  vx = -vx;
}

if (y - squareSize/2 < 0 || y + squareSize/2 > height) {
  vy = -vy;
}
```

- Here we __adjust__ our calculate to account for the idea that should probably be the __edge__ of the rectangle that actually bounces, not its __centre__

---

## Collision with other objects

- It gets more complicated in terms of logic when we want to check whether two __objects__ hit each other, especially if they're moving objects
- The easiest case is with __rectangular__ shapes
- In fact, even for irregular shapes in programming we often think of their collisions in terms of imaginary containing boxes (often called "hitboxes")
- Because calculating overlaps for rectangles is a __lot__ easier than for irregular shapes
- So the basic idea to check if two shapes hit each other is to see if their hitboxes overlap
- In fact, at that point we're basically talking about the game Pong
- Or many other arcade games

???

- See: the sample code for Pong!

---

# Fin.
