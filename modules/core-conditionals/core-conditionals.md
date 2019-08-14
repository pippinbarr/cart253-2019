### Core / CART 253 / Fall 2018 / Pippin Barr

# Conditionals

---

## In this module

- `true`, `false`, and making decisions
- Conditional operators
- `if` statements
- Logic operators

---

## You can handle the truth!

- The ideas of `true` and `false` are central to our general understanding of the world
- Of course, in reality, working out what's `true` and what's `false` is quite difficult
- But in programming, things are a __lot more certain__
- Probably something to do with all those 1s and 0s floating around in there...

---

## Decisions, decisions....

- One way we use the ideas of `true` and `false` is that we use them to __make decisions__
- We say things like "__if__ the metro stays broken down for two more minutes __then__ I'm going to get off and walk home"
- That is, we're going to __do something__ based on whether a statement about the world turns out `true` or `false`

---

## From context to action

- This idea of going from __knowing something__ to __doing something__ is at the heart of what makes programming and software interesting
- This is a huge part of what makes programs __react to context__, instead of just doing the same thing every time
- They might react to the weather, or the date, or the keyboard, or something else...
- ... but in all cases they need to use these "__if__ this __then__ I'll do that" kinds of structures

---

## Some ifs...

- If the player presses the spacebar, do an amazing skateboard trick
- If the date is the 25th of December, play a Christmas song
- If the weather is cloudy, making the interface grey and hard to read
- If the user is shouting, making the screen vibrate
- AND SO ON!

---

## What is `true`? What is `false`?

- In programming we talk about things that can be `true` or `false` as _conditional expressions_ and they're often kind of like maths:

`23 < 24` is `true`  
`1 + 1 === 3` is `false`

- We use these kinds of expressions to _check what's happening_ in our code, and then react to it
- Usually it's better if we use variables!

```javascript
avatarX > width
```

- When would this be true?
--

- When the avatar has gone off the right side of the screen...

---

## Conditional operators

- We make __conditional expressions__ with __conditional operators__ and the main ones are:

```javascript
1 < 2 // Less than
2 > 1 // Greater than
1 <= 2 // Less than or equal to
2 >= 1 // Greater than or equal to
1 === 1 // Equality
1 !== 2 // Inequality
```

- See? Maths. All the above are `true`
- Note that this means we are very often checking __numbers__ with these operators

???

- Note that you will often see equality written as `==` instead of `===`. Both work, but they are subtly different. Generally speaking, until you learn the difference at some point it's better to use `===` to avoid potential trouble.

---

## Getting iffy

- So how do we __use__ these conditional expressions to check what's going on in our program?
- We use `if`-statements
- An `if`-statement __checks if a condition is `true`__, and will __do something__ based on the result

---

## A basic `if` statement

```javascript
if (mouseX > width/2) {
  background(0);
}
```

- This is an `if` statement that checks whether the mouse is in the right-hand side of the window
- And if the mouse __is__ over there, it makes the background of the window black
- Let's break it down...

???

- If you put this into the a project template you should put it inside the `draw()` function
- Why?
- Because you want this "question" the `if` statement represents to be asked over and over, each frame, so that the program will react when the truth value of the expression changes
- If we put it in `setup()` it will only run once!
- Sometimes we might have `if` statements in `setup()`, too, but if they're meant to help our program react to live events, then they should be in `draw()`

---

## A basic `if` statement

```javascript
if (mouseX > width/2) {
  background(0);
}
```

- First we have the word .hi[`if`]
- This is what tells our program we're creating an `if`-statement
- It kind of means __we're about to ask a question__

---

## A basic `if` statement

```javascript
if (mouseX > width/2) {
  background(0);
}
```

- Next we have .hi[`(...)`], opening and closing parentheses with stuff inside them
- We've seen this before in _functions_ where we were saying "these are the parameters"
- This time it's similar, but it means "__this is the condition__ I want you to check"
- So parentheses tend to mean "here's the information to help you do your job"
- As always: make sure they match correctly!

---

## A basic `if` statement

```javascript
if (mouseX > width/2) {
  background(0);
}
```

