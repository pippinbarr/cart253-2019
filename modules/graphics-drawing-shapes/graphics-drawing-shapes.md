### Graphics / CART 253 / Pippin Barr

# Drawing shapes

---

## In this module

- The grid
- Points, lines, and shapes
- Greys and colours

---

## The grid

- Computer screens are divided up into _pixels_
- Everything we see on the screen involves setting the colours of the pixels
- By changing the colours of pixels over time, things appear to move!
- If you can zoom your screen, you can even see the individual pixels!

???

- What does 'pixel' stand for? _Picture Element_!
- On a Mac you can go to the Accessibility Settings and activate Zoom
- On Windows you can use the _Magnifier_ application

---

background-image: url(images/grid-plain.png)
background-style: contain

## The grid

---

## Where on the grid?

- In a graphics application you specify what pixel you want to change the colour of by just clicking on it with a pencil or paintbrush...
- But if you're programming you're working in text...
- ... so how would you refer to a specific pixel?
--

- That's right! It's our friend _coordinates_!

---

## Life on the grid

- Just like on a graph we have an _x-axis_ and a _y-axis_
--

- The x-axis starts at the _left_ of the screen (or canvas) and goes from left to right
--

- The y-axis starts at the...
--
_top_ of the screen (or canvas) and goes from top to bottom
--

- And we count pixels along the axes from _zero_

?

- The y-axis is a bit confusing because in math we're used to drawing graphs where the y axis goes _up_ rather than down.

---

background-image: url(images/grid-axes.png)
background-style: contain

---

## There on the grid!

- We specify the location of a pixel on the screen (or in our canvas) by giving its coordinates
- Like in maths etc. we specify coordinates as _(x,y)_
--

- So where would (5,2) be?
--
 _Exactly_. _6_ pixels to the right from the left edge and _3_ pixels down from the top edge
--

- And where would (525,100) be?
--
 _Uh-huh_. _526_ pixels to the right from the left edge and _101_ pixels down from the top edge

???

- At least on our simple 10x10 grid image from earlier, a pixel drawn at (525,100) wouldn't actually be displayed
- Does it still exist???

---

## Giving instructions

- It's time to start telling our computers what to do
- When it comes to programming, that means typing in line of code
- The heart of programming is knowing how to give instructions that a computer will understand
- Which can be a challenge because we have to get them _exactly right_
- But when we get them right, we can do magical things

---

## Where to give instructions

- We'll type code into the template project's `script.js` file
- Which by default looks like this

```
function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}
```

- These two functions called `setup()` and `draw()` are _specific to p5_
- Put simply, `setup()` is run _once_ when your program starts, and `draw()` is run _over and over_, once per frame
- We'll get back to that

---

## Writing instructions in `setup()`

- For now, we're going to write our code _inside_ the `setup()` function so it runs _once_
- By "inside" we mean _inside the curly brackets_

```
function setup() {
  // put setup code here
  // WE ARE GOING TO WRITE STUFF IN HERE!!!
}

function draw() {
  // put drawing code here
}
```

- We will come back to the various words and symbols used
- For now, just remember we're writing code inside the curly brackets of `setup()` and this means it will run _once_ at the beginning of our program

---

## Getting to the `point()`

- Follow along in the version of the template project you downloaded earlier, editing the `setup()` function inside `script.js`
- Let's use the `point()` function to tell p5 to draw a single pixel in a specific location
- Here's some code to draw a pixel at (5,2) in a tiny little canvas!

```
function setup() {
  // put setup code here
  point(5,2);
}
```

- If we run our local server with `Packages > atom-live-server > Start server` we can see what this does...

???

- It draws a tiny little dot on the screen, a single pixel in fact
- Note that although something like (525,100) is _out of the canvas_ you can still refer to it and draw things there...
- What does that mean? Good question.

---

## What is the `point()`?

- We saw just now that we can tell p5 to draw a point using the instruction `point(5,2);` in `setup()`
--

- In programming that is known as _calling a function_
--

- The function is called `point` and we _call_ it to ask it to draw a point (makes sense)
--

- Let's look at how the function call works in some detail...

---

## `point(x,y);`

- So this is the __function call__ for drawing a point in our canvas at location (x,y)

---

## .hi[`point`]`(x,y);`

