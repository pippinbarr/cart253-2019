# Style Cheatsheet

## Commenting syntax

We can write text in our program that will _not_ be part of the program, this is called a comment. The simplest comment style uses two forward slashes.

```javascript
// Draw a rectangle
rect(0,0,100,100);
```

Some people prefer to write their comments next to the code it applies to.

```javascript
rect(0,0,100,100); // Draw a rectangle
```

There is another style of comment called a "multiline comment" which allows you to write comments over more than one line. They start with a `/*` and end with a `*/`.

```javascript
/*
We are about to draw a rectangle with the following parameters:
- Top left corner at 0,0
- Height and width of 100 pixels
*/
rect(0,0,100,100);
```

It's quite popular to use this style to create big blocks of text at the beginning of a file for instance. People often use more asterisks for decorative purposes.

```javascript
/**************************
The Perfect Program
by Pippin Barr

This program is perfect,
because it does nothing,
and therefore cannot break.
**************************/
```

---

## Commenting rules

You should include comments

1. __At the top of every file__ - Write a comment at the top of every file that gives its title, your name, and a summary of what the code in the file is for.
1. __Before function declarations__ - Write a comment just before you declare a function that explains how what the function does and what parameters it takes.
1. __Before or beside complex lines of code__ - Write a comment to explain any line or lines of code that are slightly complicated and might confuse someone else (or a future you).

When you write comments __don't just restate the code itself__. Your objective should always be to _explain_ what the code is for, not just say exactly what it does in a technical sense.