- __Inside the parentheses__ we have our __condition__: .hi[`mouseX > width/2`]
- This is __the thing we want to check__
- We want to know if it's `true` or `false`
- In English we're asking "is the mouse's x coordinate in the right-hand side of the window?"
- This is also known as a __conditional expression__

---

## A basic `if` statement

```javascript
if (mouseX > width/2) {
  background(0);
}
```

- After our condition in its parentheses we have .hi[`{ ... }`], curly brackets with stuff inside them
- Just like in a _function_ this means "here is __what to do__"
- But in this case it specifically means "here is what to do __if the condition is `true`__"

---

## A basic `if` statement

```javascript
if (mouseX > width/2) {
  background(0);
}
```

- So inside the curly brackets we have the code to run __if the condition is true__
- In this case we just want to make the background black with .hi[`background(0);`]
- But we could do __anything__ in here!
- __ANYTHING!!!__
- And we can have __as many lines of code as we want in here__

---

## A basic `if` statement

```javascript
if (mouseX > width/2) {
  background(0);
}
```

- And that's an `if` statement
- You start with __`if`__
- You specify the __conditional expression__ to check inside __parentheses__
- Then you specify the __instructions__ to run if the condition is `true` inside __curly brackets__

???

- Now we have plenty of brackets to think about, both parentheses __and__ curly brackets
- And these parentheses and curly brackets can belong to functions or to if statements (and later to other things)
- This means we need to get used to being careful about making sure they match correctly
- The parentheses go around the __condition__ only, and then the curly brackets come __right after that__ and go around the __instructions__
- Any slight mistakes here will break the program, so be careful when you're starting out
- And forever after, to be honest

---

## What `else`?

- Of course we might not __only__ want to react to the condition being `true`
- We may also want to do something specific if it's `false`
- And for this we can extend the `if` statement with an `else` to do just that

---

## An `if else` statement

```javascript
if (mouseX > width/2) {
  background(0);
}
else {
  background(255);
}
```

- Here we have the same `if` statement...
- ... but now with a bit extra after the curly brackets of our original `if`

---

## An `if else` statement

```javascript
if (mouseX > width/2) {
  background(0);
}
else {
  background(255);
}
```

- __After__ the closing curly bracket of the `if` on a new line we have the word .hi[`else`]
- This signals that we're going to deal with the case where the original condition in the `if` turns out to be `false`
- In this case, that would be what?
--

- When `mouseX <= width/2`
- That is, when the mouse is on the __left-hand side__ the window
- Practice __seeing__ the mathematical condition, but __thinking__ what it __means__

---

## An `if else` statement

```javascript
if (mouseX > width/2) {
  background(0);
}
else {
  background(255);
}
```

- Then we have our friends .hi[`{ ... }`], a set of curly brackets
- This time they mean "here's what to do if the condition is `false`"
- Note that we __don't need parentheses__, because we __don't need to specify a new condition__
- We're still relying on the original condition

---

## An `if else` statement

```javascript
if (mouseX > width/2) {
  background(0);
}
else {
  background(255);
}
```

- Then we have the instructions we want to run when the condition is `false`
- In this case .hi[`background(255);`] to make the background white

---

## An `if else` statement

```javascript
if (mouseX > width/2) {
  background(0);
}
else {
  background(255);
}
```

- So that's an `if else` statement
- You specify what to do if the condition is `true`
- __And__ what to do if the condition is `false`

---

## But what if...

- Sometimes we might want to get even more complicated
- Often, even!
- We might want to check _another_ condition if the first one is `false` instead of _only_ deciding based on the first condition
- And we can...

---

## An `if else if` statement

```javascript
if (mouseX < width/3) {
  background(0);
}
else if (mouseX < 2*width/3) {
  background(255);
}
else {
  background(255,0,0);
}
```

- So we can have __another `if`__ after our `else` that will check __another condition__
- Note that it will __only check that second condition if the first condition is `false`__
- And note we can still have an `else` at the end that handles if __both the conditions are `false`__

---

## An `if else if` statement

```javascript
if (mouseX < width/3) {
  background(0);
}
else if (mouseX < 2*width/3) {
  background(255);
}
else {
  background(255,0,0);
}
```

