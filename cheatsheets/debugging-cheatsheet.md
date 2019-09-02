# Debugging Cheatsheet

## Some basic rules for debugging

1. __Is it a typo?__ - Did you type a variable, function, or class name slightly wrong? `rndom()` instead of `random()`? Make sure the names you use _match_ the documentation or your own definition of it elsewhere.
1. __Is it capitalization?__ - Did you type a variable name or a function name with the wrong capitalization? `Random()` instead of `random()`?
1. __Are your brackets matched?__ - Are all your sets of parentheses, square brackets, and curly brackets correctly matched? Are they matched in the right order? Are they matched in a way that makes sense?
1. __Did you save your files?__ - Is your code not doing what you expected because you haven't saved it and are looking at an old version in the browser?
1. __Is your code running?__ - Sometimes it can be hard to tell if some specific code is even running, consider putting a `console.log()` there to see if it shows up.
1. __Have you asked someone else?__ - It can be great to ask for help. Even explaining your problem to someone may lead you to solve it yourself!
1. __Are you tired?__ - It's okay to stop debugging if you've been going for a long time, sometimes you just need a break.

---

## The console

When we program we should _always have the JavaScript Console open_ (you can get to it through the `View > Developer > JavaScript Console` menus).

We can send ourselves messages in the JavaScript Console by using `console.log()`. Whenever it gets called, it prints the text you give it as a parameter out to the console.

```javascript
console.log("Hello, World!"); // Prints "Hello, World!" to the JavaScript Console
```

We can also print out the values inside variables with `console.log()`.

```javascript
let x = 10;
let y = "Hello";
let z = true;
console.log(x,y,z); // Prints "10 Hello true" to the JavaScript Console
```

If you want to get fancy, you can combine text and variables to get more meaningful messages.

```javascript
let x = 10;
console.log("The value of x is " + x); // Prints "The value of x is 10" to the JavaScript Console
```

If you want to get really fancy, you can do this with Template Strings.

```javascript
let x = 10;
console.log(`The value of x is ${x}`); // Prints "The value of x is 10" to the JavaScript Console
```
