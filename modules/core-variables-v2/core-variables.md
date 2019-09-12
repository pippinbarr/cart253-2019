### Core / CART 253 / Pippin Barr

# Variables

---

## In this module

- Numbers suck
- Variables rule
- Variable rules

---

## What even is this?

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  ellipse(250,250,300,300);
  ellipse(200,200,50,50);
  ellipse(300,200,50,50);
  ellipse(250,300,100,100);
}
```
--

- Which of these ellipses is the head?
- How do I change the size of the eyes?
- How do I move this face somewhere else?

--

__Hardcoded numbers are a huge pain to edit and are mostly meaningless to look at in code__

???

- We've run into this kind of thing before and solved part of it with comments
- Comments allow us to fix the issue of what is what
- But they don't help us change the thing we're drawing conveniently

---

## I want to move it move it...

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  ellipse(250,250,300,300);
  ellipse(200,200,50,50);
  ellipse(300,200,50,50);
  ellipse(250,300,100,100);
}
```

- How would I make this face move around on the screen while the program runs?
--

- I need to __change the numbers__ representing its position, but I __can't__, because __once the program is running, hardcoded numbers cannot change__

???

- By "hardcoded" we just mean when you write the __actual number__ directly into your program
- Once you write it like that, it will never change while the program is running
- Not to mention how inconvenient it would be to go through changing every single number relative to the others to move the face...

---

## Enter the variable

- A variable is a place to store some information/data
- Importantly, once we can store data it means we can __use it later__ and we can __change it over time__
- That is it

---

## Declaring a variable

```javascript
let faceX = 250;
```

- When we want to create a variable we need to "declare" it
- For this we:
  - use the special word `let`
  - followed by the __name__ of the variable (`faceX`)
  - followed by the __assignment operator__ (`=`)
  - followed by the __value__ to store in the variable (`250`)
  - followed by a __semicolon__ because this is an instruction (`;`)
- After this line, `faceX` has the number (value) `250` inside it!

???

