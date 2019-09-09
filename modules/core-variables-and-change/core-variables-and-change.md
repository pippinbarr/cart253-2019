### Core / CART 253 / Pippin Barr

# Variables and change

---

## In this module

- Arithmetic
- Ch-ch-changes

---

## Arithmetic!

- You can do arithmetic on numbers in p5, and also on variables with numbers in them
- It uses __operators__ you probably already know from calculators and so on

```javascript
let a = 21 + 21; // addition
let b = a - 2; // subtraction
let c = b * 5; // multiplication
let d = c/2; // division
```

- There are some other operators too, which you can look up in the reference
- What is the value inside `d`?

???

- Here is a handy JavaScript operator reference
https://www.w3schools.com/jsref/jsref_operators.asp
- Notice how JavaScript __does not care__ that you are using a variable called `a` or `bigTommySezHello` or `pi` for all these calculations
- Names matter to humans, though, so we try to give good names!

---

## More arithmetic!

- In programming the arithmetic follows the standard order of precedence for operators
- BEDMAS = Brackets, Exponents, Division, Multiplication, Addition, Subtraction
- But you can use parentheses to prioritise parts of your arithmetic, just like in math class...

So:

```javascript
let a = (42 + 42) / 2;
```

is not the same as

```javascript
let a = 42 + 42 / 2;
```

???

- Remember that parenthesis in arithmetic give __precedence__ to the things in parentheses
- The things in parentheses are calculated __first__
- This can matter when you also have standard arithmetic precedence going on
- `(42 + 42) / 2 === (84) / 2 === 42`
- `42 + 42 / 2 === 42 + 21 === 63`

---

## Space, man

- Pay attention to spaces. A lot of the time they're not strictly necessary, but they make things a lot easier to read.
- These are equivalent:

```javascript
let a=(42+42)/2;
```

```javascript
let a = (42 + 42) / 2;
```

- But the second one is easier to read, right?

???

- Remember that you __cannot__ remove the space between `let` and `a` here because your program will break
- This is because if you do that, JavaScript can no longer tell where the special word `let` ends and the __variable name__ `a` begins

---

## Variables FTW!

Variables give us a lot of power in programming.

__Memory__. We can __remember__ values over time.

__Sense__. We can __label__ values with their meaning instead of hard-coding them.

__Change__. We can __change__ the values in variables

---

## Shocked face with variables again!

```javascript
let faceX = 250;
let faceY = 250;
let faceSize = 300;
let faceEyeSize = 50;
let faceEyeXOffset = 50;
let faceEyeYOffset = 50;
let faceMouthYOffset = 50;
let faceMouthSize = 100;

function setup() {
  createCanvas(500,500);
}

function draw() {
  ellipse(faceX,faceY,faceSize,faceSize);
  ellipse(faceX-faceEyeXOffset,faceY-faceEyeYOffset,faceEyeSize,faceEyeSize);
  ellipse(faceX-faceEyeXOffset,faceY-faceEyeYOffset,faceEyeSize/2,faceEyeSize/2);
  ellipse(faceX+faceEyeXOffset,faceY-faceEyeYOffset,faceEyeSize,faceEyeSize);
  ellipse(faceX+faceEyeXOffset,faceY-faceEyeYOffset,faceEyeSize/2,faceEyeSize/2);
  ellipse(faceX,faceY+faceMouthYOffset,faceMouthSize,faceMouthSize);
}
```

???

- Notice how we can define the size of the pupils based on the size of the eye - a pupil is __half the size of the surrounding eye__ - now when we change the eye size, the pupil will be adjusted automatically!
- Notice how we define only one x offset for the eyes - they're symmetrical! This way we change only one number to make the eyes move closer to the centre or further away
- Notice how this ends up encoding __rules__ about how this face works, though, which might be restrictive of creativity?

---

## Variables save the day

Notice how we can

- Understand the code significantly better __just because of the names__
- Easily adjust the way the face appears by changing the variables at the top
- Set up our variables and use them such that some things happen __automatically__ (like the pupil size)

---

## Variables can change

__What if we added something to the `draw()` function that changed one of the variables?__

--

`faceX = faceX + 1;`

- Whhooooooaaaaa....
- That is, we can do arithmetic __using variables__, remember that they just stand in for the __value__ inside them
- So we can even change a variable __relative to itself__
- The above means: "make `faceX` equal to itself plus `1`"
- Or, more simply: "add `1` to `faceX`"

???

- Again, remember that when we __use__ a variable after having __declared__ it, we don't use `let` anymore
- One option would be to add `faceX = faceX + 1;`
- Which can be written as `faceX += 1;`
- Which can also be written as `faceX++;` (add one to `faceX`)
- But there are others of course!
- Q: __Why does it leave a trail?__

---

## Self-changing operators

- As always, programmers like brevity, so they think having to do this is too long

```javascript
faceX = faceX + 1;
```

- Instead you can write

