### Core / CART 253 / Pippin Barr

# Object-Oriented Programming

---

## Welcome to the real (virtual) world!

- Object Oriented Programming (OOP) was a major revolution in software engineering
- It allows us to think about our programs with a different metaphor than the flow of control from one function to the next
- Instead we can think of programs in more "human" terms as little worlds of interacting objects

???

- Note that OOP is still not an entirely __natural__ way of interacting with a computer
- But it does at least allow us to think in terms of __systems__ of objects and agents, which is something
- It's arguably more intuitive
- Also note that thinking of programs as a flow of control between __functions__ is also still a highly valued way of programming called __functional programming__
- And in the end it's __still__ kind of how things work in OOP too - the flow of control still moves from one line to the next, it's just it jumps "into" objects as well

---

## Objects

- So what are the "objects" in OOP?
- Well in our world, objects are distinct physical entities in the world (a person, a projector, a window, ...)
- Those objects have particular __properties__ (a person has an age, a height, a weight, ...)
- And they have particular __functions__ (a projector can be turned on, project an image, play a sound, ...)
--

- Objects in programming are the same idea
- And which properties and functions we choose to include in our implementation depends on what we're doing

---

## "OOP Brave New World!"

- The win is we can start to think about programs as __worlds__ full of little __objects__ that have __properties__ and __functions__ and that can __interact__ with each other
- This is a big part of the solution to writing complicated code that interacts with itself and creates complex, interesting results
- To actually implement this kind of programming we need some new notation/syntax
- Which we will learn now!

???

- Quote: Miranda in William Shakespeare's __The Tempest__. Sort of.

---

## The game of life

- To get the idea of OOP, let's return to our favorite little simulation, the predator-prey relationship

---

## Designing with objects and classes

- Thinking in objects can be a helpful way to design our programs
- We ask what __things__ there are in the program
- We design and implement __classes__ that __describe__ those things
- And then we create __objects__ out of those classes that __are__ those things in our program

???

- Note that the classes don't have to describe visible, "solid" elements in our program, some of these things might be invisible.
- Often we create objects whose entire job is to manage all the other objects, for example (in a videogame this is often called the `GameManager` object)

---

## What are the "things" (classes) in our predator-prey simulation?

--

- A __Predator__
- A __Prey__

---

## What does a Predator know?

- What __properties__ must a Predator have? (These are like its variables)
--

  - A __position__
  - A __velocity__
  - A __speed__ (perhaps including the idea of sprinting)
  - __Health__
  - __Visual information__ like size and fill
  - __Input keys__

---

## What does a Predator do?

- What can the Predator __do__? (These are like its functions)
--

  - __Handle input__ from the player
  - __Move__ around (including __wrapping__ at the edges of the screen and __losing health__ when it moves)
  - __Eat__ the Prey if they overlap (and __gain health__ when it does so)
  - __Display__ itself on the screen

- __Note__: in OOP we usually call these functions __methods__

---

## A Predator class

- To create the "description" of our Predator we need to create a __class__
- This involves some special syntax

---

```javascript
class Predator { // A Predator class describes what a Predator is and does
  constructor() {
    // Sets up the Predator when it is created or "constructed"
  }

  handleInput() {
    // Check for player input and react appropriately
  }

  move() {
    // Move the predator based on velocity
    // Lose health from movement
    // Wrap at the canvas edges
  }

  handleEating(prey) {
    // Check for an overlap with this prey
    // And reduce its health if there is one
    // Also increase the predator's health
  }

  display() {
    // Draw the predator on the canvas
  }
}
```

???

- Let's look at the pieces here

`class`
- This is the magic word that lets us create a class to describe a particular kind of object in our program

`Predator`
- After `class` we write the name of our class
- It should start with a capital letter and then use camel case, so `MyWonderfulClass` for instance

`{ ... }`
- After the name of the class we have curly brackets
- They enclose the entire description of the class (all its methods)

