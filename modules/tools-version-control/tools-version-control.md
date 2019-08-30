### Tools / CART 253 / Pippin Barr

# Version control

---

## In this module

- Why version control?
- Git, GitHub, and GitHub Desktop
- Creating a repository
- A version control workflow
- Using [GitHub Desktop](https://desktop.github.com/) and [GitHub](https://www.github.com)

---

## Why version control?

- Version control is an industry standard used to make sure software projects are maintained systematically
- In this class version control will allow us to:
  - Submit our assignments easily
  - Keep our files backed up in the cloud (on github.com)
  - Go back to a previous version of our work if we make a horrible mistake
  - Have our work be open source and publicly available
  - Track the progress of our projects step by step over time
  - (Collaborate successfully with other in larger projects)

---

## Git, GitHub, and GitHub Desktop

- There are many forms of version control and many version control applications
- We will be using a very popular tool called __Git__ and a very popular Git server called __GitHub__
- To make things simpler, we will use an application called __GitHub Desktop__ to interface with Git, so that we don't have to use scary command-line tools

???

- Yes, GitHub was bought by Microsoft which makes it part of a scary corporate juggernaut that doesn't particularly support free and open software
- In an ideal world we would use something less tied up in corporate interests, but GitHub remains a fantastic service and a good place for us to start with version control
- There are other services such as GitLab and BitBucket and other applications such as SourceTree that you should feel free to look into in your own time

---

## Repositories

- When we work on a project with Git we create a __repository__ for that project
- The repository will basically just keep track of all your files over time
- On your computer the repository for this course will just be a __folder__ containing all your course work
- Using Git and GitHub Desktop we will keep that folder __synchronised__ with an online version on GitHub
- For this course we'll just use __one repository__ the whole time, as if the whole course is a project
- But usually people have a repository for __each project__ they do

---

## Create a cart253 repository

- Let's create our repository!
--

- Go to [github.com](https://www.github.com/) and log in (you've already have registered, RIGHT?)
--

- Once you're logged in click on the green "New repository" button
--

- Name your repository __`cart253`__ (note the lowercase, the hyphen, etc.)
--

- Make sure it's set to __public__
--

- Select __Initialize this repository with a README__
--

- Ignore the `.gitignore` and license options for now
- Click the green `Create repository` button

---

## Cloning a repository!

- You now have a repository called `cart253`
- Right now it exists __only on GitHub__ though, and not on your computer
- We need to __clone__ it to our local computer (cloning just means __downloading__)
--

- Launch __GitHub Desktop__ (log in to GitHub here)
--

- Go to `File > Clone Repository...`
--

- Select the `GitHub.com` tab at the top of the window that appears
--

- Select your `cart253` repository (it will be the only one there if you haven't used GitHub before)
--

- For now select your __Desktop__ as the __Local Path__
--

- Click the blue __Clone__ button

---

## Your local repository

- Now you see the standard GitHub Desktop interface
- This is the interface we will be using to deal with our repositories from now on
- If you check your Desktop you'll see a __folder__ with the same name as your repository
- That __is__ your __local copy__ of the repository!

---

## Ready to work!

- Now that we have our `cart253` repository on our computer we're ready to work
- When we do work we just create and edit our class projects etc. inside that `cart253` folder
- And we keep it synchronised with the version on GitHub

---

## A version control workflow

The simplest workflow using Git and GitHub is this:
--

1. You __make some changes to your project in your local folder__. Something like an hour's work, say, reaching some sort of defined goal perhaps. (Mostly in Atom, but also includes adding files, renaming folders, etc.)
--

2. You __commit your changes to the local repository__ using GitHub Desktop. This stores this newest version of the project in the repository.
--

3. You __push your changes to the remote repository__ on github.com using GitHub Desktop. This makes sure your newest version is also safe in the "cloud".

--

So basically you develop a rhythm of doing a chunk of work, committing and pushing it, doing another chunk of work, committing and pushing it, etc.

Let's try it...

---

## 1. Make some changes

- Go to the `cart253` folder on your desktop and open it
- You should see a file called `README.md` that was created when you created the repository
- __Open `README.md` in Atom__
- Right now it probably just says `## cart253`
- Under the name of the repository write a simple description of it

---

```
## cart253

This is the repository for the course CART 253 for Pippin Barr.
It is going to contain __exciting exercises__, __passionate projects__,
and a __succulent sandbox__.

- [My homepage](https://www.pippinbarr.com/)
- [Twitter](https://www.twitter.com/pippinbarr)
- [Instagram](https://www.instagram.com/pippinbarr)
```

- This file with extension `.md` is written in a very neat format called __[Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)__
- It's a plain text file with special symbols that allow us to insert formatting when it's displayed on GitHub and in other situations
- For example in Markdown the two hash symbols (`##`) mean a level-two heading
- When you surround text with two underscores on either side it makes the text inside __bold__
- You can see how we write hyperlinks above, too!

???

- In fact, the __slides for this course are written in Markdown too!__
- In fact, Pippin writes almost everything he ever does in Markdown!
- It's that good!

---

## GitHub Desktop knows what you did (last summer)

- __Save__ your `README.md` if you haven't already
- Go back to GitHub Desktop
- Notice how the interface has changed!
--

- The left-hand pane should be showing you a list of __changes__ detected in your repository (if it's not selected, select the __Changes__ tab on the left!)
--

- The right-hand pane is probably showing you the changes made to the only file we've changed, `README.md` (it shows insertions in green and deletions in red)
--

- If there were more changed files we could select them on the left and see the changes on the right, which can be very helpful

---

## 2. Commit your changes

- Let's assume we want to keep the edits to `README.md`
--

- At the bottom of the left pane you can see the interface for __committing__ changes
--

- There's a __Summary__ which you use to describe the changes you made
- So __write what you did__ in there, e.g. "Wrote first version of README"
--

- There's also a __Description__ where you can write more detailed notes about what you did if you want to expand on it (this can be super helpful to other people)
--

- Finally there's the blue __Commit to master__ button
- Click it

---

## Committed

- Now the __Changes__ area goes blank because there are __no new changes__ to the repository since our last commit (just now)
- That means those changes are __stored in the local repository__
--

- If you click on the __History__ tab in the left pane you'll see a reverse chronological list of all the changes
- You can see that your __commit message__ (the summary) is listed there to explain what happened
--

- This history is especially great for keeping track of a project when you're working with other people
- In this course we will be using the commit messages and history to __evaluate whether you're following good version control and development practices__

???

- Note that if you go and check your repository on GitHub the changes are __not there yet__ because we've only committed to the __local__ repository

---

## Push your changes

- In order to upload our updated repository to the cloud on GitHub we need to __push__ the changes
- Notice that there's a __Push origin__ button at the top of the window
- It should have a little number 1 with an up arrow next to it, indicating there is one commit to be pushed
- Click it
--

- You'll see a few updating messages appear on the button as GitHub Desktop uploads the repository
- And the messages about it fetching the repository again to synchronise it...
- And then it's done and the name has changed to __Fetch origin__ because there's nothing to push

???

- It is hopefully obvious that if you're not connected to the internet, you can't __push__

---

## Check GitHub

- Just to make sure this first time, let's go back to [github.com](https://www.github.com/) in our browser
- Navigate to your account and click on your `cart253` repository if it's not already loaded
- If it's already loaded then __reload the page__
--

- You should see your `README.md` file sitting in the list of files
- And because `README.md` is automatically displayed by GitHub, you should see the changes you made listed below the file list!
- You can also click the file name in the file list to display the file
--

- It worked!

???

- You can use the fact that the file called `README.md` is automatically displayed in any folder to add READMEs to other folders if you want to

---

## That workflow again

- So that's the basic process of using version control

1. __Make changes locally__ (in your `cart253` repository folder)
2. __Commit changes to the local repository with a message__ (using GitHub Desktop)
3. __Push changes to the remote repository__ (using GitHub Desktop)

- If you follow that simple workflow, you'll be loved and respected by developers everywhere
- You'll also make your own life a lot easier
- (And you'll get a better grade!)

???

- A lot of the time the kinds of __changes__ you'll be making will be _editing code_, _adding new folders_, _adding images_, etc.

---

## "When should I commit?"

- There's no single answer to the question of __when__ you should commit and push changes
- A simple answer is just to commit __when you've made some important change__ that was work to do and you want to save it as part of the history of development
- Another answer is that __you probably can't commit too often__, it's almost always a good thing to do and you're more likely to do it too little than too much

---

## Working offline

- Note that it's possible to commit to your local repository __without pushing to the remote repository__
- This means that if you aren't online you can do you work and keep __committing__ locally
- Then when you connect to the internet again you can __Push to origin__ in GitHub Desktop to synchronise all that work to GitHub

---

## Working on a different computer

- GitHub makes it possible for you to do your work on different computers as needed!
- Whenever you want to work on a computer you just need to __Clone__ the `cart253` repository again, as we did at the start of this module
- Cloning will download the latest version of the folder to that computer and you can just start working (assuming you have all the right software of course)
- Then when you __push__ from that computer, it will update GitHub and you can clone it somewhere else, etc. etc.

---

## "For I am CDA, destroyer of worlds"

- In fact, because of the way CDA computers work, this will be necessary
- __CDA computers erase all local data every night__
- This means when you come in the next day it will have __deleted the `cart253` folder from your desktop__
- And it will have __deleted your GitHub Desktop settings__! Argh!
--

- Basically you'll have to
  - __Sign in to GitHub Desktop__ again
  - __Clone your `cart253` repository__ again
  - And get back to work

???

- If you work on your own computer then this won't happen to you and you'll be able to just keep using the same folder as if nothing had happened
- You __could__ try keeping your `cart253` repository folder inside your hosted folder on the CDA computers, which would mean it won't be deleted
- __But__ your GitHub Desktop settings __will__ still be deleted and so it's probably just easier to clone your repository each time you sit down to work

---

## Ignorance is bliss

- There are certain kinds of files that you __never__ want to commit to your repository
- For example, on a Mac there is that stupid secret file called `.DS_Store` that gets created in every folder - we don't need it in our repository
- Fortunately, there is a special kind of file in Git-based version called `.gitignore`
- For now let's tell our GitHub Desktop to ignore `.DS_Score`

---

## Ignore `.DS_Store`

- In __GitHub Desktop__
- Make sure you `cart253` repository is the Current Repository selected in the top left
- Go to `Repository > Repository Settings...`
- Selected the `Ignored Files` tab
- Type `.DS_Store` in the text field
- Click `Save`
- Notice that doing this __changes your repository__ (because it adds a `.gitignore` file)
- So you need to now __commit__ and __push__ the file

---

## Activity

Given that we have done [Exercise 0](../../exercises/Exercise-0.md) (RIGHT?) we have a JavaScript project we could put into our repository! So:

1. Find your Exercise 0 folder and rename it to `exercise0`
2. Create a folder called `exercises` inside your `cart253` repository folder
3. Put the `exercise0` folder into the `exercises` folder
4. Go to GitHub Desktop and check that it sees the changes
5. Write a commit message like "Added exercise 0 to the repository"
6. Commit the changes
7. Push the changes

(Normally our changes won't be adding a whole project at once, they'll be more incremental.)

---

## Summary

- Git, GitHub, and GitHub Desktop are the key tools we will use for version control
- The basic workflow is: make changes, commit changes, push changes
- If you keep to this workflow you will become a better developer

---

# Fin.