- First we have the _name_ of the function, which is `point`
- In a perfect world the name of the function tells us what it does!
- The name of a function is _case sensitive_ and _spelling sensitive_
- Welcome to programming, where the tiniest inaccuracy will break everything!

---

## `point`.hi[`(`]`x,y`.hi[`)`]`;`

- Next we have _parentheses_ (or _brackets_ if you prefer)
- These tell p5 we are giving it the information it needs to carry out the function
- In the case of our `point` these parentheses will contain the _coordinates_ of the point
- Pay attention to making your parentheses _match_! Note that there is an opening and closing parenthesis here and that they go around the information the function needs.
- The information inside the parentheses (the coordinates in this case) are called __parameters__
--

- There are a _lot_ of parentheses in programming and if you miss one, things break. Sorry!

---

## `point(`.hi[`x`]`,y);`

- Inside the parentheses we give the function the first piece of information it needs to draw the point, the first _parameter_
- In this case it's the _x coordinate_ of our point
- We would need to replace this `x` with an actual number, like `10`
- I'm writing it as `x` here because it better shows us what the nature of this parameter is and it's common practice in documentation you'll see

---

## `point(x`.hi[`,`]`y);`

- Because we have _multiple parameters_ (an x _and_ a y) we need a _comma_ next
- The parameters of a function are always separated by commas like this

---

## `point(x,`.hi[`y`]`);`

- Now we give the function the final piece of information it needs to draw the point, the second _parameter_
- Which is the _y coordinate_
- Again, we would replace with this an actual number, like `55`

---

## `point(x,y)`.hi[`;`]

- Now we meet an aspect of coding that nobody really enjoys
- The semicolon or `;`
- In programming, we put a semicolon at the end of instructions we give the computer
- It basically means "I'm finished telling you what I want you to do for this line!"
- It's so, so, _so_ easy to forget semicolons
--

- But please don't
--

- But you will. And that's okay.

???

- Okay, real talk: JavaScript doesn't __actually__ always need you to put a semicolon at the end of instructions
- There are rules for when you have to and when it's optional
- But __many other programming languages require them__ so it's much better to build up the habit now
- Use semicolons

---

## `point(x,y);`

- That was a lot, but the beauty of it is that that's _always_ how we call a function in JavaScript
- (And in plenty of other programming languages, too)
- We give its __name__, specify the __parameters__ inside __parentheses__, and end with a __semicolon__
- So now we can read something like `point(10,15);` and know that it means...
--

- _Draw a point at position (10,15) on the canvas!_

---

## Size matters

- So far we've been drawing our points on the default size canvas for p5, which is 100x100 pixels
- That's kind of small
--

- Fortunately we can specify the size of canvas we want with a function called `createCanvas`
--

- We use it like this:

`createCanvas(w,h);`

- Where `w` is the width of the canvas we want, and `h` is the height of the canvas we want
- Try it!

???

- Try out a new canvas size...
- Bear in mind you should create the canvas _before_ drawing anything
- Like `createCanvas(640,480);`
- or `createCanvas(1,1000);`!
- Where we're going, we don't need aspect ratios...

---

## Shapes

- Drawing points on a tiny grid is not especially inspiring
- We'd have to draw all the pixels to make up a shape individually!
- Luckily there are other functions!
- Let's learn some other functions!
- They all work in really similar ways!

---

## So you want to draw a line...

- What do you think the function would be called?

--

`line`
--

- And what parameters does it need?
--

- It needs the starting coordinates and the ending coordinates!
- So how will it look with parameters?

--

`line(x1,y1,x2,y2);`

--

`line(0,0,100,100);`

???

- You could also imagine a `line` function that could take a starting point, an angle, and a length, but that's perhaps conceptually a bit harder to think about, so it's not super common

---

## So you would also like to draw a rectangle...

- What would the function be called?

--

`rect()`  

???

- Sorry if you thought it would be `rectangle()`
- It probably should be, but programmers often like brevity!

--

- And what would its parameters be?

--
- There are a few different and reasonable options here, but the one p5 uses by default is

`rect(x,y,w,h);`

- That is, the (x,y) coordinates of the _top left corner_ of the rectangle, and then its _width_ and _height_

---

## What about a circle?

- What would the function be called?

