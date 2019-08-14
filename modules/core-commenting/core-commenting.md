### Core / CART 253 / Fall 2018 / Pippin Barr

# Commenting

---

## Code is hard to read...

```javascript
function setup() {
  createCanvas(500,500);
  background(255,200,200);
  ellipseMode(CENTER);
  ellipse(250,250,200,200);
  fill(0);
  ellipse(200,225,20,20);
  ellipse(300,225,20,20);
  strokeWeight(10);
  line(200,275,300,275);
}

function draw() {
}
```

---

## It would be nice to annotate our code

- One problem with code is that it's written in... code
- It would be nice if we could _annotate_ our code in a human language to make it more clear
- And we can: it's called __commenting__

---

## Comments

- A comment is an addition to our code that lets us write notes in plain language
- A comment is written in our code by beginning a line with two forward-slashes: `//`

```javascript
// The next line draws an ellipse (this is a comment)
ellipse(0,0,100,100);
```

- This comment allows us to _explain_ what a line of code does
- Even someone who doesn't know how to program could at least read the comment and know what's going on
- And importantly, the computer _ignores_ the comments when it runs the code, so it doesn't try to read human language, only programming language

---

## Why comment?

- As above, code can be hard to understand
- Maybe drawing an ellipse isn't very complicated, but it doesn't take long for a program to be very, very difficult to just read and understand
- By adding comments we make the job of understanding code much easier
- This is good for:
--

  - __You-in-the-future__, because it's easy to forget what your code does and your comments will remind you
--

  - __You-in-the-present__, because writing comments is a great way to make sure you actually understand what your program does
--

  - __Evaluation__, because it shows us that you understand your code
--

  - __Everyone else__, because anyone who sees your code in the future will be able to work with it much more easily

---

## Where, when, and what?

- There are no official rules for commenting, the computer itself doesn't care if you write even one comment in your 10,000-line program
- But at least for this class we will follow a basic set of guidelines we will expect you to _always follow_ and which will be _graded for_
- We've already seen enough code to lay out the basic rules

---

## Comment your files

- You should always write a comment at the top of your script files
- (Technically it's good practice to comment at the top of HTML and CSS files too.)

---

```
// Face Drawing Machine
// Pippin Barr, 17 August 2018
//
// Draws a simple face on the canvas.
// Should probably have a nose?

function setup() {
  createCanvas(500,500);
  background(255,200,200);
  ellipseMode(CENTER);
  ellipse(250,250,200,200);
  fill(0);
  ellipse(200,225,20,20);
  ellipse(300,225,20,20);
  strokeWeight(10);
  line(200,275,300,275);
}

function draw() {
}
```

---

## Comment your functions

- At the moment we have two functions, `setup()` and `draw()`
- Always write a comment before every function in your code to summarise what it is there to do
- This is especially true when you start writing your own functions
- Which you will be doing in this course
- Obviously, the more complicated the function, the more detailed the summary will need to be (this is a reason to have simple functions!)

---

```
// Face Drawing Machine
// Pippin Barr, 17 August 2018
//
// Draws a simple face on the canvas.
// Should probably have a nose?

// setup()
//
// Sets colours and draws a face made out of
// circles and a line.

function setup() {
  createCanvas(500,500);
  background(255,200,200);
  ellipseMode(CENTER);
  ellipse(250,250,200,200);
  fill(0);
  ellipse(200,225,20,20);
  ellipse(300,225,20,20);
  strokeWeight(10);
  line(200,275,300,275);
}

// draw()
//
// Does nothing yet.

function draw() {
}
```

---

## Comment your lines of code

- This one is a little more subjective
- The idea is to add comments to your code that explain what it does
- But you generally don't want to add a comment to _every single line_ because it would be exhausting for everyone
- As such, you need to think about your code and imagine what would need explaining to someone who has never seen it before
- This is an art form and you will get better at it with practice

---

```
// Create our canvas
createCanvas(500,500);

// Set the background to pink
background(255,200,200);

// Draw the head
ellipseMode(CENTER);
ellipse(250,250,200,200);

// Draw the eyes
// The eyes are black
fill(0);
// Left eye
ellipse(200,225,20,20);
// Right eye
ellipse(300,225,20,20);

// Draw the mouth
strokeWeight(10);
line(200,275,300,275);
```

---

## Comment your lines of code

- There's plenty of room for debate, but the previous slide is an example of some basic commenting that helps a reader to know which bits of the code achieve what
- This means that if they want to change the colour of the eyes they can jump straight to the right place, for example
- This example has quite a large number of comments, but for now you're better erring on the side of too many than too few

---

## Don't restate the code

- One important guideline with comments is that you don't want to just write what the code literally does

```
// Set the ellipse mode to center
ellipseMode(CENTER);
// Draw an ellipse at 250,250 with a width and height of 200
ellipse(250,250,200,200);
```

- This is clearly not helpful because it doesn't tell us what the code _means_
- That is the code for drawing the head, but you would never know that from these comments
- So remember you're _explaining_, not just restating

---

## Comments!

- So, comments are great for everyone
- They're not very difficult to write
- They just take a little bit of time
- And it's time well spent

---

# Fin
