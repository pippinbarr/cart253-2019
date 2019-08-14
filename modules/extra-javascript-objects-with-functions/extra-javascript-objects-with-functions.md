### Core / CART 253 / Fall 2018 / Pippin Barr

# (Simple) JavaScript Objects with Functions

---

## JavaScript Objects

- We've already seen the basic idea of an "object" in the form of JavaScript Objects
- So far we've used them as a way to store a bunch of properties together:

```javascript
let circle = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  maxSpeed: 1,
  radius: 25
}
```

- So we have a circle __object__ which has properties to store its position, velocity, speed, and radius all in one place

---

## JavaScript Objects and Functions

- In fact, JavaScript Objects can also have __functions__ in their properties!

```javascript
let circle = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  maxSpeed: 1,
  radius: 25,
  sayHello: function () {
    console.log("Hello, world!");
  },
  sayGoodbye: function () {
    console.log("Goodbye, (cruel) world!");
  }
}
```

- Note how here the function's __name__ is the property of the object, and the __function__ is declared after the colon without the name: `function () { ... }`
- If there were parameters they would go in the parentheses as usual

???

- Thus, it turns out that you can store __functions__ inside __variables__ as another kind of __value__, because JavaScript allows for that
- This means that you can __assign__ a function into a variable, you can __pass__ a function as a parameter to a function, and you can __return__ a function from inside another function
- For now, it's plenty to just know that this is true

---

## Calling an object's function

- Once again, we use dot notation to call those functions:

```javascript
circle.sayHello();
circle.sayGoodbye();
```

---

## Activity

- Add another function to the circle example called `say` that takes a string as a parameter and prints that string out to the console.
- Test it in your code by calling `circle.say("Can you hear me?");`
- The answer is in the slide notes (press `P` to view), but avoid checking before you've tried it

???

```javascript
let circle = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  maxSpeed: 1,
  radius: 25,
  sayHello: function () {
    console.log("Hello, world!");
  },
  sayGoodbye: function () {
    console.log("Goodbye, (cruel) world!");
  }, // NEW (added the comma)
  say: function (text) { // NEW
    console.log(text); // NEW
  } // NEW
}
```

---

## Using an object's properties in its functions

- Because we might want an object's __functions__ to use that object's __properties__, we need a way to refer to them inside those functions

```javascript
let circle = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  maxSpeed: 1,
  radius: 25,
  display: function () {
    ellipse(this.x,this.y,this.radius * 2);
  }
}
```

- We use a magical word called `this` inside a JavaScript object's functions to refer to __the object itself__

---

## Activity

- Add a `move()` function to the `circle` that updates its position based on its velocity
- Remember to use `this` when referring to the circle's properties
- Answer in the slide notes. No peeking!

???

```javascript
let circle = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  maxSpeed: 1,
  radius: 25,
  move: function () { // NEW
    this.x += this.vx; // NEW
    this.y += this.vy; // NEW
  }, // NEW
  display: function () {
    ellipse(this.x,this.y,this.radius * 2);
  }
}
```

---

## Using the functions inside an object

- So if we have the circle variable with the object from the last slide then we can __call__ its functions using dot notation as well!

```javascript
let circle = { ... }; // As above

function setup() {
  createCanvas(500,500);
  circle.vx = circle.maxSpeed;
  circle.vy = -circle.maxSpeed;
  circle.x = width/2;
  circle.y = height/2;
}

function draw() {
  circle.move();
  circle.display();
}
```

- How beautifully organised that is now!
- The circle has the properties __and__ the functions to make it work

---

## That is very nice

- You're welcome
- This basic idea of an object that stores the properties relevant to it as well as the function that allow it to do what it needs to do is the heart of __object-oriented programming__
- The core idea is that it allows to separate the data and functionality of our program into specific, meaningful objects
- They could be things like circles that move around, or a user-interface element like a dialog box, or a single object that manages the overall logic of the program, and on and on
- So it's a way of organising the meaning of a program

---

# Fin.