--

`ellipse()`

???

- Ha ha, surprise!
- It's kind of reasonable, since a circle is just a specific kind of ellipse

--

- And what would its parameters be?

--
- Again, there are different options, but the default in p5 is

`ellipse(x,y,w,h);`

- The (x,y) coordinates of the _centre_ of the ellipse, and then its _width_ and _height_

???

- So `rect` defaults to drawing from the top left corner and `ellipse` default to drawing from the centre. Not consistent, and a good reason to read the documentation when you're not sure.

---

## And so on!

`point(x,y);`  
`line(x1,y1,x2,y2);`  
`rect(x,y,w,h);`  
`ellipse(x,y,w,h);`  
`triangle(x1,y1,x2,y2,x3,y3); // New!`  
`quad(x1,y1,x2,y2,x3,y3,x4,y4); // New!`

???

- Try these out just to make sure we get this idea of typing in instructions (calling functions) and getting results!

---

## Order matters

- The order you have your drawing instructions is important
- p5 will draw the shapes the the order specified, like creating layers in Photoshop

```javascript
rect(0,0,100,100);
ellipse(0,0,100,100); // This ellipse is over the rectangle
rect(0,0,50,50); // This rectangle is over the other rectangle and the ellipse
ellipse(0,0,50,50); // etc.
```

- This means you need to think about the order of instructions, especially when shapes overlap, so you can choose what you want to happen

---

## Different ways to draw the same shapes

- As we saw a few times, there are conceptually different ways to specify something like a rectangle
- You might give the top-left corner and width and height
- But you might also give the center and width and height
- Or you might even give the top-left corner and the bottom-right corner
--

- And you might even have a preference!
- p5 gives us functions for us to _tell_ it which style we want right now...

---

## `rectMode()`

`rectMode(CORNER);`  
The _default_ we're used to (top-left corner and dimensions)

`rectMode(CENTER);`  
Instead of the top-left corner the `x` and `y` in `rect(x,y,w,h)` now specify the _center_ of the rectangle

`rectMode(CORNERS);`
Now you write it `rect(x1,y1,x2,y2)` where the first coordinates are the top-left corner and the second coordinates are the bottom-right corner

These `rectMode()` instructions apply to all rectangles drawn _after_ them

---

## `ellipseMode()`

We can do all the same things with the same results to set different ways of drawing an `ellipse()` as well:

`ellipseMode(CENTER);`  
The _default_ we're used to (draw from the center)

`ellipseMode(CORNER);`  
Specify the top-left 'corner' of the ellipse, then the width and height

`ellipseMode(CORNERS);`  
Specify the top-left and bottom-right 'corners' of the ellipse

These `ellipseMode()` instructions apply to all ellipses drawn _after_ them

---

## Pop-quiz, hotshots!

- Why does `rect(0,0,50,50)` look the same with both `rectMode(CORNERS)` and `rectMode(CORNER)`?

- How can we most easily draw a rectangle in the center of the canvas?

- How can we draw an ellipse centered on the bottom-right corner of the canvas?

???

- `rect(0,0,50,50)` looks the same in both modes because because with `CORNERS` activated it draws the top-left at (0,0) and the bottom-right at (50,50), yielding a rectangle with its top-left at (0,0) that is 50x50 - exactly what the `CORNER` mode specifies
- To draw a rectangle in the center we need to know where it is - either by using `createCanvas()` or remembering the default size is 100x100
- If the canvas is 500x500 then we could use:

```javascript
rectMode(CENTER);
rect(250,250,100,100);
```

- To center an ellipse at the bottom-right of the same 500x500 canvas

```javascript
ellipse(500,500);
```

- Note that we don't need to change `ellipseMode()` because the default is `CENTER`

---

## Make it grey

- All the points, lines, and shapes we've drawn have had a black outline and a white fill on a white background
- But we can specify what shade of grey p5 will use for these things with more functions!

`background(shade);` sets the background shade

`fill(shade);` sets the fill shade

`stroke(shade);` sets the line shade (includes the lines around the edges of shapes)

- The coloring instructions `fill` and `stroke` apply to all drawing instructions _after_ them
---

## Two-hundred and fifty-six shades of grey

