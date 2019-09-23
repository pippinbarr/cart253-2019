# Project 1 - Build a Better Chaser

__Grade__: 10% of final grade (see grading guidelines at bottom)  
__Deadline__: 11:59PM on the day of class on week of 7 October 2019.

## Brief

Modify the Chaser game to make it a better and more interesting and meaningful game.

## Learning objectives

- Creating a meaningful visual and audio aesthetic
- Changing gameplay to increase challenge and/or meaning
- Understanding how code and experience are connected

![](images/project-1.png)

## Challenges

As always, begin by downloading the starter code ([game-chaser.zip](../games/game-chaser.zip)). Add it to your repository and commit it as "P1: Started project 1". Unlike in an exercise you should practice committing each time you do a unit of work that makes sense to you as a step to getting your whole project done. (e.g. there should be __more than just four commits__!)

1. Modify the way the prey moves to use Perlin noise and the `noise()` function instead of the `random()` function it uses now. (You'll need to get rid of the conditional that chooses when the prey changes direction, it should only use `noise()`).
2. Add the ability to "sprint" for the player when they hold down the shift key (using `keyDown()` in the `handleInput()` function for this is probably a good idea). Make them lose health __faster__ when they are sprinting. Don't forget to reset to the player's normal speed when they stop sprinting.
3. Add variables and conditionals to make the game more interesting to play. You could vary the player and prey's size, speed, visibility, and/or anything else you can think of during play (maybe the prey get harder to see as the player gets more successful, maybe the player gets bigger and slower the more it eats, etc.) - try to have a __reason__ why each thing happens (they get harder to see because they learn camouflage? They get bigger and slower because they've eaten too much?).
4. Tune the values of the game's variables to make the gameplay more interesting to play (is the prey too slow? Should it move more erratically? Should the player be faster? Slower? Etc.). Spend time playing with the values and thinking about what makes the game more interesting to you, make sure you justify your changes in comments and in commit messages.
5. Change the visuals of the game and add sounds so that the game is no longer abstract but conveys an idea through both its gameplay and through its aesthetics (maybe it could be about politics, or relationships, or cooking, or playing chess, or anything else!). The new visuals and sounds should __match__ the gameplay you created in the other steps.

- Make sure you use functions to better organize your code! Any block of code that is for a specific purpose could be moved to an appropriately-named function.
- Don't limit yourself to the above five challenges, if you've got the time, make the game even better! Weirder! Worse!
- Remember to make sure you code looks nice!

## Starter Code (Chaser)

[game-chaser.zip](../games/game-chaser.zip)

## Submission

You will submit this project as a __comment__ on an __Issue__ on the course repository here:

https://github.com/pippinbarr/cart253-2019/issues

(Click on the Issue with the name of the project and your section letter and follow the instructions.)


## Grading

Grading for projects will consider the following categories:

- __Implementation__ (40%)- the code runs, meets the challenges set, has no errors, is interesting/creative, etc.
- __Structure__ (30%) - the code is well organized, does things in a sensible order, makes good use of variables and functions, has comments clearly indicating new code, etc.
- __Style__ (30%) - Follow the style rules! e.g. the code is well-commented, well-formatted and indented, uses good names for variables, functions, classes, etc., and has a good number of commits with well-written commit messages (commits must include the prefix "P2:")

Each category for the project will be graded as follows:

- __Excellent__ (A-range) - Meets requirements perfectly
- __Good__ (B-range) - Meets requirements with some minor issues
- __Adequate__ (C-range) - Meets requirements but with clear issues
- __Poor__ (D-range) - Barely meets requirements
- __Non-submission / Unacceptable__ (F)
