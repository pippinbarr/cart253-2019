### Debugging / CART 253 / Fall 2018 / Pippin Barr

# Debugging guide

---

## Programming doesn't work

- You may have noticed that when you write programs they don't work
- You may have noticed this happens all the time
- You may have noticed that the default state of a program is: not working
- And if it's working its default state is: not doing what you wanted
--

We constantly need to __debug__ our work

---

## Bugs! Gross!

- We can think of a "bug" as basically any problem with our program
- Some of them are __syntax errors__ where we've typed something that doesn't make sense to JavaScript
- And the worst ones of all are the errors in __behaviour__, where the program itself "works" (it runs), but it doesn't behave correctly (maybe it's a blank screen, maybe something isn't displaying, maybe something is in the wrong place, etc.)

---

## Debugging!

- Debugging is the process of going through our code and getting rid of all the bugs
- Programming basically __is__ debugging
- Debugging is actually pretty fun once you get used to it
- One big part of debugging is just knowing the kinds of things that can go wrong
- Another big part of debugging is have strategies for finding where those things are

---

## Syntax

- Syntax errors are usually the easiest to fix because the JavaScript Console notices them for you
- It's not too bad at warning you about most of the common syntax errors
- And a lot of the time its error messages can even be pretty helpful...

---

## ReferenceErrors from typos

```javascript
var meaningOfLife = 42;
console.log(meaningOfLif);
```

.hi[Uncaught ReferenceError: meaningOfLif is not defined]

```javascript
backgroun(0);
```

.hi[Uncaught ReferenceError: backgroun is not defined]

---

## Object-oriented ReferenceErrors

```javascript
var car = new Car();
```

.hi[Uncaught ReferenceError: Car is not defined]

- This may mean we never created a `Car` class
- Or we accidentally didn't call its constructor function `Car()`
- Or we didn't add a `<script>` tag to include the class file in our project

---

## Non-existent functions

```javascript
solveAllMyProblemsForever();
```

.hi[Uncaught ReferenceError: solveAllMyProblemsForever is not defined]

---

## Weird parameters

```javascript
rect("draw a rectangle over there");
```

.hi[No error! Damn.]

```javascript
background(true);
```

.hi[Error: [object Arguments]is not a valid color representation.]

- So you only occasionally get an actual error message when you put incorrect parameters into a function
- This is a result of JavaScript's __coercion__ of values - it tries to help out by converting your values into the "right kind of thing"

---

## Incorrect parameters

```javascript
background("a nice sea green");
```

.hi[No error! Damn.]

- You __can__ give a string to `background()` but it has to specify a correct colour name (like "red" or "cyan") to actually work

---

## Type mismatch

```javascript
var meaningOfLife = 3.14159;
meaningOfLife = "Be excellent to each other.";
meaningOfLife = false;
```

.hi[No error! Damn.]

- As we know, JavaScript lets us put __any__ kind of value into __any__ variable without checking if it's the right kind of thing

---

## Non-existent methods

```javascript
var meaningOfLife = 42;
meaningOfLife.tellMeWhatYouAreInADream();
```

.hi[Uncaught TypeError: meaningOfLife.tellMeWhatYouAreInADream is not a function]

- If try to call a non-existent method of any variable (including an object), you get a TypeError, which is helpful

---

## Missing opening curly brackets

```javascript
var curlyMissing = true;
if (curlyMissing)
  console.log("Oopsie-daisy!");
}
```

.hi[Uncaught SyntaxError: Unexpected token }]

- JavaScript notices that you have a __closing__ curly bracket that doesn't match a previously __opened__ curly bracket
- It tells you where the unexpected closing one is, but you then have to find where you forgot to open one

---

## Missing closing curly brackets


```
var curlyMissing = true;
if (curlyMissing) {
  console.log("Oopsie-daisy!");
```

.hi[Uncaught SyntaxError: Unexpected end of input]

- If you fail to close one of your curly brackets JavaScript won't notice until it reaches the __end of the file__, at which point it will realise that at some point you didn't close one of your curlies
- It doesn't know which one
- You have to go back through your program to look for it!


