### Core / CART 253 / Pippin Barr

# Randomness, probability, and Perlin noise

---

## In this module

- `random()` reminder
- Random movement
- `noise()`
- Noise-based movement

---

## `random()` reminder

- We've already met the `random()` function
  - `random(n,m)` gives us a random number between `n` and `m`
  - `random()` gives us a random number between `0` and `1`
  - `random(n)` gives us a random number between `0` and `n`

---

## Random movement

- We've mostly used random to directly set the position of things
- Or to create flashing, changing colors
- But `random()` can apply in any situation when we want to vary numbers in our code in a surprising way
- Such as for motion...

---

## Random movement

```javascript
let x;
let y;
let vx;
let vy;
let speedChange = 1;
let maxSpeed = 4;
let radius = 40;

function setup() {
  createCanvas(500,500);
  fill(255,0,0);
  x = width/2;
  y = height/2;
  vx = 0;
  vy = 0;
}

function draw() {
  vx += random(-speedChange,speedChange);
  vy += random(-speedChange,speedChange);

  x += vx;
  y += vy;

  ellipse(x,y,radius * 2);
}
```

---

## Probability

- The `random()` function has a very interesting mathematical property, which is that it follows a __uniform distribution__
--

- That is, any given number you get from `random()` is __equally as likely as any other__
--

- This fact allows us to use `random()` to create __probabilities__ in our code
- If every number is as likely as any other...
  - ... then the likelihood a `random(0,1)` number will be less than `0.1` is...
--
 10%!
--

  - ... and the likelihood a `random(0,1)` number will be less than `0.5` is...
--
 50%!

--
  - ... and so on.
- In other words, we can use `if` statements with a `random()` number to generate __probabilistic outcomes__!

---

```javascript
let currentText = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(24);
  textAlign(CENTER, BOTTOM);
}

function draw() {
  background(255);
  text(currentText, width / 2, height);
}

function mousePressed() {
  let r = random(0, 1);
  if (r < 0.01) { // 1% chance
    currentText += "You found the Sword of Rareness!\n"
  }
  else if (r < 0.1) { // 9% chance (because the 1% is already false)
    currentText += "You found a Pretty Unusual Helmet of Some Kind!\n";
  }
  else if (r < 0.4) { // 30% chance (because 10% is already false)
    currentText += "You found a Mediocre Gemstone!\n"
  }
  else { // 60% chance (because it's the rest)
    currentText += "You found a Sweet Nothing!\n"
  }
}
```

???

- So you can see we're checking what __range__ `r` is in to determine __how likely that outcome was__ and thus to give an appropriate response in our program
- Note that the probability of the rare Helmet of Some Kind is not 10%, it's 9% because the `0.01` we check first eliminates that amount of the distribution from the future calculations
- Similarly, the probability of the Mediocre Gemstone is 30% (0.4 - 0.1 === 0.3 === 30%) and not 40% for the same reason

---

## Perlin noise

- `random()` is fantastic for delivering __completely unexpected numbers__ that follow a uniform distribution
- But sometimes we want random numbers that are nonetheless following some kind of an organic pattern, a __sequence__ of random numbers that are related to one another
- And for this kind of effect we have Perlin noise via the `noise()` function
- Perlin noise is a large subject in itself (you can find a link in the notes to more information), but for now we'll just focus on what it does

???

- For more on Perlin noise try:
  - [p5 Reference](https://p5js.org/reference/#/p5/noise)
  - [Wikipedia](https://en.wikipedia.org/wiki/Perlin_noise)
  - [Adrian's Soapbox](http://flafla2.github.io/2014/08/09/perlinnoise.html_
  - [Khan Academy](https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-noise/a/perlin-noise)
  - Googling just like I did

---

## `noise(t)`

- To get a Perlin noise value we use the `noise()` function
- And we give it a "time" parameter that determines the moment in the sequence that we want a value for
- So `noise(0)` gives us a noise value (a number between `0` and `1`) at time 0
- `noise(1)` gives us a noise value at time 1
- `noise(0.01)` gives us a noise value at time 0.01
- The __closer together the times__ the __more similar the noise values will be__

---

## `noise(t)`

- This might make more sense as a graph...

```javascript
let t = 0;
let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function draw() {
  let y = height * noise(t);
  ellipse(x, y, 10, 10);
  x++;
  t += 0.01;
}
```

???

- What happens when you change the increment for t?
- Compare this with the same idea using random()

```javascript
let x = 0;

function setup() {
  createCanvas(1000,500);
}

function draw() {
  let y = height * random();
  point(x,y);
  x++;
}
```

---

## Noise-based movement

Perlin noise could be used to drive motion...

```javascript
let x = 0;
let y = 0;
let tx = 0;
let ty = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);

  x = width * noise(tx);
  y = height * noise(ty);

  tx += 0.01;
  ty += 0.01;

  ellipse(x,y,10,10);
}
```

How would this look if you used `random()` instead of `noise()`?

???

- Why does the shape only move diagonally?

---

## Two dimensions requires two times

- Because we now have __two separate dimensions of movement__ (x and y) we need to work with two separate noise values (at different "times"), or they will mirror each other
- The easiest fix here is to start `tx` and `ty` at different values so that they won't spit out the same value each time

```javascript
let tx = 0;
let ty = 100;
```

- If we really want it to be random we could set them in `setup()` to be random

```javascript
function setup() {
  createCanvas(500,500);
  tx = random(0,1000);
  ty = random(0,1000);
}
```

---

## Better two dimensional movement

```javascript
let x;
let y;
let tx;
let ty;

function setup() {
  createCanvas(500,500);
  tx = random(0,1000);
  ty = random(0,1000);
}

function draw() {
  background(255);

  x = width * noise(tx);
  y = height * noise(ty);

  tx += 0.01;
  ty += 0.01;

  ellipse(x,y,10,10);
}
```

---

## Noise applied to velocity

- In the previous example we're setting the __object's position directly__ with Perlin noise
- But it would be more "behavioral" if we instead change its __velocity__ based on Perlin noise

__See slide notes for a script example__

???

- Here's an example script
- Notice how we need to convert the noise value which is between 0 and 1 to a velocity value, which is between -maxSpeed and maxSpeed
- We could do the math ourselves, but there's a function called `map()` that is specifically there to convert between different ranges - you can see it in the code below

```javascript
let x;
let y;
let vx;
let vy;
let maxSpeed = 2;
let tx;
let ty;

function setup() {
  createCanvas(500,500);
  tx = random(0,1000);
  ty = random(0,1000);
  x = width/2;
  y = height/2;
}

function draw() {
  background(255);

  vx = map(noise(tx),0,1,-maxSpeed,maxSpeed);
  vy = map(noise(ty),0,1,-maxSpeed,maxSpeed);

  x += vx;
  y += vy;

  if (x < 0) {
    x += width;
  }
  else if (x > width) {
    x -= width;
  }

  if (y < 0) {
    y += height;
  }
  else if (y > height) {
    y -= height;
  }

  tx += 0.01;
  ty += 0.01;

  ellipse(x,y,10,10);
}
```

---

# Fin.
