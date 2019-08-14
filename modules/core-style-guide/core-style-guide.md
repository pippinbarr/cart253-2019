### Core / CART 253 / Fall 2018 / Pippin Barr

# Style guide

---

## In this module

- Formatting
- Commenting
- Naming
- File management

---

## Formatting

- Formatting your code nicely helps everyone to read and understand it more easily
- This means including a helpful amount of white-space in the code
- This means respecting the indentation rules (lines of code are indented when inside curly brackets)
- This means caring about how your code looks

---

## No

```javascript
var variableOne = 0;var variableTwo = 0;

function setup() {createCanvas(500,500);}

function draw() {

  if (      variableOne < 0 && variableTwo < 0) {

          console.log("That was surprising...");
  }
    else {
    console.log("Just like I thought."  ) ;




  }}
```

- This is a mess, and hopefully you can tell it's a mess
- This makes your code hard to read for you __and__ everyone else

---

## Yes

```javascript
var variableOne = 0;
var variableTwo = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  if (variableOne < 0 && variableTwo < 0) {
    console.log("That was surprising...");
  }
  else {
    console.log("Just like I thought.");
  }
}
```

- Note that there is __plenty of white space__
- But there is __not excessive white-space__
- Everything is __indented correctly__

---

## Auto-indent

- In order to maintain proper indenting of your code you can either

  - Do it yourself (which is a bit tedious)
  - Use a package that takes care of it (__Atom Beautify__ is one, but note this won't work on CDA computers unless you install it every day)
  - Select all your code and use `Edit > Lines > Auto Indent`
  - Select all your code and use `Command-Shift-P` then type "auto" to bring up the auto-indent option and hit enter

---

## Commenting

- Commenting is vital to help you and everyone else understand what your program does and how it does it
- We have already covered the principles of commenting, which are
  - A comment at the top of script files that explains them
  - A comment before each function that explains it
  - A comment before any moderately complex code that it is helpful to explain
- Remember that comments should __explain__ not just restate or blankly describe
- Generally speaking the exercise and project template code represents a good example to follow

---

## Naming

- In programming we have many opportunities to name things
- This most notably includes variables, properties, functions, and classes
- And this includes remembering conventions such as `camelCase` for variable, property, and function names, and `FirstLetterCapitalization` for class filenames and constructor functions
- As with other matters of style, we try to use good names for these things because it helps us and everyone else understand how the program works, it makes everyone's life easier

---

## Yes

```javascript
function draw() {
  background(backgroundColor);

  leftPaddle.update();
  rightPaddle.update();
  ball.update();

  ball.collide(leftPaddle);
  ball.collide(rightPaddle);

  if (ball.isOffScreen()) {
    ball.reset();
  }

  leftPaddle.display();
  rightPaddle.display();
  ball.display();
}
```

- Obviously this would be helped with some comments
- But thanks to the naming used here, we can understand what's happening anyway!

---

## Hell no.

```javascript
function draw() {
  background(gg);

  lp.upit();
  rp.upit();
  zoomer.zoomitbaby();

  zoomer.bap(lp);
  zoomer.bap(rp);

  if (zoomer.wtf()) {
    zoomer.nuhUh();
  }

  lp.s();
  rp.s();
  zoomer.hereItIs();
}
```

- This is the "same code" in the sense of functionality
- But now it's pretty much useless in terms of readability

---

## File management

- As projects grow in size, and particularly when we write multiple script files (such as when we're creating classes), it becomes important to make sure we manage our project structure well
- This shouldn't be rocket science - we've all been using computers, we understand the idea of files and folders
- All we need to do is preserve a sensible folder structure and put things in the right places!

---

```
project/
  assets/
    images/
    sounds/
    fonts/
  css/
    style.css
  js/
    libraries/
      p5.min.js
    script.js
    Paddle.js
    Ball.js
  index.html
```

- In essence, just put files where they "belong"
- Scripts belong in `js/` and if they're libraries they go into the `libraries/` subfolder
- Images belong in `assets/images/`
- Your CSS belongs in `css/style.css`
- And so on

---

# Fin.