- Shades of grey in p5 are just numbers
- Specifically you can use numbers between 0 and 255
- `0` means _black_ (you can think of the 0 as meaning a total absence of white)
- `255` means _white_ (all the white!)
- `127` means a _mid-grey_ (half-way between black and white)
- (Notice how our old friend 'counting from zero' is making an appearance again!)
- (Notice how the computer-y idea of 'everything can be represented as number!' is showing up as well)

---

## And so...

We can put our numbers meaning different greys into our functions for setting background, fill, and stroke!

`background(0);` means set the background to black

`fill(220);` means set the fill to a very light grey

`stroke(50);` means set the stroke to a kind of charcoal grey

Let's try!

???

- An important thing to notice and to remember is that like `rectMode()` and `ellipseMode()` these 'stay on' until you change them
- So if you set a `fill()` then _every_ shape will have that fill until you set something else
- Also importantly, you put the colouring instructions _before_ the drawing instructions they will apply to

---

```javascript
createCanvas(500,500);
background(0);
stroke(50);
fill(50);
ellipse(250,250,400,400);
stroke(100);
fill(100);
ellipse(250,250,300,300);
stroke(150);
fill(150);
ellipse(250,250,200,200);
stroke(200);
fill(200);
ellipse(250,250,100,100);
```

---

## Colourful nights

- We're not actually limited to making arthouse movie-style things in black and white
- If we use _three_ numbers to specify our `background()`, `stroke()` and `fill()` instead of one, we can set colours instead:

```javascript
background(255,0,0);
stroke(0,255,0);
fill(255,100,100);
```

- What do you think the three numbers refer to?
--

- Exactly, the _red_, _green_, and _blue_ amounts for our colour
- That is, we're using the _RGB colour model_

---

## And so...

`background(255,0,0);` sets the background to pure red
--


`background(0,0,255);` sets the background to...
--
 pure blue
--


`background(85,107,47);` sets the background to...
--
 a kind of olive-ish green?

---

## Finding colours

- You probably already have a way of finding out the RGB values of a colour
- Maybe you use an application like Photoshop, which may also give you an 'eyedropper' to pick colours from your screen
- You can also just Google 'RGB colour picker' and it will bring one up
- Plenty of ways to find the RGB values for colours

---

## Hexadecimal colours

- You might notice in many color selectors you see colour values displayed as a set of letters and numbers after a hash sign, like `#12FF08`.
- This is called the _hexadecimal_ representation of the colour and you can use it in your code too if you want, as in:

`background("#00FF00");` sets a pure green background

- Note how the hexadecimal code is __inside double quotes__, that's important

???

- In hexadecimal you count from 0 to f, which is weird. That is, you count 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, e, d, f.
- So `f` is the highest "number" and 0 is still the lowest.

---

## Losing colours

- You might want to make things transparent sometimes - e.g. give them _no colour at all_
- You can do this with the following functions:

`noFill();` means have transparent fill

`noStroke();` means have transparent stroke

- As with `stroke()` and `fill()`, these instructions apply to all drawing done _after_ them

---

## See-through colours

- On computers colours often have an _alpha_ value which refers to how transparent the colour should be
- In p5 we can set this by adding yet another number to our RGB colours, bringing the total to four
- `0` means completely transparent, `255` means completely opaque
- So `fill(255,0,0,127);` will give us...
--
 a half-transparent red fill
--

- And `stroke(0,0,0,0);` will give us
--
 an invisible black line! What a concept!

---

## Pop-quiz

- What will we see on our screen with this code?
- (Try not to find out by just typing it in, reason through it line by line!)

```javascript
createCanvas(500,500);
background(100,0,0);
fill(255);
rect(0,0,250,250);
noStroke();
fill(0,0,250,250);
ellipse(250,250,250,250);
background(0,100,0);
```

???

- It's a traaaap!
- That final `background()` will overwrite everything on the screen with a dark green!

---

## Food for thought

- We're now able to see "behind the scenes" of software
- We are writing lines of code that make actual stuff happen in a browser
- We see the Matrix!
- We know, for instance, that p5 doesn't really know about "rectangles", it just knows how to set a particular set of pixels to a particular color...
- We know that p5 represents colors as numbers...
- As Spiderman's uncle said, "_With great power comes an excruciating amount of time and effort!_"

---

# Fin.
