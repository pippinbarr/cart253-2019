# Syntax Cheatsheet

## Function calls

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