---

## Finding missing curlies

- Generally speaking your best friend in finding missing curly brackets is...
- ... __don't forget to put your curly brackets in the correct places and make sure they match__
--

- But, if you do leave one out, your best friend is...
- Auto Indenting your code
- If you Auto Indent all your code you will likely be able to see visually where the indenting gets weird and unexpected - your problem is likely around there.

---

## Missing opening parenthesis

```
if (100 < 200) && (200 < 300)) {
  console.log("Seems legit.");
}
```

.hi[Uncaught SyntaxError: Unexpected token &&]

```
background(random0,1));
```

.hi[Uncaught SyntaxError: Unexpected token )]

- When you forget to open a parenthesis, JavaScript will tell you the first moment it sees something unexpected because of that
- The thing it sees will tend to be very close to wherever you forgot to open the parentheses

---

## Missing closing parenthesis

```
if ((100 < 200) && (200 < 300) {
  console.log("Seems legit.");
}
```

.hi[Uncaught SyntaxError: Unexpected token {]

- Again JavaScript tells you the first thing it sees as weird
- And again it will often be near where the problem is

```
background(random(0,1);
```  

.hi[Uncaught SyntaxError: missing ) after argument list]

- This one is super helpful!!

---

## `=` instead of `===`

```javascript
var x = 0;
if (x = 0) {
 console.log("I feel good about this.");
}
```

.hi[No error!]

- This is because JavaScript will __evaluate__ `x = 0` in the conditional
- It evaluates to the result of that operation, which is `0`
- An `0` is __coerced__ (converted) to `false`
- And so we just never see the message
- Be careful!

---

## `===` instead of `=`

```javascript
var x === 0;
if (x === 0) {
 console.log("I feel good about this.");
}
```

.hi[Uncaught SyntaxError: Unexpected token ===]

- Because you can't have `===` when __declaring__ a variable

```javascript
var x;
x === 0;
if (x === 0) {
 console.log("I feel good about this.");
}
```

.hi[No error!]

- Because JavaScript evaluated `x === 0;`, it's false, and then it moves on.

---

## There are more.

- You will undoubtedly run into other errors as you write more complicated programs
- It's a real mixed bag in terms of whether you will get an error message or not
- Hugely it comes down to experiencing every kind of error and remembering the kinds of things that happen
- Once you have that list in your head, it's a lot easier to fix them
- Or, even better, begin to be more cautious about the kinds of coding that cause them in the first place (__match your curly brackets!!!__)

---

## Okay, my program works now...

__... but it doesn't, you know... work.__

- As we all know, just fixing all the errors in a program isn't enough
- Once we've done that we need to fix all the errors we wrote in __perfectly good code__

---

## The basic process

0. Run your program
0. Notice it doesn't do what you expected (__testing__)
0. Figure out what is causing the problem (__debugging__)
0. Fix the problem (__debugging__)
0. Go to 1 (begin weeping around iteration 10 or so)

---

## Testing

- Because you write your own code, __testing__ is a little bit easier than it would be for someone else
- You __know__ what your program is meant to do, so you __know__ when it's not doing that
- As your programs get more complicated, though, you do need to be more __thorough__ with testing
- And with __interactive__ media someone other than you will use it and they will do weird things you might not have thought of (like pressing every key at once, headbutting the microphone, ...)
- This is why it's good to watch other people test your work
- Or pretend to be someone else when you test your own work

---

## Debugging

- Once you run into a problem in your code it's a good idea to think about what __kind__ of problem it is
- Especially in relation to your own code
- This will allow you to __find__ the location of the problem more easily
- If it's a problem with the way a paddle is moving, you can probably start out looking in the `Paddle` class, maybe in the `handleInput()` or `update()` methods
- If the ball is passing straight through your paddles, maybe it's in the `handleCollision()` method of the `Ball` class
- Be a detective

---

## Debugging

There are a few basic things you can do to make your life of debugging easier:

