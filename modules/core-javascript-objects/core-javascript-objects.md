### Core / CART 253 / Pippin Barr

# JavaScript Objects

---

## In this module

- JavaScript objects with data
- JavaScript objects as arguments

---

## Complicated data

- A lot of the time the kinds of data we want to track in our programs are __related to each other__
- For example, when we have some object that moves around on the screen it has
  - An x position
  - A y position
  - An x velocity
  - A y velocity
  - A size
  - ... and so on
- But so far we've tracked this in separate variables

---

```javascript
let x;
let y;
let vx;
let vy;
let radius = 25;
let maxSpeed = 1;

function setup() {
  createCanvas(500,500);
  fill(255,0,0);
  noStroke();
  x = width/2;
  y = height/2;
  vx = speed;
  vy = -speed;
}

function draw() {
  background(255);
  x += vx;
  y += vy;
  ellipse(x,y,radius*2);
}
```

---

This gets ugly if we have more than one object we want to track this kind of information for, since we need new variables for each one...

```javascript
// Object 1's information
let x;
let y;
let vx;
let vy;
let radius = 25;
let maxSpeed = 1;

// Object 2's information
let x2;
let y2;
let vx2;
let vy2;
let radius2 = 50;
let maxSpeed2 = 10;
```

Getting kind of hard to read.

---

## Related data belongs together

- Rather than track each piece of important data in a separate variable it would be nice to keep it all together
- And we can! With JavaScript Objects!
- A JavaScript Object is kind of value that stores a set of __properties__, each of which is essentially another variable
- So we could have a `circle` variable that would contain __all the properties of our circle__ (like position, velocity, radius, and speed) in one place!

---

## A JavaScript Object

```javascript
let circle = {
  x: 0,
  y: 0,
  maxSpeed: 1,
  vx: 0,
  vy: 0,
  radius: 25
}
```

- This is a JavaScript Object version of our circle
- It's __just another type of value__ that goes into a variable
- But it's a special type of value that allows us to collect data together and store it in a single variable

???

`let circle`
- We can see that we start with a standard variable declaration: .hi[`let circle`]

`=`
- And we use the same assignment operator as always: .hi[`=`]

`{...}`
- But now instead of a number, string or truth value, we have __a set of information inside curly brackets__: .hi[`{ ... }`]
- Each piece of information is called a __property__, so `x` is a property, `y` is a property, etc.
- Each property is like a variable that lives inside the object

```
x: 0,
y: 0,
maxSpeed: 1,
vx: 0,
vy: 0,
radius: 25
```
- Each property is declared __inside the object__ (inside its curly brackets) according to the same basic syntax
- First we have the __name__ (e.g. `x`, just like a variable name)
- Next we have a __colon__ (__not__ the assignment operator!)
- Then we have the __value__ inside this property (you __must__ set one)
- And if there is __more than one property__ then you separate them with __commas__

---

## Accessing properties

- When we want to __use__ the information inside a JavaScript object we write the __name of the variable__ storing the object, then a __period__, then the __name of the property__

```javascript
let circle = {
  x: 250,
  y: 250,
  size: 100
};

function setup() {
  createCanvas(500,500);
}

function draw() {
  ellipse(circle.x, circle.y, circle.size);  
}
```

- This is called "dot notation"

???

- This might seem a little familiar from when we were displaying images
- We were able to get the dimensions of an image using dot notation

```javascript
let myImage;

function preload() {
  myImage = loadImage("assets/images/myImage.png");
}

function setup() {
  let myImageWidth = myImage.width;
  let myImageHeight = myImage.height;
  console.log("Width of myImage is " + myImageWidth);
  console.log("Height of myImage is " + myImageHeight);
}
```

- This is because the image is an object!

---

## Objects within Objects

- Properties can have __any__ kind of data type in them: numbers, strings, truth values
- And __even another JavaScript Object!__
- Sometimes this makes sense because you have data that needs to be organized at more than one level...

---

## A better JavaScript Object

- To use properties inside a nested JavaScript object, we just continue to use __dot notation__...

```javascript
let circle = {
  position: {
    x: 0,
    y: 250
  },
  velocity: {
    x: 0,
    y: 0
  }
  maxSpeed: 2,
  size: 100
};

function setup() {
  createCanvas(500,500);
  circle.velocity.x = circle.maxSpeed;
}

function draw() {
  circle.position.x += circle.velocity.x;
  ellipse(circle.position.x, circle.position.y, circle.size);
}
```

???

- This is getting close to some of the basics of how game engines represent physical objects
- All the data is carefully organized and named so that the structure of the data helps us to write cleaner, better code

---

## JavaScript Objects as arguments

Unlike other kinds of values, JavaScript objects __can__ be changed in a function when they are provided as an argument!

```javascript
let circle = {
  x: 0,
  y: 250,
  vx: 0,
  size: 100
}

function setup() {
  createCanvas(250,250);
  addVelocity(circle); // This WILL send the circle object to the function as an argument
}

function draw() {
  circle.x += circle.vx; // circle.vx has been changed to 10, so it will move
  ellipse(circle.x,circle.y,circle.size);
}

function addVelocity(shape) {
  shape.vx = 10; // This WILL change the vx property of the object passed
}
```

---

## JavaScript Objects!

- JavaScript Objects are excellent because they allow us to keep a bunch of related data together in one place instead of in separate variables
- They allow us to think of a variable as containing a complex entity in our code (like a moving circle) instead of "just" a number or a string or a truth value
- And this allows us to build much richer ideas about what we're representing in our code
- They are also the Demonic Portal to Object-Oriented Programming, which we will talk about soon!

---

# Fin.
