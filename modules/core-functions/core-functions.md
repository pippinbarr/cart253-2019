### Core / CART 253 / Fall 2018 / Pippin Barr

# Functions

---

## In this module

- Program complexity and abstraction
- Functions

---

## Programs get big

- As soon as we want to do something even slightly impressive our programs start to get pretty complicated
- We have to write a lot of code to achieve what we want
- We need some way to deal with this level of complexity

---

## Yay! Abstraction!

- Consider `rect(0,0,100,100);`
- We understand this as "draw a rectangle with its top left corner at 0,0 and a width and height of 100"
- But of course there's a __lot__ going on behind the scenes to transform that one line of code into an actual rectangle on our canvas...

---

## `rect(0,0,100,100);`

- We call `rect(0,0,100,100);`
- In the p5 library it does some checking of the parameters...
- ... checks the drawing modes...
- ... calls another function called `rect()`...
- ... which starts to use the browser's "Drawing Context" setup...
- ... which is uses to draw individual parts of the rectangle...
- ... and on and on!
--

- Thank god we don't need to know all that and can just say "draw a rectangle"

---

## We're on a need-to-know basis

- In programming we only want to know as much as we __need__ to know to get our work done
- Computation is all about __hiding__ the details when they're irrelevant
- This ability to ignore those details frees us up to do more, better, and more creative work
- Now, of course, we know more than we used to
- We know about the code level, we see the Matrix

---

## It would be nice to hide things from ourselves!

- Given how helpful it is to have all the details of `rect()` hidden...
- ... it would be nice if we could use this trick of hiding stuff ourselves
- We already do this with variables in some sense, hiding numbers inside names
- But we could think more clearly about our code if we could tidy it up based on what it does

---

## doThatThingYouDo();

- It will not surprise you to learn that we __can__ hide things from ourselves
- Just like we use the `rect()` function to draw a rectangle without know how it works...
- ... we can define our __own__ functions to organise our code

---

## Resetting the game

- Consider the code for resetting the game in __The Artful Dodger__

```javascript
// Reset the enemy's position
enemyX = 0;
enemyY = random(0,height);
// Reset the avatar's position
avatarX = width/2;
avatarY = height/2;
// Reset the dodge counter
dodges = 0;
```

---

## Resetting twice

- The resetting instructions appear __twice__ in the code, and it's exactly the same both times
- That's because, semantically, we want to do the same thing: reset the game
- Resetting the game is a kind of higher level __instruction__ for us
- We should always be suspicious of doing the __same thing in more than one place__

---

## Defining a function

- Whenever we want to group a set of instructions together so we can use them in more than one place easily, we __define a function__

```javascript
function reset() {
  // Reset the enemy's position
  enemyX = 0;
  enemyY = random(0,height);
  // Reset the avatar's position
  avatarX = width/2;
  avatarY = height/2;
  // Reset the dodge counter
  dodges = 0;
}
```

- Exactly the same code, but now __inside a function definition__

---

## Defining a function

```javascript
function reset() {
  // Reset the enemy's position
  enemyX = 0;
  enemyY = random(0,height);
  // Reset the avatar's position
  avatarX = width/2;
  avatarY = height/2;
  // Reset the dodge counter
  dodges = 0;
}
```

- First we write .hi[`function`]. That makes sense, since we're defining a function!

---

## Defining a function

```javascript
function reset() {
  // Reset the enemy's position
  enemyX = 0;
  enemyY = random(0,height);
  // Reset the avatar's position
  avatarX = width/2;
  avatarY = height/2;
  // Reset the dodge counter
  dodges = 0;
}
```

- Next we have the __name__ of the function, .hi[`reset`]

???

- Note how this is a __good name__ for the function because it describes clearly __what it does__

---

## Defining a function

```javascript
function reset() {
  // Reset the enemy's position
  enemyX = 0;
  enemyY = random(0,height);
  // Reset the avatar's position
  avatarX = width/2;
  avatarY = height/2;
  // Reset the dodge counter
  dodges = 0;
}
```

- Next is .hi[`()`] - empty parentheses. This function needs no extra information.

---

## Defining a function

```javascript
function reset() {
  // Reset the enemy's position
  enemyX = 0;
  enemyY = random(0,height);
  // Reset the avatar's position
  avatarX = width/2;
  avatarY = height/2;
  // Reset the dodge counter
  dodges = 0;
}
```

- Then we have .hi[`{ ... }`], curly brackets that contain what this function __does__

---

## Defining a function

```javascript
function reset() {
  // Reset the enemy's position
  enemyX = 0;
  enemyY = random(0,height);
  // Reset the avatar's position
  avatarX = width/2;
  avatarY = height/2;
  // Reset the dodge counter
  dodges = 0;
}
```

---

## Calling a function

- Now that we've __defined__ it, anywhere in our code that we want code in `reset()` to be run we can __call__ our `reset()` function
- By just including the code

```javascript
reset();
```

---

## Where?

