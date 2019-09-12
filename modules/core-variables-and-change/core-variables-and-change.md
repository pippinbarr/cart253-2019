### Core / CART 253 / Pippin Barr

# Variables and change

---

## In this module

- Math!
- Ch-ch-changes

---

## Math!

- You can do arithmetic on numbers in p5, and also on variables with numbers in them
- It uses __operators__ you probably already know from calculators and so on

```javascript
let a = 10 + 2; // addition
let b = 10 - 2; // subtraction
let c = 10 * 2; // multiplication
let d = 10 / 2; // division
```

- In all these cases the __result__ of the math is calculated and then stored in the variable
- There are some other operators too, which you can look up [here](https://www.w3schools.com/jsref/jsref_operators.asp) for instance

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

---

## Variables with numbers in them are just like numbers

- We can do all the same math stuff, but substituting variables for numbers
- It's like algebra in a way

```javascript
let a = 10;
let b = 2;
let c = a * b; // Equivalent to let c = 10 * 2
```

- This means we can store a value in one variable based on __other__ variables, which allows us to do more interesting calculation

---

## Relativity

```javascript
let faceX = 250;
let faceY = 250;
let faceSize = 300;
let eyeXOffset = 50;
let eyeYOffset = 50;
let mouthYOffset = 50;

function setup() {
  createCanvas(500,500);
}

function draw() {
  ellipse(faceX,faceY,faceSize,faceSize);
  ellipse(faceX - eyeXOffset,faceY - eyeYOffset,faceSize/4);
  ellipse(faceX + eyeXOffset,faceY - eyeYOffset,faceSize/4);
  ellipse(faceX,faceY + mouthYOffset,faceSize/3);
}
```

- We can use variables and math to define the parts of this face __relative__ to each other
- It makes the face much more __consistent__, more like a single object

???

- Notice how we define only one x offset for the eyes - they're symmetrical! This way we change only one number to make the eyes move closer to the centre or further away
- Notice how we set the sizes of the eyes and the mouth relative to the overall face size, which maintains proportions
- Notice how this ends up encoding __rules__ about how this face works, though, which might be restrictive of creativity?

---

## Variables can change

__What could do in the `draw()` function to change the face's position over time?__

--

`faceX = faceX + 1;`

- Whhooooooaaaaa....
- Clearly we can change a variable __relative to itself__
- This basically means "add `1` to `faceX`"
- And because it's changing __over time__ (in `draw()`), the face __moves__
- And the __whole face__ moves because we defined its part relative to each other


???

- Again, remember that when we __use__ a variable after having __declared__ it, we don't use `let` anymore
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
- A big part of how we make things happen in a program is by changing the values in variables over time!

???

- Consider my not very good game [You Say Jump I Say How High](http://www.pippinbarr.com/2012/01/24/you-say-jump-i-say-how-high/)
- It uses this idea of changing variables for physics to make gameplay
- Or consider another of my games, [Get X Avoid Y](http://www.pippinbarr.com/2014/06/24/get-x-afunction-y/)
- It basically uses variables to store different pictures so that the game looks different even with the same code

---

## Control!

- Essentially, we can use variables to control the values used in a program
- For now, the most obvious thing is that we can control the __number parameters__ that are being used in our various drawing instructions
- So one way to think of this is that if we replaced every parameter with a variable we could __change the variable over time__ and create effects
- We can control positions (x and y), sizes, colors, transparencies, line weights, and anything else we can lay our hands on!

---

## Take control!

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  fill(255,0,0);
  stroke(0);
  ellipse(250,250,100,100);
}
```

- What can we control if we replace all the numbers in `draw()` with variables and change them over time?

---

## Surprise!

- Let's meet my favorite function in all of programming: `random()`
- Most programming languages have a version of this and it does what you might expect...
- It __generates a random number__

```javascript
let randomNumber = random(0,10);
```

- This will put a random number between `0` and `10` (not including `10`) into our `randomNumber` variable
- Naturally you can use other numbers than `0` and `10`

???

- Note that the number we get back will be a __floating point number__ like `3.1128923` etc., not an integer like `3`
- This is the first time we've seen the idea of a function that __returns a value__
- When we __call__ `random()` it goes away, calculates a random number, and then __gives it back__
- We store the result inside our __variable__
- Note that we can call `random()` in two other ways
- With __no parameters__ it defaults to a number between 0 and 1
- `let r = random();` gives back a number between 0 and 1
- With __one parameters__ it defaults to a number between 0 and the number you specify
- `let r = random(10);` gives back a number between 0 and 10

---

## Ah, `random()`!

- My momma always said, `random()` is like a box of chocolates, you never know what you're gonna get!
- We can use randomness to create surprising experiences not just for a user but for ourselves
- We could set a random set of colors every time the program runs, or even every frame!
- We could set a random starting position for elements on the canvas
- We could set random sizes for our shapes
- And much more...

---

## Follow that mouse!

- What if we wanted to make our intrepid face follow our mouse around?
--

- That's right, we'd use those __pre-existing variables__ called `mouseX` and `mouseY`

```javascript
faceX = mouseX;
faceY = mouseY;
```

- If we put these lines in `draw()` it will update the position of the face to be the same as the mouse each frame

???

#### (Advanced) Follow that mouse! Slower!

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

- They store data
- They have relevant names
- They can __change over time to create dynamic behavior__
- Not bad at all, variables. Not bad at all.

---

# Fin.
