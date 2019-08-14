### Core / CART 253 / Fall 2018 / Pippin Barr

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

- I'd need to __change the numbers__ representing its location, but I _can't_, because...

--

__Once the program is running, "hardcoded" numbers cannot change__

???

- By "hardcoded" we just mean that you write the __actual number__ directly into your program
- Once you write it like that, it will never change while the program is running
- Not to mention how inconvenient it would be to go through changing every single number relative to the others to move the face, god forbid I want to change its size!

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
- Names have __meanings__. "Thomas" means "twin" (via Aramaic), "Jeanne" means "Yahweh is merciful" (via Hebrew)
--

- `mouseX` means "the pixel on the x-axis that the mouse is over right now"
--

- `avatarX` probably means "the location of the avatar on the x-axis right now"

???

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
- But it's also pretty __dangerous__ because it allows us to make mistakes more easily
- Importantly, we have to be careful not to accidentally put the __wrong type of thing__ into a variable, because JavaScript won't tell us!

---

## A value

- A variable has a value in it: it is the thing that variable is storing
- This value will be of a specific __type__, as above
- The variable will keep it safe until we need to __use it or change it__
- Ah, change!

---

## `var meaningOfLife = 42;`

- This is a __variable declaration__ in JavaScript
- When we __create__ a variable we call it __declaring a variable__
- So this line is saying "I want to create __variable__ called `meaningOfLife`, and put the number `42` in it to start with, thanks"
- Let's go through the syntax of this

---

## .hi[`var`] `meaningOfLife = 42;`

- First we write the special word `var`
- Just like `function` means we're going to make a function, `var` means we're __declaring a variable__
- This tells JavaScript we need it to create a new variable (and that we're about to tell it the information it needs to do this)
- We __only use `var` when we're declaring the variable__ - when we use the variable later, we don't need to write `var` in front of it

???

- JavaScript is under constant development and so these days there is __another__ way to declare variables called `let` - look it up if you're interested, but we probably won't get into it in this class

---

## `var ` .hi[`meaningOfLife`] ` = 42;`

- Next we have the __name__ of the variable
- Here we have called it `meaningOfLife`
- Just like with functions, the name should __explain__ what the variable is for, what it __means__
- Notice the way the variable name is written
  - __No spaces__
  - If there are multiple words, the __first word is lowercase__ and the __remaining words start with a capital__ to make it easier to read

???

There are more technical rules for writing variable names:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter
- Names can also begin with $ and _
- Names are case sensitive (y and Y are different variables)
- Reserved words (JavaScript keywords like `function` and `var`) cannot be used as names

(From: https://www.w3schools.com/js/js_variables.asp)

---

## `var meaningOfLife ` .hi[`=`] ` 42;`

- Next we have the __assignment operator__, an equals sign
- This is because we are putting a __value__ in our variable
- It means "I am about to tell you what to put inside this variable"
- Frustratingly, notice that `=` does __not__ mean "check for equality", it means "assign the following value to this variable"!

---

## `var meaningOfLife = ` .hi[`42`]`;`

- Next we have the __value__ of the variable, `42`
- Importantly, `42` is the `meaningOfLife`, and so the variable name makes sense (see: Douglas Adams)
- Note that because JavaScript __doesn't check types__ you could put __any__ type of thing in this variable:

```javascript
var meaningOfLife = 42;
var meaningOfLife = "Be excellent to each other.";
var meaningOfLife = 42.0000001;
var meaningOfLife = true;
```

- These are all fine as far as JavaScript is concerned
- Flexible, but it does mean we need to be careful

---

## `var meaningOfLife = 42`.hi[`;`]

- Just like any line of code that is an __instruction__, we end with a semicolon to say we're done
- If you're a polite kind of person, you could think of it as saying "thanks" perhaps...
- Or even "sorry"!

???

- Yes, yes, we know the terrible truth is that many line of code in JavaScript __don't actually need a semicolon__!
- In particular, a simple instruction like a function call or a variable declaration is fine without a semicolon
- But let's __always use them__ and avoid trouble
- Thus preparing ourselves to learn other programming language where semicolons are __not optional__

---

## Types

- JavaScript allows us to specify a range of different types
- These are the different kinds of __data__ that we can use in our program
- For right now there are just __two types of data__ we will think about: numbers and strings

```JavaScript
var thisIsANumber = 4;
var thisIsAlsoANumber = 3.14159;
var thisIsAString = "Hello, World!";
```

- A __number__ is made of digits and can have a decimal point
- A __string__ is a set of characters inside quote marks

???

- __There are more types of variable/data in JavaScript__
- But we won't worry about them just yet, we'll get there!
- With regard to strings, note that you can put them inside __either__ double __or__ single quotes and they will still work - I'll default to double quotes for now

---

## Declaring a variable without a value

- We can declare a variable we want to use in our program __without__ giving it a value right away
- Later on, when we work out the value (like the meaning of life hopefully), we can use the __assignment operator__ in the same way as in the declarations earlier to put the value in

```javascript
var meaningOfLife;
// Do some stuff here to calculate the meaning of life...
...
...
meaningOfLife = 42;
```

- Notice that when we put the value in we don't need `var` anymore, because JavaScript knows we have already created the `meaningOfLife` variable earlier

---

## Using variables...

- A very important thing about variable is that you can use them __as if they are the value inside them__
- So you can use a variable with number in it anywhere you might use a hardcoded number, a and variable with a string in it anywhere you would have put a string:

```javascript
var meaningOfLife = 42;
rect(meaningOfLife,meaningOfLife,50,50);
var anotherMeaningOfLife = "Be excellent to each other!";
console.log(anotherMeaningOfLife);
```

- `rect()` expects __numbers__ so we can use a variable with a __number__ in it
- `console.log()` expects a __string__ so we can use a variable with a __string__ in it

???

- Note how variable names are important?
- p5 doesn't care that you're positioning a rectangle with its top-left corner at coordinates (`meaningOfLife`,`meaningOfLife`)
- But anyone reading your code would find it rather confusing!

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
var age = 30;
var dayOfTheWeek = "Friday";
var pi = 3.14159;
var theLetterE = "E";
var theNumber1 = 1;
```

NO:

```
var foo = 30;
var WhatDayIsIt? = "Friday";
var 314159 = 3.14159;
var var = 1;
var the_letter_a = 'A';
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

- We met `mouseX` and `mouseY` earlier - they are _built-in variables_ that store the current coordinates of the mouse
- p5 has other helpful variables like this, including:

- `width` and `height`: the width and height of the window
- `frameCount`: the number of frames the code has run for

???

- There are many more of these in the p5 reference
- Look for things listed in the reference __without__ parentheses after them (things that aren't _functions_)

---

## Pop-quiz, hotshots!

```
var 127LevelGrey = 127;
var what??? = "What did you say???";
var theLetterC = "c"
variable myLuckyNumber = 4.7;
number theNumberPi = 3.14159;
var mouseX = 21;
var myName = "Pippin";
var thetruemeaningoflife = 1;
var exampleFloat = 22.2.2;
var foo = `1`;
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
var avatarX = 250;
var avatarY = 250;
var avatarSize = 300;
var avatarEyeSize = 50;
var avatarPupilSize = 20;
var avatarLeftEyeX = 200;
var avatarRightEyeX = 300;
var avatarEyeY = 200;
var avatarMouthY = 300;
var avatarMouthSize = 100;

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
