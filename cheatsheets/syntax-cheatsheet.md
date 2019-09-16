# Syntax Cheatsheet

- [p5 Programs](#p5-programs)
- [Variables](#variables)
- [Conditionals](#conditionals) (`if`-statements)
- [Functions](#functions)

## p5 Programs

The most basic p5 program has two key functions that are __automatically called__ when your program runs. They are `setup()` which will execute __once__ at the start of your program, and `draw()` which will execute __every frame__ that your program runs. They are written like this:

```javascript
function setup() {
  // Code in here executes once
}

function draw() {
  // Code in here executes every frame
}
```

## Variables

### Types, declaring and assigning

Variables let us __store data__ over time. They are basically storage boxes with names. There are a number of __types__ of data that can go into a variable. For now that is:

- Numbers
- Strings

We __declare__ a variable __once__ to bring it into existence with the special word `let`.

```javascript
let myAge; // Now a variable called myAge exists
let myName; // Now a variable called myName exists
```

To store information in a variable we __assign__ a __value__ to the variable with the __assignment operator__ which is a single equals sign.

```javascript
myAge = 12; // Number are written as numbers!
myName = "Kasper"; // Strings are written in quotation marks
```

We can also assign a value to a variable at the same time as declaring it.

```javascript
let myAge = 12; // Now myAge contains the value 12
let myName = "Kasper"; // Now myName contains the value "Kasper"
```

### Arithmetic

We can perform arithmetic on numbers using the appropriate symbols.

```javascript
let x = 10;
let y = 5;
let a = x + y; // Now a is 15
let b = x - y; // Now b is 5
let c = x * y; // Now c is 50
let d = x / y; // Now d is 2
```

We can use parentheses to prioritize operations (things inside parentheses are evaluated first).

```javascript
let x = 10 + 10 / 2; // x is 15 because division happens before addition
let y = (10 + 10) / 2; // x is 10 because of the parentheses
```

We can abbreviate specific operations that are meant to apply to the value in a variable.

```javascript
let x = 10;
x += 5; // Now x is 15
x -= 5; // Now x is 10
x *= 10; // Now x is 100
x /= 2; // Now x is 50
x++; // Now x is 51
x--; // Now x is 50
```

### "Using" variables

A variable can be used wherever we want to use the __value__ inside the variable. This could be in arithmetic...

```javascript
let x = 10;
let y = 5;
let z = x + y; // Now z is 15
```

In function parameters...

```javascript
let x = 10;
let y = 5;
let size = 100;
rect(x,y,size,size); // Draws a square at (10,5) with sides of length 100

let message = "Hello!";
console.log(message); // Prints "Hello!" to the JavaScript Console
```

## Conditionals

### `if`, `else` and `else if`

We write a basic condition using the magic word `if`, followed by a __condition__ (something that can be `true` or `false` in parentheses, followed by what should be executed if the condition is __true__ in curly brackets:

```javascript
let x = 0;
if (x < 10) {
  console.log("x is less than 10"); // We will see this because the condition is true
}
```

We can add instructions that will execute if the condition is __false__ by adding the magic word `else` followed by curly brackets around the instructions:

```javascript
let x = 20;
if (x < 10) {
  console.log("x is less than 10"); // We won't see this because the condition is false
}
else {
  console.log("x is not less than 10"); // We will see this because the condition is false
}
```

We can chain together multiple conditions using the combination `else if`:

```javascript
let x = 20;
if (x < 10) {
  console.log("x is less than 10"); // We won't see this because the condition is false
}
else if (x < 20) {
  console.log("x is between 10 and 20"); // We will see this because the condition is true
}
else {
  console.log("x is not less than 10"); // We will see this because the condition is false
}
```

### Conditions

A __condition__ (or "conditional expression") is any expression that can be __evaluated__ as `true` or `false`.

```javascript
10 < 20 // true
20 < 10 // false
```

We most often use standard mathematical comparison operators to create conditions. All the following are `true`:

```javascript
10 === 10 // equal to
10 !== 20 // not equal to
10 < 20 // less than
10 > 1 // greater than
10 <= 20 // less than or equal to
10 >= 1 // greater than or equal to
```

### Logic

We can make more sophisticated conditionals by using logic operators to __combine__ basic conditional expressions. All the following are true:

```javascript
// && means AND and evaluates to true if both sides are true
// otherwise it's false
10 < 20 && 20 >= 10 // true

// || means OR and evaluates to true if one or both sides are true
// otherwise it's false
10 < 20 || 20 < 10 // true

// ! means NOT and evaluates to true if the expression AFTER it is false
// otherwise it's true
!(10 < 5) // true
```

## Functions

### Function calls

A function call is an _instruction_ that tells a particular function to _execute_ whatever code it contains.

```javascript
functionName();
```

The simplest kind of function call is just the __function name__ (e.g. `functionName`) and __empty parentheses__ (e.g. it has no parameters) followed by a __semicolon__.

```javascript
functionName(a,b,c);
```

The other kind of function call is the same thing, but with __parameters__ provided inside the parentheses that give _information_ to the function about what it needs to do.

```javascript
rect(0,0,100,100);
```

So this is a call to the `rect` function from p5.js (which draws rectangles), giving it four _parameters_ that specify the x and y coordinates to draw the rectangle at, and the width and height of the rectangle.

---

Some functions also _return_ a value when they're finished executing and we can _store_ that information in a variable.

```javascript
let information = functionName();
```

In this case we're storing whatever `functionName` returns in our variable called `information`.

```javascript
let information = functionName(a,b,c);
```

As above, the function might need parameters (like `a`, `b` and `c` here) to execute and return a value.

```javascript
let randomNumber = random(0,100);
```

Here we see the `random` function from p5.js which will return a random number between the two parameters (`0` and `100`), which will then be stored in our variable `randomNumber`.

```javascript
rect(0,0,random(50,100),random(50,100));
```

We can also use the return value of a function _directly_ as if the function actually represented that number. So here we can use the return value of the `random` function as a parameter for the `rect` function's height and width. This will result in a rectangle with a height and width selected randomly between `50` and `100` when it gets drawn.
