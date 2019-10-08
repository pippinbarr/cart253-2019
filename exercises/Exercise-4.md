# Exercise 4 - Pong Plus

__Grade__: 1.25% of final grade (see grading guidelines at bottom)  
__Deadline__: 11:59PM on the day of class on week of 14 October 2018.

## Brief

Modify the Pong game to improve it

## Learning objectives

- Adding a function
- Understanding JavaScript Objects
- Using `map()` and `constrain()`

![](images/exercise-4.png)


## Challenges

As always, begin by downloading the starter code ([game-pong.zip](../games/game-pong.zip)). Add it to your repository and commit it as "__Ex4: Started exercise 4__". Then complete and commit each challenge below separately with a descriptive commit messages (__including the exercise prefix "Ex4:"__). Remember to comment your work.

1. Improve the game by tracking the score. (You'll need to add an `if` statement in `ballOutOfBounds()` that checks which side of the screen the ball went off and update the appropriate paddle's score.)
1. Improve the game by displaying the score on the screen, but __without using text__ (e.g. change the color of the paddle based on its score, or its size, or its maxSpeed, or change the background of each side of the playing field, or play sounds, or something else.). Write a new function to handle displaying the score and call it in `draw()`.
1. Improve the game by making the ball launch toward the paddle that won the most recent point. Give the ball a random y velocity (e.g. if it went off the left side of the screen it should launch toward the righthand side with a random y velocity). Keep your random y velocity within a range that makes the game still interesting to play (e.g. not too high and not too low)). This should be done in the `resetBall()` function.
1. Improve the game by making it visually and sonically interesting in some way. You could use images and sounds to make the game be "about" something else. You could use more interesting shapes. You could have elements leave a trail. You could fill shapes with "static". You could play different notes within a scale when the ball bounces. You could do whatever you want so long as it looks and sounds interesting!

__Optional__ challenges:
- Add a win condition that ends the game.
- Allow the paddles to move on the x axis.
- Make the ball move on y with a sine wave or perlin noise.
- Use the relative position the ball hits a paddle to influence its resulting y velocity (e.g. hitting the ball off the edge might give it a sharper angle).
- Allow paddles to also shoot a "bullet" at each other which destroys whatever it touches.


## Starter Code

[game-pong.zip](../games/game-pong.zip)


## Submission

You will submit this exercise as a __comment__ on an __Issue__ on the course repository here:

https://github.com/pippinbarr/cart253-2019/issues

(Click on the Issue with the name of the exercise and your section letter and follow the instructions.)


## Grading

Grading for exercises is pass/fail and will consider the following categories:

- __Runs__ and __implements the challenges required__
- Has __suitable commenting for all added/changed code and functions__
- Includes a minimum of one initial commit of the starting code, and at least __one commit message per challenge addressed__, all commits must have a __descriptive message__ prefixed with "Ex3:"
- Uses __good naming__ for added variables and functions
- Is __well structured__, with new code added in sensible places in sensible orders