`constructor() { ... }`
- The `constructor` method is called whenever we create a __new__ object out of this class
- It's like the `setup()` for an object, it runs once when the object starts to exist
- We largely use it to set up the properties of the object
- `constructor` is a __special word__ in JavaScript specifically for this kind of method, you can't call it anything else
- __Notice__ how we don't write `function` before the names of __methods__ in a class, we just write the name of the method, the parentheses, and then the curly brackets with the instructions inside them

```
handleInput() { ... }
move() { ... }
handleEating(prey) { ... }
display() { ... }
```
- The reset of the methods follow the same pattern
- You have the name of the function (like `handleInput`), the parentheses containing any parameters, and then curly brackets with the instructions inside them

---

## Create a class file

- While we __can__ put our class definition in our main `script.js` file, it's much better to create a new file specifically for our class
- We will name the file `Predator.js`, using the __name__ of the class as the __name__ of the file (and adding `.js` because it's still JavaScript)
- So we
  - create a new file,
  - put our (skeleton) class definition in it,
  - save the file as `Predator.js` in the `js/` folder

---

## Include the class file in your `index.html`

- For our program to be able to use our new class definition we have to tell the project about the `Predator.js` file
- So in `index.html` we insert a `script` tag just like the one for `script.js` but for `Predator.js`
- We'll put the `Predator.js` tag __before__ the `script.js` tag, so it will look like

```html
<script src="js/Predator.js"></script>
<script src="js/script.js"></script>
```

- Now we're ready to use the `Predator` class
- But first we need to actually fill in its __methods__

---

## `constructor()`

- So if the `constructor()` method is for setting up our Predator, it needs to set up all its __properties__, which are...?
--

- Things like position, velocity, speed, health, fill color, radius, ...
- All the information our Predator needs to know in order to "do its job"
- Importantly, we __don't declare variables__ in the usual way
- Instead we use one more special word, called `this` to define the __properties__ this class of object has...

---

```javascript
constructor() {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.maxHealth = 100;
  this.health = 100; // Must be AFTER defining this.maxHealth
  this.healthLossPerMove = 0.1;
  this.healthGainPerEat = 1;
  this.speed = 5;
  this.fillColor = color(255,255,0);
  this.radius = 100;
  this.upKey = UP_ARROW;
  this.downKey = DOWN_ARROW;
  this.leftKey = LEFT_ARROW;
  this.rightKey = RIGHT_ARROW;
}
```

- This is pretty good, but what if we wanted to be able to determine where the Predator starts or what its fill color is, etc.?
--

- We would need some __arguments__ for the constructor
- And they work in just the same way as any function, luckily

---

```javascript
constructor(x, y, speed, fillColor, radius) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.maxHealth = radius; // Maximum health is the starting radius
  this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
  this.healthLossPerMove = 0.1;
  this.healthGainPerEat = 1;
  this.speed = speed;
  this.fillColor = fillColor;
  this.radius = this.health; // Radius is matched to health
  this.upKey = UP_ARROW;
  this.downKey = DOWN_ARROW;
  this.leftKey = LEFT_ARROW;
  this.rightKey = RIGHT_ARROW;
}
```

- This will allow us to specify some of the key properties of our Predator __when we create it__
- Which gives us flexibility if we want it to start in different places, be different colors, move at different speeds, be different sizes...

---

## The other methods

- The rest of the methods can essentially be defined in the same way we have defined them in our previous programming
- With the exception that when we want to refer to a __property__ of the class, we use `this.` in front of it
- And if we want to call a __method__ of the class, we also use `this.` in front of that

---

```javascript
handleInput() {
  if (keyIsDown(this.leftKey)) {
    this.vx = -this.speed;
  }
  else if (keyIsDown(this.rightKey)) {
    this.vx = this.speed;
  }
  else {
    this.vx = 0;
  }

  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) {
    this.vy = this.speed;
  }
  else {
    this.vy = 0;
  }
}
```

???

- As you can see, this is the same code for handling input we've seen before
- It's just using `this.` in front of any properties we want to refer to or change
- Like `this.leftKey` and `this.downKey` for the position and `this.vx` and `this.vy` for the velocity

---

```javascript
move() {
  this.x += this.vx;
  this.y += this.vy;

  this.health = this.health - this.healthLossPerMove;
  this.health = constrain(this.health,0,this.maxHealth);

  if (this.x < 0) {
    this.x += width;
  }
  else if (this.x > width) {
    this.x -= width;
  }
  if (this.y < 0) {
    this.y += height;
  }
  else if (this.y > height) {
    this.y -= height;
  }
}
```

???

- Again, essentially the "same" code as we've seen for these ideas
- Just using `this` everywhere to refer to properties
- Notice that `width` and `height` are just written the same old way because they are `p5` variables, __not__ properties of our Predator

---

## `move()` and `handleWrapping()`

```javascript
move() {
  this.x += this.vx;
  this.y += this.vy;

  this.health = this.health - this.healthLossPerMove;
  this.health = constrain(this.health,0,this.maxHealth);

  this.handleWrapping(); // Calls the handleWrapping method, note the use of "this"
}

handleWrapping() {
  if (this.x < 0) {
    this.x += width;
  }
  else if (this.x > width) {
    this.x -= width;
  }
  if (this.y < 0) {
    this.y += height;
  }
  else if (this.y > height) {
    this.y -= height;
  }
}
```

???

- This is a nice improvement because it keeps the movement code and the wrapping code separate
- It also shows us that we can __call other methods__ in our class by using `this` before them

---

```javascript
handleEating(prey) {
  let d = dist(this.x,this.y,prey.x,prey.y);
  if (d < this.radius + prey.radius) {
    this.health += this.healthGainPerEat;
    this.health = constrain(this.health,0,this.maxHealth);
    prey.health -= this.healthGainPerEat;

    if (prey.health < 0) {
      prey.reset();
    }
  }
}
```

???

- Again all very similar with a couple of exceptions
- You can see we're able to take a __parameter__ that will contain a __prey__ object
- And you can see we're __assuming__ some things about the __prey__ object passed as a parameter to this method
- In particular we assume that the prey has `x`, `y`, `radius`, and `health` properties which we access with `prey.x`, `prey.y`, `prey.radius` and `prey.health`
- And we're assuming the Prey has a `reset()` method we can call if it dies

---

```javascript
display() {
  push();
  noStroke();
  fill(this.fillColor,this.health);
  this.radius = this.health;
  ellipse(this.x,this.y,this.radius * 2);
  pop();
}
```

???

- Again, just like the earlier versions, but with `this` everywhere
- As always with OOP we use `this` __instead__ our class definition to access properties (and methods)

---

## We have a Predator!

- See the slide notes for our full implementation

???

```javascript
class Predator {
  constructor(x, y, speed, fillColor, radius) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    this.healthLossPerMove = 0.1;
    this.healthGainPerEat = 1;
    this.speed = speed;
    this.fillColor = fillColor;
    this.radius = this.health;
    this.upKey = UP_ARROW;
    this.downKey = DOWN_ARROW;
    this.leftKey = LEFT_ARROW;
    this.rightKey = RIGHT_ARROW;
  }

  handleInput() {
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    }
    else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    }
    else {
      this.vx = 0;
    }

    if (keyIsDown(this.upKey)) {
      this.vy = -this.speed;
    }
    else if (keyIsDown(this.downKey)) {
      this.vy = this.speed;
    }
    else {
      this.vy = 0;
    }
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    this.health = this.health - this.healthLossPerMove;
    this.health = constrain(this.health, 0, this.maxHealth);

    this.handleWrapping(); // Calls the handleWrapping method, note the use of "this"
  }

  handleWrapping() {
    if (this.x < 0) {
      this.x += width;
    }
    else if (this.x > width) {
      this.x -= width;
    }
    if (this.y < 0) {
      this.y += height;
    }
    else if (this.y > height) {
      this.y -= height;
    }
  }

  handleEating(prey) {
    let d = dist(this.x, this.y, prey.x, prey.y);
    if (d < this.radius + prey.radius) {
      this.health += this.healthGainPerEat;
      this.health = constrain(this.health, 0, this.maxHealth);
      prey.health -= this.healthGainPerEat;

      if (prey.health < 0) {
        prey.reset();
      }
    }
  }

  display() {
    push();
    noStroke();
    fill(this.fillColor);
    this.radius = this.health;
    ellipse(this.x, this.y, this.radius * 2);
    pop();
  }
}
```

---

## Ready to create a new Predator

- Now that we have __described__ how a Predator behaves through its `class` definition we can actually __create__ a Predator using the `new` keyword

```javascript
let predator; // This will contain our Predator object

function setup() {
  createCanvas(windowWidth, windowHeight);
  predator = new Predator(0, 0, 5, color(255, 0, 0), 25);
}
```

- That is, we __create__ an __object__ from a __class__ by using `new` and then its __constructor__
- But note that when we __call__ the constructor we write the __name of the class__, `Predator`, instead of `constructor`
- And we pass the various arguments through to the constructor so it can in turn set up the properties of the Predator we're creating

---

## Ready to use our new Predator

- For the Predator to "do its thing" we still need to call its various __methods__ in our main program's `draw()` function so that it can move around, wrap, display, etc.

```javascript
function draw() {
  background(0);
  predator.handleInput();
  predator.move();
  predator.display();
}
```

- You can see that to call the Predator's __methods__ from the __outside__ we use the name of the variable containing the Predator object, followed by a period/dot, follow by the appropriate method call (remember this is called __dot notation__)

???

__For the record__: you can access an object's properties directly

```javascript
let predator;

function setup() {
  createCanvas(windowWidth,windowHeight);
  predator = new Predator(0, 0, 5, color(255, 0, 0), 25);
}

function draw() {
  background(0);
  predator.handleInput();
  predator.move();
  predator.radius = predator.radius + 1;
  predator.display();
}
```

- We __can__ directly access an object's __properties__ using dot notation too
- Some people will tell you __not__ to do this kind of "meddling" inside an object
- We won't be that strict in this course, but be aware people can feel that way

---

## More than one!

- So the Predator class is now defined enough that we can create a Predator and drive it around on the screen with the arrow keys
- That is, we're back to where we were with a simpler version where we described all the properties in a simple JavaScript Object and the methods as functions in our main program
- But part of the true magic of Object Oriented Programming is the idea that we can have __more than one object of the same type__
- Now that our program knows how to make a Predator, we can make __more than one__
- Each time we make a new Predator __object__ from the Ball __class__ using `new`

---

```javascript
let snowLeopard;
let tiger;

let predator;

function setup() {
  createCanvas(windowWidth,windowHeight);
  snowLeopard = new Predator(0, 0, 5, color(255, 255, 255), 25);
  tiger = new Predator(100, 100, 5, color(255, 255, 0), 50); // Note the different position and size
}

function draw() {
  background(0);
  snowLeopard.handleInput();
  tiger.handleInput();
  snowLeopard.move();
  tiger.move();
  snowLeopard.display();
  tiger.display();
}
```
--

- Unsurprisingly, the lion and the snow leopard move in exactly same way because they have the same keys defined for input
- If we want to separate them we would have to include the four movement keys as parameters in the constructor!

---

## Objects and Classes

- Let's go over these ideas again now we know what they look like...
- A `class` is the __description__ of what something (like a Predator) can do, including properties and methods
- So the class `Predator` describes or defines the __idea__ of a Predator
- We define classes in JavaScript by using the `class` keyword
- An __object__ is an __instance__ of a class that exists in your running program
- We create __instances__ or __objects__ from a __class__ using `new` and the __constructor__
- So the variable `tiger` contains an __object__ that actually exists and does things in your program (like bounce around), so does `snowLeopard`

---

## You better Prey?

- We're currently missing something in our predator-prey simulation
- The __Prey__ that the Predator chases around and eats
- So we need __another class__ that defines how a Prey works, and we need to create a `new` Prey in our main program and call its methods so that it exists in our little world

---

## Activity: Create a skeleton Prey class definition

- Just as with the Predator...
- Make a file called `Prey.js` and save it in your `js/` folder
- Add a `script` tag to your `index.html` to include `Prey.js` in your program
- Add a skeleton class definition for `Prey` that includes __empty__ methods for:
  - `constructor()`
  - `move()`
  - `handleWrapping()`
  - `display()`
  - `reset()`
- (Veeeery similar to the Predator)

???

`Prey.js`
```javascript
class Prey {
  constructor() {
    // This will set up the Prey's properties
  }

  move() {
    // This will move the Prey based on noise()
  }

  handleWrapping() {
    // This will handle the Prey's wrapping on the canvas
  }

  display() {
    // This will display the Prey as an ellipse
  }

  reset() {
    // This will reset the prey to its starting conditions
    // in a random location
  }
}
```

`index.html`
Our script tags should now look like this:
```html
<script src="js/Predator.js"></script>
<script src="js/Prey.js"></script>
<script src="js/script.js"></script>
```

---

## Activity: Define the `constructor`

- Add parameters to the constructor so a Prey can be start with an `x`, `y` position, a `speed`, a `fillColor` and a `radius`
- Set the Prey's properties for `x`, `y`, `speed`, `fillColor`, `radius`, `maxHealth`, `health`, `tx`, and `ty` (use random values for `tx` and `ty`)
- Remember to use `this.` in front of the properties when you're setting them

???

```javascript
constructor(x, y, speed, fillColor, radius) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.tx = random(0, 1000); // To make x and y noise different
  this.ty = random(0, 1000); // we use random starting values
  this.maxHealth = radius;
  this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
  this.speed = speed;
  this.fillColor = fillColor;
  this.radius = this.health;
}

```

---

## Activity: define the `move()` method

- Write the instructions in the `move()` method
- Update the Prey's velocity using `noise()` (including updating the time properties)

```javascript
this.vx = map(noise(this.tx),0,1,-this.speed,this.speed);
this.vy = map(noise(this.ty),0,1,-this.speed,this.speed);

this.x += this.vx;
this.y += this.vy;

this.tx += 0.01;
this.ty += 0.01;
```

- Call the `handleWrapping()` method (don't forget to use `this` in front of it)

???

```javascript
move() {
  this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
  this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);

  this.x += this.vx;
  this.y += this.vy;

  this.tx += 0.01;
  this.ty += 0.01;

  this.handleWrapping();
}
```

---

## Activity: define the `handleWrapping()` method

- Copy over the `handleWrapping()` method of the `Predator`, since it's exactly what we want

???

```javascript
handleWrapping() {
  if (this.x < 0) {
    this.x += width;
  }
  else if (this.x > width) {
    this.x -= width;
  }
  if (this.y < 0) {
    this.y += height;
  }
  else if (this.y > height) {
    this.y -= height;
  }
}
```

---

## Activity: define the `display()` method

- Again, this will be the same as the `Predator` version, so we could just copy it
- Or you can do something a bit different if you like

???

```javascript
display() {
  push();
  noStroke();
  fill(this.fillColor, this.health);
  this.radius = this.health;
  ellipse(this.x, this.y, this.radius * 2);
  pop();
}
```

---

## Activity: define the `reset()` method

- The reset method should:
  - Set the Prey's health property back to the maximum
  - Set the Prey's position to a random `x` (between `0` and `width`) and `y` (between `0` and `height`)

???

```javascript
reset() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.health = this.maxHealth;
  this.radius = this.health;
}
```

---

## Activity: create a new Prey in the main script

- Define a variable called `antelope` (or some other prey name) at the top of the script
- Create a `new` `Prey` object in `setup()` with parameters, much as for `Predator`
- Call the `move()` and `display()` methods of the `antelope` in `draw()`

???

```javascript
let tiger;
let antelope; // NEW

function setup() {
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(100, 100, 5, color(255, 255, 0), 25);
  antelope = new Prey(100, 100, 10, color(0, 255, 0), 25); // NEW
}

function draw() {
  background(0);
  tiger.handleInput();
  tiger.move();
  antelope.move(); // NEW
  tiger.display();
  antelope.display(); // NEW
}
```

---

## Eating

- The last thing we want to do is use the Predator's `handleEating(prey)` method to see if either of our Predators have eaten the prey, so we add it to `draw()`:

```javascript
function draw() {
  background(0);
  tiger.handleInput();
  tiger.move();
  antelope.move();
  tiger.handleEating(antelope); // NEW
  tiger.display();
  antelope.display();
}
```

---

## We have a Prey!

- That concludes a pretty good definition and use of a Prey class
- A full version is in the slide notes

???

`Prey.js`
```javascript
class Prey {
  constructor(x, y, speed, fillColor, radius) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.tx = random(0, 1000); // To make x and y noise different
    this.ty = random(0, 1000); // we use random starting values
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    this.speed = speed;
    this.fillColor = fillColor;
    this.radius = this.health;
  }

  move() {
    this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
    this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);

    this.x += this.vx;
    this.y += this.vy;

    this.tx += 0.01;
    this.ty += 0.01;

    this.handleWrapping();
  }

  handleWrapping() {
    if (this.x < 0) {
      this.x += width;
    }
    else if (this.x > width) {
      this.x -= width;
    }
    if (this.y < 0) {
      this.y += height;
    }
    else if (this.y > height) {
      this.y -= height;
    }
  }

  display() {
    push();
    noStroke();
    fill(this.fillColor);
    this.radius = this.health;
    ellipse(this.x, this.y, this.radius * 2);
    pop();
  }

  reset() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.health = this.maxHealth;
    this.radius = this.health;
  }
}
```

---

## We have a Predator-Prey simulation!

- At this point we have a (primitive) simulation of a world of predators and prey
- We could create new Predators and give them different control keys to create a version where players compete with each other to eat limited resources (maybe even each other???)
- We could create different numbers of Prey and Predators to create different ecosystems
- We could create "AI" Predators that move around like Prey (but eat Prey), or even that target the Prey and hunt them automatically...

Full commented code for a version with one Predator and three Prey is available as [game-oop-predator-prey.zip](https://github.com/pippinbarr/cart253-2019/raw/master/games/game-oop-predator-prey.zip) in the course website's `games/` folder.

---

## One last time

- A __class__ is a definition of how some kind of object behaves
- A class defines this behaviour via __properties__ (which are like variables specifically for that thing) and __methods__ (which are like functions specifically for that thing)
- An __object__ is a specific __instance__ of a class that is created when your program runs, it is a "real thing" in the program with proper values in its properties and which can meaningfully have its methods called to make something happen
- `Predator` is a __class__ (the idea of a how a predator works), but `snowLeopard` and `tiger` are __objects__ or __instances__ of the `Predator` class - they actually exist and do things when the program runs

???

- The __objects__ we create with a __class__ are in fact __JavaScript__ objects, it's "just" a special and incredibly organised way of creating them

Also: __Other people's objects are amazing__

- Finally, objects are also amazing because __other people__ can define them __for__ us to save us work
- For example when we use `new Audio()` we're creating an object that represents an audio file in our code, which we can then `.play()` and `.pause()` and set the `.loop` property of...
- In fact, this is how __libraries__ in programming very often work: they create some special __object__ which you then use to access the powers of the library

---

# Fin