```javascript
faceX += 1; // += adds the value after it to the variable before it
```

- Or even

```javascript
faceX++; // ++ adds exactly one to the variable before it
```

- There is also `-=`, `*=`, `/=`, and `--`;


---

## This is a pretty big deal

- We have created __life itself__!
- Well, we have created movement at the very least...
- Effectively we have the start of __code-based animation__
- Part of how we make things happen in our program is by changing the values in variables over time!

???

- Consider my not very good game [You Say Jump I Say How High](http://www.pippinbarr.com/2012/01/24/you-say-jump-i-say-how-high/)
- It uses this idea of changing variables for physics to make gameplay
- Or consider another of my games, [Get X Avoid Y](http://www.pippinbarr.com/2014/06/24/get-x-afunction-y/)
- It basically uses variables to store different pictures so that the game looks different even with the same code

---

## Let's get `random()`

- Let's meet my favorite function in all of programming: `random()`
- Most programming languages have a version of this and it does what you might expect...
--

- It __gives you a random number__.
--

- In p5 it works like this:

```javascript
let randomNumber = random(10);
```

- This will put a random number between 0 and `10` (not including `10`) into our `randomNumber` variable
- Naturally you can use other numbers than `10`

???

- Note that the number we get back will be a __floating point number__ like `3.1128923` etc., not an integer like `3`
- This is the first time we've seen the idea of a function that __returns a value__
- When we __call__ `random()` it goes away, calculates a random number, and then __gives it back__
- We store the result inside our __variable__
- We'll talk more about this when we start defining our own functions

---

## Let's get more `random()`

- You can also specify a __range__ for your random number by giving a low and high value

```javascript
let numberBetweenFiveAndTen = random(5,10);
```

- This is useful if you need numbers in particular ranges, of course

```javascript
let red = random(0,255);
let green = random(0,255);
let blue = random(0,255);
background(red,green,blue);
```

- Which would do what?

???

- This gives us a random background color each time we run the program
- What if you put that line inside `draw()`?

---

## Ah, `random()`!

- Random numbers are a source of endless joy.
- What would this do in the `draw()` loop of our avatar code from earlier?

```javascript
faceX = random(0,width);
faceY = random(0,height);
```

---

## Follow that mouse!

- What if we wanted to make the face follow our mouse around?
--

- That's right, we'd use those pre-existing variables called `mouseX` and `mouseY`

```javascript
faceX = mouseX;
faceY = mouseY;
```

- If we put these lines in `draw()` it will update the position of the face to be the same as the mouse each frame

---

## (Advanced) Follow that mouse! Slower!

- What if we wanted to make a shape move toward the mouse cursor over time instead of instantly?
--

- We'd need to know __where__ the shape is
- We'd need to know __where__ the mouse is
- Each time through `draw()` we'd need to work out how to change the shape location based on the mouse location
- One way would be to add a fraction of the distance between the shape's position and the mouse's position...
- See the notes for two ways of doing this and don't fret if you don't get it right now

???

```javascript
// Variables to track the location of our circle
let x;
let y;

// setup()
//
// Sets up the canvas and initalises x and y
function setup() {
  createCanvas(640,640);
  // Start with x and y in the centre of the canvas
  x = width/2;
  y = height/2;
}

// draw()
//
// Updates the location of our circle, increasing it
// by a fraction of its distance from the mouse,
// so it chases the mouse
function draw() {
  // Calculate the x and y distance between the circle and the mouse
  let distX = mouseX - x;
  let distY = mouseY - y;
  // Add a fraction (a tenth) of that distance on to the circle's location
  x += distX/10;
  y += distY/10;
  // Draw the circle
  ellipse(x,y,10,10);
}
```

- Another way would be to use the amazing `lerp()` (linear interpolation) and `dist()` (distance) functions - look them up in the reference!
- Mildly confusing, but amazing:

```javascript
// Variables to track the location of our circle
let x;
let y;

// setup()
//
// Sets up the canvas and initalises x and y
function setup() {
  createCanvas(640,640);
  // Start with x and y in the centre of the canvas
  x = width/2;
  y = height/2;
}

// draw()
//
// Updates the location of our circle using linear
// interpolation based on the distance between the
// circle and the mouse.

function draw() {
  // Calculate the distance between the circle and the mouse
  let d = dist(x,y,mouseX,mouseY);
  // Use linear interpolation to update the location of the circle
  // based on the distance. When the distance is big, 1/d will be
  // very small, so the circle will move a small fraction of the remaining distance.
  // When the distance is small, 1/d will approach 1 and the circle will move
  // a large fraction of the remaining distance
  x = lerp(x,mouseX,1/d);
  y = lerp(y,mouseY,1/d);
  // Draw the ellipse
  ellipse(x,y,10,10);
}
```

---

## Variable save the day

- Man variables are cool
- They store data
- They have relevant names
- They can change over time to create dynamic behavior
- Not bad at all

---

# Fin.
