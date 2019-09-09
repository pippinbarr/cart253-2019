### Core / CART 253 / Pippin Barr

# Variables

---

## In this module

- Numbers suck
- Variables rule
- Variable rules

---

## Numbers are too permanent

```javascript
createCanvas(500,500);
ellipse(250,250,300,300);
ellipse(200,200,50,50);
ellipse(200,200,20,20);
ellipse(300,200,50,50);
ellipse(300,200,20,20);
ellipse(250,300,100,100);
```

- Which of these ellipses is the head?
- How do I change the size of the eyes?
- How do I put this avatar somewhere else?

--

__Hardcoded numbers are a huge pain to edit and are mostly meaningless to look at in code__

???

- We've run into this kind of thing before and solved part of it with comments
- Comments allow us to fix the issue of what is what
- But they don't help us change the thing we're drawing conveniently

---

## Numbers can't change

```javascript
createCanvas(500,500);
ellipse(250,250,300,300);
ellipse(200,200,50,50);
ellipse(200,200,20,20);
ellipse(300,200,50,50);
ellipse(300,200,20,20);
ellipse(250,300,100,100);
```

- How would I make my avatar move around on the screen?
--

- I'd need to __change the numbers__ representing its location, but I _can't_, because __once the program is running, "hardcoded" numbers cannot change__

???

- By "hardcoded" we just mean when you write the __actual number__ directly into your program
- Once you write it like that, it will never change while the program is running
- Not to mention how inconvenient it would be to go through changing every single number relative to the others to move the face...

---

## Enter the variable

- A variable is a place to store some information in your program that you want to remember, refer back to, or change

---

## A variable is like an... x

- It's like a box with something in it!
--

- It's like a folder with something in it!
--

- It's like a drawer with something in it!
--

- It's like a sticky with something written on it!
--

-  It's like a... place you use to store some information!

---

## The nature of variables

A variable has three key qualities:

--
- a __name__
--

- a  __type__
--

- and a  __value__

---

## A name

- Variables have names - otherwise what would you call them?
- Names have __meanings__
- `mouseX` means "the pixel on the x-axis that the mouse is over right now"
- Crucially, you should be able to work out what a variable is for by its name as often as possible!

---

## A type

- In programming, it matters what __type__ of thing you put inside a variable
- In many programming languages you have to __explicitly say__ what type of thing a variable can hold
- But in JavaScript you don't need to do that
- Nonetheless, there are still specific __types__ in JavaScript
- Like a number or a string of letters for example
- The type determines what kinds of things you can do with it
- You don't multiply a letter by a number, for instance

???

- Not having to specify what __type__ a variable must take is very convenient and flexible
- But it's also potentially frustrating because it allows us to make mistakes more easily
- Importantly, we have to be careful not to accidentally put the __wrong type of thing__ into a variable, because JavaScript won't tell us!

---

## A value

- A variable has a value in it: the thing that variable is storing
- This value will be of a specific __type__, as above
- The variable will keep it safe (and warm?) until we need to __use it or change it__
- Ah, change!

---

## `let meaningOfLife = 42;`

- This is a __variable declaration__ in JavaScript
- When we __create__ a variable we call it __declaring a variable__
- So this line is saying "I want to create a __variable__ called `meaningOfLife`, and put the number `42` in it to start with"
- Let's go through the syntax of this

---

## .hi[`let`] `meaningOfLife = 42;`

