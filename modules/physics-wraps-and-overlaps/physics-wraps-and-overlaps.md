### Physics / CART 253 / Pippin Barr

# Wraps and overlaps

---

## In this module

- Detecting going off-screen
- Wrapping
- Detecting overlapping

---


## Things move

```javascript
let x;
let y;
let vx;
let vy;
let radius = 25;
let speed = 2;

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
  vx = speed;
  vy = 0;
}

function draw() {
  x = x + vx;
  y = y + vy;

  ellipse(x,y,radius * 2);
}
```

---

## And they go off the screen...

- Going off the screen is potentially an important __event__ in a program
- If the avatar goes off the screen in a game, it might mean we should load a new area (or kill them! Kill! Kill!)
- If an enemy goes off the screen in a game, it might mean we missed our opportunity to destroy it, or that we successfully avoided it
- So it would be good to detect this situation
--

- __How would we detect when something has gone off screen?__

---

## Detecting going off-screen

```javascript
let x;
let y;
let vx;
let vy;
let radius = 25;
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

  if (x < 0 || x > width || y < 0 || y > height) {
    background(255,0,0);
  }

  ellipse(x,y,radius * 2);
}
```

---

## Accounting for size

```javascript
let x;
let y;
let vx;
let vy;
let radius = 25;
let speed = 2;

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
  vx = speed;
  vy = 0;
}

function draw() {
  x = x + vx;
  y = y + vy;

  if (x + radius < 0 || x - radius > width || y + radius < 0 || y - radius > height) {
    background(255,0,0);
  }

  ellipse(x,y,radius * 2);
}
```

???

- If we want to check if the __whole circle__ is off the screen, we have to account for its size, not just its center point
- With rectangles it means we adjust by the rectangle's width and height
- With non-rectangular shapes (like ellipses) we usually adjust by its __bounding box__ (the imaginary rectangle that would surround the whole shape)
- In the case of an ellipse, we can define its bounding box by its radius

---

## Wrapping

- We might want our shape to appear back on the other side of the screen!
- So we check which side it went off, and then adjust its position accordingly

```javascript
if (x + radius < 0) {
  x += width;
}
else if (x - radius > width) {
  x -= width;
}

if (y + radius < 0) {
  y += height;
}
else if (y - radius > height) {
  y -= height;
}
```

???

- You would put this code inside `draw()` __after__ updating the position with velocity and __before__ drawing the ellipse

---

## Things overlap

```javascript
let x;
let y;
let vx;
let x2;
let y2;
let vx2;
let radius = 25;
let speed = 2;

function setup() {
  createCanvas(500,500);
  x = width/4;
  y = height/2 - radius/2;
  x2 = 3*width/4;
  y2 = height/2 + radius/2;
  vx = speed;
  vx2 = -speed;
}

function draw() {
  x = x + vx;
  x2 = x2 + vx2;

  ellipse(x,y,radius * 2);
  ellipse(x2,y2,radius * 2);
}
```

---

## Things overlap

- That is, visually we see shapes and images pass over/through each other
- And that is also something that could be a significant __event__ in a game or other interactive situation
  - If one shape is controlled by the player it might mean they "collected" the other shape
  - If we're trying to make generative art, then the shapes might react to each other in some way
- So we want to be able to __know__ when shapes/elements overlap
--

- __How do we detect if two circles overlap?__

---

```javascript
let d = dist(x,y,x2,y2);

if (d < radius * 2) {
  // We have an overlap
}
```

- A nice simple piece of mathematics being performed for us by the `dist()` function
- `dist(x,y,x2,y2)` takes four parameters
- The x and y of one point
- The x and y of a second point
- It gives us back the __distance in pixels__ between those two points
- What mathematical formula do you think it uses?
--

- Pythagoras! Specifically, the Pythagorean Theorem

???

- The __Pythagorean Theorem__ is that great piece of geometry that tells us that for a right angled triangle the square of the hypotenuse is equal to the sum of the squares of the other two sides
- In the case of `dist()` the "hypotenuse" is the length of the hypotenuse connecting the two points, and we know the lengths of the two other sides thanks to the coordinates of those two points, so we can calculate that length

---

## Do something with it

```javascript
let d = dist(x,y,x2,y2);

if (d < radius * 2) {
  fill(255,0,0);
  stroke(0,255,0);
}
```

- Naturally we can do whatever we want with the knowledge that the two circles have overlapped
- Changing color, as here, is just a way of visualising it
- (See the slide notes for an example of making the circle disappear when they touch)

???

- What would you do to make both circles stop existing the moment they touch, for example?
- There are different approaches
- You could move their x coordinates far off screen and set their velocities to 0
- You could add a __boolean__ variable (one that stores `true` and `false`) to the code:

```javascript
let x;
let y;
let vx;
let x2;
let y2;
let vx2;
let radius = 25;
let speed = 2;
let drawCircles = true;

function setup() {
  createCanvas(500,500);
  x = width/4;
  y = height/2 - radius/2;
  x2 = 3*width/4;
  y2 = height/2 + radius/2;
  vx = speed;
  vx2 = -speed;
}

function draw() {
  background(255);
  x = x + vx;
  x2 = x2 + vx2;

  let d = dist(x,y,x2,y2);

  if (d < radius * 2) {
    drawCircles = false;
  }

  if (drawCircles) {
    ellipse(x,y,radius * 2);
    ellipse(x2,y2,radius * 2);
  }
}
```

---

## Getting physical!

- Now we can not only have things that move through the space of our canvas
- But also that can react to "touching" one another
- What we decide to do based on those contacts can lead to interesting and dynamic effects!

---

# Fin.