- So what would this do you figure this will do?
--

- Yeah, it will make the background black if the mouse is one third of the canvas from from the left margin, white if it's between one third and two thirds from the left margin, and red if it's more than two thirds from the left margin...
--

- It's interesting how the code is kind of __easier to read__ than that
- Code is great for concisely expressing these kinds of technical ideas

---

## `if else if else if else if...`

```javascript
if (mouseX < width/5) {
  background(0);
}
else if (mouseX < 2*width/5) {
  background(255);
}
else if (mouseX < 3*width/5) {
  background(0,255,0);
}
else if (mouseX < 4*width/5) {
  background(0,0,255);
}
else {
  background(255,0,0);
}
```

- This can go on for a while!

---

## What if also this other thing?

- We can put whatever instructions we want inside the curly brackets of an `if` statement...
--

- ... Including another `if` statement!

---

## Nested `if`-statements

```javascript
if (mouseX > width/2) {
  if (mouseY > height/2) {
    background(0);
  }
}
```

- Putting an `if` statement inside an `if` statement is called __nesting__ the `if`s
- Now the `background(0);` instruction will only happen if __both conditions are `true`__
- So the mouse has to be in the right half of the window
- __And__ it has to be in the bottom half of the window

???

- This is getting kind of cool
- It's clear we can check __really specific conditions__
- Which helps give our program a kind of personality
- It's like it __cares__ about really particular things being true (or false)

---

## Cold, hard logic

- Sometimes we need to check more complicated conditions than we can express in a math-style condition
- To help out, programming uses __logic operators__

`&&` means AND  
`||` means OR  
`!` means NOT

- Kind of nice, since this is _literally_ how computers work at the circuitry level!
- But how does this work in code?

???

- Computer circuits are, at heart, made up of what are called __logic gates__
- Among those are __and gates__, __or gates__, and __not gates__
- In the circuitry they control the flow of electrons rather than programming instructions
- (But those programming instructions we write are, ultimately, __expressed as electrons!!!__)

---

## Logically speaking...

.hi[`(a && b)`]  
This is `true` if __both__ `a` and `b` are `true`, otherwise it is `false`.

.hi[`(a || b)`]  
This is `true` if __either__ `a` __or__ `b` are `true`, otherwise it is `false`.

.hi[`(!a)`]  
This is `true` if `a` is `false`, and `false` if it's `true`.

---

## Quiz

```
let x = 10;
let y = 150;
```

- `(x < y && x * y === 1500)` is...
--
 `true`
--

- `(x < y && y / x === 14)` is...
--
 `false`
--

- `(x < y || y / x === 14)` is...
--
 `true`
--

- `(!(x > y))` is...
--
 `true`
--

- `(x + y === 160 && !((y < x) || (y / 50) > 100))` is...
--
 `true`
--

- `(x - 10)` is...
--
 `false`
--

- Wait, what?

---

## JavaScript, truth, and falsity

- One thing JavaScript does secretly for you when it can is __convert values__ so they will work in the context you're using them
- So when we write...

```javascript
if (x - 10) {
    console.log("Will we see this?");
}
```

JavaScript will:
  - Work out the condition is `10 - 10` by plugging in the value of `x`
  - Compute the expression and gets the result of `0`
  - __Convert `0` to `false`__
  - Evaluate the condition as being `false`

---

## Basic boolean conversions

- `0` is `false` and every other number is `true`
- `""` is `false` and every other string of characters if `true`
- `undefined` is `false`

???

- When people talk about this conversion process it is usually called __coercion__
- Read more here: https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/

---

## In practice...

```javascript
if (mouseX > width/2 && mouseY > height/2) {
  background(0);
}
```

- Here we have recreated the __nested `if`-statements__ from before using `&&`
- The background will be black if the mouse is in the right half AND in the bottom half of the window

---

## Pop-quiz!

What will this do?

```javascript
if (2 > 0 || 10 < 9) {
  println("Go Cowboys!");
}
else if (10 < 20 && 9 <= 9) {
  println("Go Giants!");
}
if (!(10 > 0 && 9 < 10)) {
  println("Go whoever!");
}
```

???