* __Simplify__ your code
* Send yourself __messages__
* __Show it__ to someone else
* Take a __break__

---

## Simplify

- One beauty of the __modularity__ we get from functions and object-oriented programming is that we can more easily __simplify__ our work
- For example, if we have a problem with our paddles, we could simplify the main program to __only__ include __one__ paddle that we could then test further
- If removing everything else __solves__ the problem, we know the issue is somewhere in the code we removed
- If this __doesn't__ solve the problem, we've got __much less code to look at__ because it can only be in the code we've left in the program!
- Repeating this process will eventually lead us to the truth!

???

- A key to this approach is being able to think of your program as being made of up parts
- Those parts can (often) exist independently, which makes them easier to fix

---

```javascript
void draw() {
  background(backgroundColor);

  leftPaddle.update();
  //rightPaddle.update();
  //ball.update();

  //ball.handleCollision(leftPaddle);
  //ball.handleCollision(rightPaddle);

  //if (ball.isOffScreen()) {
  //  ball.reset();
  //}

  leftPaddle.display();
  //rightPaddle.display();
  //ball.display();
}
```

---

## Extreme simplifying

- An extreme version of the __simplify__ approach is to comment out __everything__
- And then gradually add things back in __one by one__
- Until the problem finally comes up
- At that point you know that the thing you just added is __part of the problem__
- e.g. You could start with nothing, then add the ball in, then one paddle, then both, etc.

---

## Messages

- Easily the most common way that I personally do debugging is by sending __messages__ inside the code
- The easiest way to do this is by using `console.log()` to write messages onto the console
- I use it for two main things:
  - Print a message to __show that the program reached a certain point__
  - Print out the __values of variables__ to check if they're reasonable, to watch them change, etc.

---

```javascript
Ball.prototype.reset = function () {
    console.log("Resetting the ball to the centre...")
    this.x = width/2;
    this.y = height/2;
  }
```

- If something weird is happening with the ball not resetting properly one of the first things I would do is put a `console.log()` in the `reset()` method of the Ball class to see if it's being called
- If that message __does not appear__ when it should, we know the function is not being called
- If that message __does appear__ then the resetting problem is somewhere else

---

```javascript
Ball.prototype.isOffScreen = function () {
  console.log("isOffScreen() called");
  console.log("x is " + this.x);
  if (this.x + this.size < 0 || this.x > width) {
    console.log("Ball is offscreen");
    return true;
  }
  else {
    console.log("Ball is onscreen");
    return false;
  }
}
```

- Maybe the ball is not resetting because it's not being detected as off screen?
- One way to monitor this is to put `console.log()` messages in the `isOffScreen()` method that constantly prints out the value of `x` and the result of the conditions for the ball being off the screen
- By running the game and monitoring these messages, we may be able to see a problem

---

## Show it

- You're surrounded by people who know how to program to varying degrees
- If you're totally stuck on a weird bug, show it to someone else
- The process of __explaining__ what is going wrong will often trigger a realisation of how to fix it!
- This also can work if you just verbally explain your code __to yourself__

---

## Take a break

- You have probably experienced the obsession of trying to fix a bug for multiple hours with no luck
- It's very tempting and even perversely "easy" to just keep going at it
- But you can end up totally exhausted and not able to think straight
- Taking a break, even a short one, is often a great way to suddenly come up with the answer

---

## Bonus: Ask for help

- It is a great instinct to want to work through all the problems in your code on your own, you'll learn a lot
- But it's important, too, to remember that we're here to __learn__ how to program, not to already be good at it
- So if you're struggling, just ask for help
- There is studio time, office hours, email, latent psychic powers: many ways to reach out

---

## Bonus: Call it a feature!

- One of the dark arts of programming is to sometimes decide that an element of your program that doesn't work the way you want is actually... __what you wanted__
- This is probably only a good idea if you __understand__ why it doesn't work
- But it can be an interesting design process to consider: __not all unexpected behaviour in your code is necessarily bad__
- So long as you (eventually) understand it

---

# Fin
