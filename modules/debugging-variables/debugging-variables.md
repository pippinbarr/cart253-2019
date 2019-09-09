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
- We can also use it to print out the values of variables

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

## Making console output more readable

- Printing out the values of variables in our program is __so helpful__
- (It's probably my primary form of debugging!)
- But if you just print the value, it can be hard to remember which variable you were printing
- So it can be good to add a message like this

```javascript
let x = 42;
console.log("x: " + meaningOfLife);
```
--

- Yes, we just __added__ a string of text and a number
- JavaScript will helpfully assume we mean we want to add the number to the end of the string of text. Which we do!

???

- This is an instance where JavaScript's __implicit conversion__ is great - it converts the number inside `x` to a string, then it adds that string onto the end of the other string
- Of course this can also go wrong in other circumstances, so we need to be vigilant when we're using variables with different types of value together

---

## "When in doubt, `console.log()` it out"

- Seriously, printing messages with `console.log()` is a very useful way to debug your code (especially while it's relatively simple)
- It lets you know __if things are happening__
- It lets you know __when things are happening__
- It lets you know __what value variables have__
- And that gets you a long, long way

---

## (Advanced) Watching variables

- Chrome (and other browsers) comes with a serious set of debugging tools that can be used to check variables as well
- In particular you can _watch_ variables to maintain a live updating view of their values
- We can take a quick look now if people are interested
- And if you're really curious you can continue your journey with the Google documentation here:

https://developers.google.com/web/tools/chrome-devtools/javascript/reference#watch

---

# Fin
