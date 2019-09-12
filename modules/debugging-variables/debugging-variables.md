### Debugging / CART 253 / Pippin Barr

# Variables

---

## Variables are the lifeblood of code

- That might be an exaggeration
- But it's certainly true that __knowing what is in your variables while your program runs is vitally important__
- A big source of bugs in code comes when variables end up with the wrong values in them and the program acts weird (or simply doesn't work)
- But variables are usually __invisible__ when your code runs
- So it's often helpful to make them visible

---

## `console.log()` and variables

- Last week we saw `console.log()` as a way to print to the JavaScript console
- We can also use it to print out the values of variables by just using the variable as a parameter for `console.log()`

```javascript
let x = 42;
console.log(x);
```
--

- Pop quiz: what would happen if we _didn't_ give a value to `x` and then tried to `console.log()` it?

???

- Let's try out the Pop quiz...

```javascript
function setup() {
  let x;
  console.log(x);
}
```

- So `x` is `undefined`
- Aside from being a great name for what happened, this is another __type__ of thing that can be inside a variable
- It means that the variable is... not defined yet!

---

## `console.log()` and multiple variables

- We can actually provide multiple variables to `console.log()` and it will print them all out separated by spaces in the console

```javascript
let x = 42;
let y = 3.1;
let z = 0;
console.log(x,y,z);
```


---

## Making console output more readable

- Printing out the values of variables in our program is __so helpful__
- (It's perhaps embarrassingly my primary form of debugging!)
- But if you just print the value, it can be hard to remember which variable you were printing
- Especially if you're printing out multiple variables every frame
- So it can be good to add a message like this

```javascript
let x = 42;
console.log("x: " + meaningOfLife); // Prints "x: 42" to the console
```

- That is, we write the text we want before the variable in __quotation marks__, followed by the plus sign, followed by the variable name
- We'll talk more about the idea of quotation marks later on

---

## "When in doubt, `console.log()` it out"

- `console.log()` is our friend because it lets us see "invisible" things in our code (like numbers in variables)
- So printing messages with `console.log()` is a very useful way to debug your code (especially while it's relatively simple)
  - It lets you know __if things are happening__ (did the message appear or not?)
  - It lets you know __when things are happening__ (when did the message appear?)
  - It lets you know __what value variables have__ (because you can see them)
- And that gets you a long, long way

---

## (Advanced) Watching variables

- Chrome (and other browsers) comes with a serious set of debugging tools that can be used to check variables as well
- In particular you can _watch_ variables to maintain a live updating view of their values
- This won't be necessary for this course
- If you're really curious you can continue your journey with the Google documentation here:

https://developers.google.com/web/tools/chrome-devtools/javascript/reference#watch

---

# Fin