- First we write the special word `let`
- Just like `function` means we're going to make a function, `let` means we're __declaring a variable__
- It's like "__Let__ there be light!" except it's for making storage places for data instead of making the sun
- This tells JavaScript we need it to create a new variable (and that we're about to tell it the information it needs to do this)
- We __only use `let` when we're declaring the variable__ - when we __use__ the variable later, we don't need to write `let` in front of it

???

- In the Olde Days we used to declare variables in JavaScript with the word `var` instead of `let`, but those days are over.
- In particular, in this class we're using ES6, the newest (for now) version of the language

---

## `let ` .hi[`meaningOfLife`] ` = 42;`

- Next we have the __name__ of the variable
- Here we have called it `meaningOfLife`
- Just like with functions, the name should __explain__ what the variable is for, what it __means__
- Notice the way the variable name is written
  - __No spaces__
  - If there are multiple words, the __first word is lowercase__ and the __remaining words start with a capital__ to make it easier to read (Camel Case)

???

There are more technical rules for writing variable names:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter
- Names can also begin with $ and _
- Names are case sensitive (y and Y are different variables)
- Reserved words (JavaScript keywords like `function` and `var`) cannot be used as names

(From: https://www.w3schools.com/js/js_variables.asp)

---

## `let meaningOfLife ` .hi[`=`] ` 42;`

- Next we have the __assignment operator__, an equals sign
- This is because we are putting a __value__ in our variable
- It means "I am about to tell you what to put inside this variable"
- Frustratingly, notice that `=` does __not__ mean "check for equality", it means "assign the following value to this variable"!
- It kind of means "__make__ this variable equal this value" (it's very confident).

---

## `let meaningOfLife = ` .hi[`42`]`;`

- Next we have the __value__ of the variable, `42`
- Importantly, `42` is the meaning of life (in The Hitchhiker's Guide to the Galaxy), and so the variable name makes sense
- Note that because JavaScript __doesn't check types__ you could put __any__ type of thing in this variable:

```javascript
let meaningOfLife = 42;
let meaningOfLife = "Be excellent to each other.";
let meaningOfLife = 42.0000001;
let meaningOfLife = true;
```

- These are all fine as far as JavaScript is concerned
- Flexible, but it does mean we need to be careful

---

## `let meaningOfLife = 42`.hi[`;`]

- Just like any line of code that is an __instruction__, we end with a semicolon to say we're done
- If you're a polite kind of person, you could think of it as saying "thanks" perhaps...
- Or even "sorry"!

???

- Yes, yes, again, we know the terrible truth is that many line of code in JavaScript __don't actually need a semicolon__!
- In particular, a simple instruction like a function call or a variable declaration is fine without a semicolon
- But let's __always use them__ and avoid trouble
- Thus preparing ourselves to learn other programming language where semicolons are __not optional__

---

## Types

- JavaScript allows us to specify a range of different types
- These are the different kinds of __data__ that we can use in our program
- For right now there are just __two types of data__ we will think about: __numbers__ and __strings__

```JavaScript
let thisIsANumber = 4;
let thisIsAlsoANumber = 3.14159;
let thisIsAString = "Hello, World!";
```

- A __number__ is made of digits and can have a decimal point
- A __string__ is a set of characters inside quote marks

???

- __There are more types of variable/data in JavaScript__
- But we won't worry about them just yet, we'll get there!
- With regard to strings, note that you can put them inside __either__ double __or__ single quotes __or__ back-ticks and they will still work - I'll default to double quotes for now

---

## Declaring a variable without a value

- We can declare a variable we want to use in our program __without__ giving it a value right away
- Later on, when we work out the value (like the meaning of life hopefully), we can use the __assignment operator__ in the same way as in the declarations earlier to put the value in

```javascript
let meaningOfLife;
// Do some stuff here to calculate the meaning of life...
...
...
meaningOfLife = 42;
```

- Notice that when we put the value in we don't need `let` anymore, because JavaScript knows we have already created the `meaningOfLife` variable earlier - we __only create it once__

---

## Using variables...

- A very important thing about variable is that you can use them __as if they are the value inside them__
- So you can use a variable with number in it anywhere you might use a hardcoded number, and a variable with a string in it anywhere you would have put a string:

```javascript
let x = 0;
let y = 100;
let size = 50;
rect(x,y,size,size);

let meaningOfLife = "Be excellent to each other!";
console.log(meaningOfLife);
```

- `rect()` expects __numbers__ so we can use variables with __numbers__ in them
- `console.log()` expects a __string__ so we can use a variable with a __string__ in it

---

## Variable names, again

- Remember that there are __rules__ for naming variables
  - They __must__ be unique and should not already be in use by p5 (e.g. not `mouseX`)
  - In this class they __must__ be meaningful so that they don't confuse you and others
  - In this class they __must__ use "camelCase" where you start with a lowercase letter and then use capital letters to indicate word breaks

???

- Note that you __can__ call a variable `mouseX` and it will just break the p5 version

---

## Example variable names

YES:

```javascript
let age = 30;
let dayOfTheWeek = "Friday";
let pi = 3.14159;
let myFavouriteLetter = "E";
let myLuckyNumber = 7;
```

NO:

```
let foo = 30;
let WhatDayIsIt? = "Friday";
let 314159 = 3.14159;
let let = 1;
let the_letter_a = 'A';
```

???

- Why not?
- `foo` is a meaningless name for a variable
- `WhatDayIsIt?` has a question-mark at the end
- `314159` starts with a number
- `var` is reserved by JavaScript
- `the_letter_a` doesn't use camelCase
- That last "NO" is technically a different __style__ of writing variables
- If you have a really impressive reason for wanting to us a different style, ask if it's okay
- Otherwise, just stick with camelCase...

---

## Built-in variables

- We met `mouseX` and `mouseY` earlier - they are variables __built in to p5__ that store the current coordinates of the mouse
- p5 has other helpful variables like this, including:

- `width` and `height`: the width and height of the canvas
- `windowWidth` and `windowHeight`: the width and height of the window
- `frameCount`: the number of frames the code has run for
- ... and more! See the [Reference](https://p5js.org/reference/) and look for entries __without__ parentheses after them, these are variables

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

## Variables save the day

Remember this guy?

```javascript
createCanvas(500,500);
ellipse(250,250,300,300);
ellipse(200,200,50,50);
ellipse(200,200,20,20);
ellipse(300,200,50,50);
ellipse(300,200,20,20);
ellipse(250,300,100,100);
```

Now we can rewrite him with variables to get our benefits of readability and slightly easier changing

---

## Shocked face with variables!

```javascript
let avatarX = 250;
let avatarY = 250;
let avatarSize = 300;
let avatarEyeSize = 50;
let avatarPupilSize = 20;
let avatarLeftEyeX = 200;
let avatarRightEyeX = 300;
let avatarEyeY = 200;
let avatarMouthY = 300;
let avatarMouthSize = 100;

function setup() {
  createCanvas(500,500);
}

function draw() {
  ellipse(avatarX,avatarY,avatarSize,avatarSize);
  ellipse(avatarLeftEyeX,avatarEyeY,avatarEyeSize,avatarEyeSize);
  ellipse(avatarLeftEyeX,avatarEyeY,avatarPupilSize,avatarPupilSize);
  ellipse(avatarRightEyeX,avatarEyeY,avatarEyeSize,avatarEyeSize);
  ellipse(avatarRightEyeX,avatarEyeY,avatarPupilSize,avatarPupilSize);
  ellipse(avatarX,avatarMouthY,avatarMouthSize,avatarMouthSize);
}
```

???

- You may have notice that all the variables are declared at the __top of the program__
- If you noticed that, good work - this is the traditional place to declare variables that are relevant to the __whole program__
- We'll talk more about this when we get to the idea of __scope__

---

## Variables save the day

Notice how we can

- Understand the code significantly better __just because of the names__
- More easily adjust the way the avatar appears by changing the variables at the top


---

# Fin.
