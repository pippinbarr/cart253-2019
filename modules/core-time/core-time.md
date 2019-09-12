### Core / CART 253 / Pippin Barr

# Time

---

## In this module

- The core elements of interactive programs

---

## Dead code

- So far the code we've written just runs once and stops
- JavaScript carries out our instructions from the top to the bottom and that's that
- But that's not going to lead to especially interesting programming
- And in particular we're not going to be able to make something __interactive__ this way
- We need __time__, because time allows __change__, and change allows __interaction__

???

- We need the program to continue to run over time
- Time allows for __change__
- And change allows for __interaction__

---

## The three parts of interactive code

- Generally speaking there are three key elements involved in interactive applications

1. We __set up__ the initial conditions of the program
2. We __update__ the state of the program repeatedly over time
3. We __handle events__ like user and other input

---

## Set up

- Before a program really gets going, we often want to set some starting conditions that will help to define how it runs

_In a game, for example, we might need to create the player's avatar, position it in front of the door of the dungeon, load the sound effects of the player's footsteps, configure the physics parameters that will be applied during play, etc._

- These are all things we want to do __once__ at the __start__ of the program

---

## Update

- Once the program is ready, we want it to keep running until it's time to stop
- The way we tend to do this is with an __update loop__, which runs some code over and over again
- We can think about this update loop running __once per frame__

_In a game, for example, every frame we need to run the physics simulation, animate the avatar, play a footstep sound if the player's foot hit the ground, check if the player has made contact with the door so we can open it for them, etc._

- These are all things we want to do __every frame__ that the program runs

???

- Clearly this is tying us to a kind of animation or movie-like understanding of a program, which is fine because we're generally writing visual programs that update their visual element (and other elements) over time

---

## Handle events

- While a program is running, we want to be able to react to the person using it, or other important sources of events
- For now we'll look at doing this in the __update loop__

_In our game, for example, we need to react whenever the player clicks the mouse button by making the avatar swing its sword, and we also need to react when the player is within 10 meters of an orc by having the orc run after them, etc._

- These are things we want to do __in reaction to outside events__

---

## Set up, update, handle events

So, one more time

1. We __set up__ the conditions for our program
2. We __update__ the state of our program every frame
3. We __handle events__ that occur while our program is running

- That's the secret to writing interactive software
- p5 has already got built-in ways of dealing with these things

---

## `setup()`

```javascript
function setup() {
  createCanvas(640,480);
  fill(255,0,0);
  stroke(0,255,0);
}
```

- This is the p5 `setup()` function (we'll talk more about functions later)
- Using p5, the code in it is run automatically at the __start__ of our program
- Like setting up the canvas size and colors to be used
- We write the instructions we want to execute __inside the curly brackets__
- From now on we'll do any of the more "active" stuff (like display images, playing sounds, etc.) in the `draw()` function...

???

- Note that `setup` is special because it's the name of a function p5 __already__ knows about
- `setup()` is also special because __p5 calls it automatically__ at the start of our program running
- Later we'll learn how to make up our __own__ functions, too
- Notice how nicely the __name of the function explains what the function is for__
- If you're being observant, you may also have noticed that there are empty parentheses here - this is where parameters __would go__ if this function had any. It doesn't.

---

## `draw()`

- We haven't used it yet, but underneath the `setup()` function in our template project is a function called `draw()`

```javascript
function draw() {
  rect(0,0,100,100);
}
```

- This is another function that p5 __already knows about__
- It's where we write what we want to happen __every frame__ of our program
- By default our program is running at 60 frames per second
- In this case the program will draw a rectangle at (0,0) every frame! 60 times per second! Exciting!

---

## A living program!

```javascript
function setup() {  
  createCanvas(640,480);
  fill(255,0,0);
  stroke(0,255,0);
}

function draw() {
  rect(0,0,100,100);
}
```

- So this is an actual p5 JavaScript program that runs over time!
- What will this look like?
--

- Kind of a downer - it's a bit like __nothing__ happens!
--

- But it's not that __nothing__ is happening, it's that nothing is __changing__!
- And without change we __cannot see time is passing__

---

## Ch-ch-ch-changes...

```javascript
function setup() {  
  createCanvas(640,480);
  fill(255,0,0,2);
  noStroke();
}

function draw() {
  rect(0,0,640,480);
}
```

- If we set the fill to be a very transparent color we can see the program is "alive"
- Because each frame a new, very see-through rectangle is drawn
- And over time they accumulate and their colors add together, getting brighter!

---

## Uh, hello?

- So we have `setup()` for getting our program ready to run
- And we have `draw()` that runs every frame so that our program works over time
- But right now our program just ignores us. It just doesn't care!
- What do we need?
--

- For interaction we need to __handle events__
- The program needs to be able to recognize something is happening outside its own code
- We'll come to this more seriously next week, but for now there's one kind of event we can easily use

---

## `mouseX` and `mouseY`

- One nice way to react to the user is to know where their mouse pointer is
- And p5 gives an easy way to get that location:
  - The x coordinate of the user's mouse is called `mouseX`
  - The y coordinate of the user's mouse is called `mouseY`
- These are called __variables__ and we'll talk about them in detail shortly
- The main thing to know right now is we can use them __instead of numbers__

---

## Let there be lines!

```javascript
function setup() {
  createCanvas(640,640);
  fill(255,0,0);
  stroke(100,0,0);
  background(255,255,255);
}

function draw() {
  rect(mouseX,mouseY,25,25);
}
```

--

- Holy crap it's a drawing program!

???

- What if we didn't want this to draw, but instead just move a rectangle around?

---

## Let there be "life"?

```javascript
function setup() {
  createCanvas(640,640);
  fill(255,0,0);
  stroke(100,0,0);
}

function draw() {
  background(255,255,255);
  rect(mouseX,mouseY,25,25);
}
```

--

- Holy crap it's like the start of a game with the mouse as an avatar!

---

## Food for thought

- We've gone from writing programs that run their code once and then completely stop...
- ... to writing programs that __exist over time__
- Now we need to think about the code in our program not as something __static__, but as something __dynamic__
- This introduces so many possibilities! (And so many problems!)
- We need to look at a page full of code and __see time__, we need to __feel time__ in relation to our lines of code
- It's fun!

---

# Fin.