- Generally speaking, when we add our own functions to our programs we'll put them __below `draw()`__

---

## It works!

- We have now __abstracted__ the idea of "reset the game" into a function
- When we include it in the game code it looks __far more clear than before__
- It literally says what it is going to do: __reset__ the game
- This idea of moving blocks of related code into functions to make your programs clearer is a huge win

---

## The rewritten script

- See notes for the full script with the `reset()` function

???

```javascript
/******************************************************

Game - The Artful Dodger
Pippin Barr

A simple dodging game with keyboard controls

******************************************************/

// The position and size of our avatar circle
var avatarX;
var avatarY;
var avatarSize = 50;

// The speed and velocity of our avatar circle
var avatarSpeed = 10;
var avatarVX = 0;
var avatarVY = 0;

// The position and size of the enemy circle
var enemyX;
var enemyY;
var enemySize = 50;

// The speed and velocity of our enemy circle
var enemySpeed = 5;
var enemyVX = 5;

// How many dodges the player has made
var dodges = 0;

// setup()
//
// Make the canvas, position the avatar and anemy
function setup() {
  // Create our playing area
  createCanvas(500,500);

  // Put the avatar in the centre
  avatarX = width/2;
  avatarY = height/2;

  // Put the enemy to the left at a random y coordinate within the canvas
  enemyX = 0;
  enemyY = random(0,height);

  // No stroke so it looks cleaner
  noStroke();
}

// draw()
//
// Handle moving the avatar and enemy and checking for dodges and
// game over situations.
function draw() {
  // A pink background
  background(255,220,220);

  // Default the avatar's velocity to 0 in case no key is pressed this frame
  avatarVX = 0;
  avatarVY = 0;

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately

  // Left and right
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
  }

  // Move the avatar according to its calculated velocity
  avatarX = avatarX + avatarVX;
  avatarY = avatarY + avatarVY;

  // The enemy always moves at enemySpeed
  enemyVX = enemySpeed;
  // Update the enemy's position based on its velocity
  enemyX = enemyX + enemyVX;

  // Check if the enemy and avatar overlap - if they do the player loses
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {
    // Tell the player they lost
    console.log("YOU LOSE!");
    reset();
  }

  // Check if the avatar has gone off the screen (cheating!)
  if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
    // If they went off the screen they lose in the same way as above.
    console.log("YOU LOSE!");
    reset();
  }

  // Check if the enemy has moved all the way across the screen
  if (enemyX > width) {
    // This means the player dodged so update its dodge statistic
    dodges = dodges + 1;
    // Tell them how many dodges they have made
    console.log(dodges + " DODGES!");
    // Reset the enemy's position to the left at a random height
    enemyX = 0;
    enemyY = random(0,height);
  }

  // Display the number of successful dodges in the console
  console.log(dodges);

  // The player is black
  fill(0);
  // Draw the player as a circle
  ellipse(avatarX,avatarY,avatarSize,avatarSize);

  // The enemy is red
  fill(255,0,0);
  // Draw the enemy as a circle
  ellipse(enemyX,enemyY,enemySize,enemySize);

}

function reset() {
  enemyX = 0;
  enemyY = random(0,height);
  avatarX = width/2;
  avatarY = height/2;
  dodges = 0;
}
```

---

## Flow...

- Now we have added complexity to the __control flow__ of our program
- It starts in `setup()`
- Moves to `draw()`
- When it encounters our function it jumps to `reset()`
- Then back to where it was in `draw()`
- When it finishes `draw()` it jumps back to the top of `draw()` for another frame
- And so on!

---

## All neat and tidy!

```javascript
function setup() {
  createCanvas(640,480);
  setupAvatar();
  setupWorld();
}

function draw() {
  updatePhysics();
  handleInput();
  drawWorld();
  drawAvatar();
  checkWinState();
}

// Actual definitions of those functions would be down here...
```

- We can imagine programs where everything is in functions!
- `draw()` becomes a nice story of what happens in the program

---

## All neat and tidy!

```javascript
function setup() {
  createCanvas(640,480);
  setupAvatar();
  setupWorld();
}

function draw() {
  updatePhysics();
  handleInput();
  drawWorld();
  drawAvatar();
  checkWinState();
}

// Actual definitions of those functions would be down here...
```

- We know where to look for specific kinds of problems now
- And we can comment out functions to check for issues

???

- The avatar isn't drawing properly? You should probably check `drawAvatar()`!
- Want to see the avatar without the world? Comment out `drawWorld()`!

---

## Modularity!

One big reason why functions are so great, is because:

Functions are ___modular___. We can tidy our code into separate, self-contained blocks that make sense as a unit. Our code becomes more organised, more readable, easier to fix.

---

## Food for thought

- When we write functions it's like we suddenly have this team of different workers who we can ask to do specific things for us
- But the weird thing is that these workers are all also... __us__.
- Because we write those functions, right? Get it? Deep. Split personality.


---

# Fin.