- __Hint:__ I'm a Dallas Cowboys fan.
- Also: don't use a bunch of hard coded values like this of course!

---

## Let's get variable...

- So far we've mostly looked at conditions involve hardcoded numbers
- But the true value of `if` statements is in checking the values of _variables_

---

## Changing colours based on position

```javascript
let circleX;
let circleY;
let circleSpeed = 2;
let circleVX = circleSpeed;
let circleSize = 100;

function setup() {
  createCanvas(500,500);
  circleX = 0;
  circleY = height/2;
}

function draw() {
  background(255);
  if (circleX < width/2) {
    fill(255,0,0);
  }
  else {
    fill(0,255,0);
  }

  circleX += circleVX;

  ellipse(circleX,circleY,circleSize,circleSize);
}
```

---

## Hover effect

```javascript
let circleX;
let circleY;
let circleSize = 100;

function setup() {
  createCanvas(500,500);
  circleX = width/2;
  circleY = height/2;
}

function draw() {
  background(255);
  let d = dist(mouseX,mouseY,circleX,circleY);
  if (dist < circleSize/2) {
    fill(255,0,0);
  }
  else {
    fill(255);
  }
  ellipse(circleX,circleY,circleSize,circleSize);
}
```

???

- The `dist()` function returns the distance between two sets of (x,y) coordinates
- In the case above, it's returning the distance between the __mouse position__ and the __centre of the circle__
- We then check that distance to find whether it's __inside the circle__ by checking it against the __radius__ of the circle (the distance from the centre of the circle to its perimeter), which is __half the diameter__ of the circle

---

## And more!

```javascript
if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
  // The avatar has gone off the screen!
}
```

- This would whether an imagined avatar has gone off the screen
- Maybe it should... die for this!

---

## `true` and `false` are values

- We've seen that conditional expressions evaluate as either `true` or `false`
- And in fact `true` and `false` are __values__ we can store in __variables__
- This __type__ of value is called a __boolean__
- Storing a boolean in a variable can be a useful way to track the state of things in a program...

---

```javascript
let hasEnteredCircle = false;
let circleX;
let circleY;
let circleRadius = 50;

function setup() {
  createCanvas(500,500);
  circleX = width/2;
  circleY = height/2;
}

function draw() {
  background(200);

  let d = dist(mouseX,mouseY,circleX,circleY);
  console.log(d);
  if (d < circleRadius) {
    hasEnteredCircle = true;
  }

  if (hasEnteredCircle) {
    fill(255,0,0);
  }
  else {
    fill(0);
  }

  ellipse(circleX,circleY,circleRadius*2);
}
```

???

- So here we're able to __remember__ that whether or not the mouse has ever been inside the circle
- Rather than checking each frame
- This basic concept can be very helpful when our program needs to remember whether something has happened at some point in the past, rather than always "living in the now"
- We might want to remember if our game has started, whether the user has clicked a specific button in the past, etc.

---

## Food for thought

- Now we can make __decisions__ in our code based on __context__
- This is a huge step because it means our programs can __behave differently__ based on what happens
- But be aware that this is a double-edged (+10) sword...
--

- It can be very tempting to think of programming as

_if this then that otherwise that but if this then that other thing unless this in which case that and then that..._

---

## Food for thought...

_If the player smiles then make the sun get brighter, if the player tries to shave with their broadsword check their shaving skill tree and if they have at least 4 shave points and the sun is up and they talked to the priest then the shave is successful but otherwise they cut their own head off and if they climb a mountain and if the mountain is actually a giant then the giant wakes up if the sun is in its eyes and otherwise there is a five percent chance it wakes up but only if the player prayed at the Homunculus altar at the start of the game and if..._

- This is the problem of __content generation__ in games in particular
- But really any dynamic, richly interactive system
- And this is why the actual things you can do in games is __so limited__

???

- A big part of the solution concerns not modeling games at the level of specifying “action and reaction” but creating the underlying systems.
- So you make a physics system rather than “what happens if they jump off a mountain, what about off a chair?”
- Procedural content modeling is a major area of research here, too.
- Ultimately this is a very serious issue in creating games/worlds.

---

# Fin.