`let`
- Just like `function` means we're going to make a function, `let` means we're __declaring a variable__
- It's like "__Let__ there be light!" except it's for making storage places for data instead of making the sun
- This tells JavaScript we need it to create a new variable (and that we're about to tell it the information it needs to do this)
- We __only use `let` when we're declaring the variable__ - when we __use__ the variable later, we don't need to write `let` in front of it
- In the Olde Days we used to declare variables in JavaScript with the word `var` instead of `let`, but those days are over.
- In particular, in this class we're using ES6, the newest (for now) version of the language

`faceX`
- The name should __explain__ what the variable is for, what it __means__
- Notice the way the variable name is written
  - __No spaces__
  - If there are multiple words, the __first word is lowercase__ and the __remaining words start with a capital__ to make it easier to read (camelCase)

`=`
- The __assignment operator__, an equals sign
- We use this to store a __value__ in our variable
- It means "I am about to tell you what to put inside this variable"
- Frustratingly, notice that `=` does __not__ mean "check for equality", it means "assign the following value to this variable"!
- It kind of means "__make__ this variable equal this value" (it's very confident).

`250`
- This is the value we want to store in the variable
- It's just a number, written like a number!

`;`
- Just like any line of code that is an __instruction__, we end with a semicolon to say we're done
- If you're a polite kind of person, you could think of it as saying "thanks" perhaps...
- Or even "sorry"!

---

## I want to use it use it...

- A variable can be used wherever you want its __value__ to be used
- You can imagine the variable being __replaced__ by its value

```javascript
let faceX = 250;
let faceY = 250;

function setup() {
  createCanvas(500,500);
}

function draw() {
  ellipse(faceX,faceY,300,300); // The same as: ellipse(250,250,300,300);
  ellipse(200,200,50,50);
  ellipse(300,200,50,50);
  ellipse(250,300,100,100);
}
```

---

## Variables make code readable!

```javascript
let faceX = 250;
let faceY = 250;
let faceSize = 300;
let leftEyeX = 200;
let rightEyeX = 300;
let eyeY = 200;
let eyeSize = 50;
let mouthX = 250;
let mouthY = 300;
let mouthSize = 100;


function setup() {
  createCanvas(500,500);
}

function draw() {
  ellipse(faceX,faceY,faceSize,faceSize);
  ellipse(leftEyeX,eyeY,eyeSize,eyeSize);
  ellipse(rightEyeX,eyeY,eyeSize,eyeSize);
  ellipse(mouthX,mouthY,mouthSize,mouthSize);
}
```

- Names make numbers make sense!

---

## Declaring, then assigning

- We don't have to assign a value immediately when we declare a variable

```javascript
let x;
let y;
let size;

function setup() {
  createCanvas(500,500);
  x = 250;
  y = 250;
  size = 100;
}

function draw() {
  ellipse(x,y,size,size);
}
```

- We can use the assignment operator __later__ to store values in our variables
- Note how we __only use `let` once__ when we first create the variable

???

- We might want to delay storing values in this way because we need to __wait__ until we know something important, like the dimensions of the canvas, say

---

## Declaring and not assigning

- We can __declare__ a variable and __never__ store a value in it

```javascript
let x;
let y;
let size;

function setup() {
  createCanvas(500,500);
}

function draw() {
  ellipse(x,y,size,size);
}
```

- But we have to be __careful__
- What do you think this program will do now?
- What do you think is inside `x`, `y`, and `size`?

???

- It doesn't draw anything!
- It also doesn't have any errors! Oh no!
- The program can't draw anything because it doesn't know __where__ to draw the ellipse and it doesn't know how __big__ the ellipse should be
- Because there aren't any __values__ in those variables
- This is bad, because it can be a hard problem to identify

---

## `undefined`

```javascript
let x;
console.log(x);
```

- When we don't put a value into a variable, it starts out with a special value called `undefined`
- `undefined` isn't a number, so it can't be used as coordinates or a size, or anything else really
- So `undefined` is almost __never__ a good thing to have in our variables (unless we're very specifically working with it, which we won't be for now)
- As such, let's __always make sure there is a value in your variables__

---

## Value types

- In programming, it matters what __type__ of value you store in a variable
- For now, we're only storing __numbers__ in our variables (but that will change)
- A __number__ is made of digits and can have a decimal point

```javascript
let x = 4; // 4 is a number, specifically an integer
let y = 3.14159 // 3.14159 is a number, specifically a floating point number
```

- Crucially, the __type__ of value determines what kinds of things you can do with it (you wouldn't multiple a letter by a number, for example?!)

???

- __There are more types of variable/data in JavaScript__
- But we won't worry about them just yet, we'll get there!
- In many programming languages you have to __explicitly say__ what type of thing a variable can hold, but in JavaScript we don't need to do that
- Not having to specify what __type__ a variable must take is very convenient and flexible
- But it's also potentially frustrating because it allows us to make mistakes more easily
- Importantly, we have to be careful not to accidentally put the __wrong type of thing__ into a variable, because JavaScript won't tell us!

---

## Built-in variables

- We met `mouseX` and `mouseY` earlier
- Now we know they are __variables__
- They are __"built in"__ to p5 so that they always store the current coordinates of the mouse
- p5 has other helpful variables like this, including:
  - `width` and `height`: the width and height of the canvas
  - `windowWidth` and `windowHeight`: the width and height of the window
  - `frameCount`: the number of frames the code has run for since starting
  - ... and more! See the [Reference](https://p5js.org/reference/) and look for entries __without__ parentheses after them, these are variables

---

## Variable naming rules

- The name should __explain__ what the variable is for, it should be __meaningful__
- __No spaces__
- If there are multiple words, the __first word is lowercase__ and the __remaining words start with a capital__ to make it easier to read (this is called camelCase)
- Names must be __unique__, so we can't name two variables the same thing or use a variable name that's already taken (like `mouseX`)
- Names can __only__ contain letters, digits, underscores, and dollar signs
- Names can __only__ begin with a letter, a $ or a _
- Names are __case sensitive__ (`y` and `Y` are different variables)
- __Reserved words__ (JavaScript words like `function` and `let`) cannot be used as names
--

- Unless you have a great reason, just avoid using $ and _ please
- Even numbers are generally not the most wonderful idea

???
- See: https://www.w3schools.com/js/js_variables.asp)

---

## Example variable names

#### Yes!

```javascript
let age = 30;
let pi = 3.14159;
let myLuckyNumber = 7;
```

#### No?

```
let foo = 30;
let what'sMyScore? = 10;
let 314159 = 3.14159;
let let = 1;
let the_number_1 = 2;
```

???

- Why not?
- `foo` is a meaningless name for a variable
- `what'sMyScore?` has an apostrophe and question-mark in it, which are illegal symbols
- `314159` starts with a number
- `let` is reserved by JavaScript
- `the_number_1` doesn't use camelCase
- That last "no" is technically a different __style__ of writing variables
- If you have a really impressive reason for wanting to us a different style, ask if it's okay
- Otherwise, just stick with camelCase...

---

## Variables!

- Variables allow us to understand code significantly better __just because of their names__
- Variables also make it easier and faster to __change values__ when we're editing, because we know which value to change


---

# Fin.

















---


---


---

## Pop-quiz, hotshots!

```
let 127LevelGrey = 127;
let what??? = "What did you say???";
let theLetterC = "c"
variable myLuckyNumber = 4.7;
number theNumberPi = 3.14159;
let mouseX = 21;
let myName = "Pippin";
let thetruemeaningoflife = 1;
let exampleFloat = 22.2.2;
let foo = `1`;
var age = 27;
```

???

- What is wrong with these?

---
