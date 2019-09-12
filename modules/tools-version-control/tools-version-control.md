### Tools / CART 253 / Pippin Barr

# Version control

---

## In this module

- Why version control?
- Git, GitHub, and GitHub Desktop
- Creating a repository
- Starting a project in the repository
- A version control workflow
- Using [GitHub Desktop](https://desktop.github.com/) and [GitHub](https://www.github.com)

---

## Why version control?

- Version control is an industry standard used to make sure software projects are maintained systematically
- In this class version control will allow us to:
  - Submit our assignments easily
  - Keep our files backed up in the cloud (on github.com)
  - Have our work be open source and publicly available
  - Track the progress of our projects step by step over time
  - (With a little work) Go back to a previous version of our work if we make a horrible mistake
  - (Collaborate successfully with other in larger projects)

---

## Git, GitHub, and GitHub Desktop

- There are many forms of version control and many version control applications
- We will be using a very popular tool called __Git__ and a very popular Git remote host called __GitHub__
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
- But usually people have a repository for __each project__

---

## Create a cart253 repository

- Let's create our repository!
--

- Go to [github.com](https://www.github.com/) and log in
--

- Once you're logged in click on the green "New repository" button
--

- Name your repository __`cart253`__ (note the lowercase, the hyphen, etc.)
--

- Make sure it's set to __public__
--

- Select __Initialize this repository with a README__
--

- Ignore the `.gitignore` (ha ha) and license options for now
- Click the green `Create repository` button

---

## Cloning a repository!

- You now have a repository called `cart253`
- Right now it exists __only on GitHub__ though, and not on your computer
- We need to __clone__ it to our local computer ("cloning" just means __downloading__)
--

- Launch __GitHub Desktop__ (log in to GitHub when it asks you to)
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

## Starting a project

- To start a project (or exercise) in our repository we need to

1. Put all the starting files in the right place (probably by copying the __template folder__ into the repository folder)
1. __Commit this starting template__ to the local repository in GitHub Desktop so that the changes are up to date
1. __Push the commit__ to the remote repository on github.com so that the changes are up to date "in the cloud" as well

---

## 1. Setup

- Find the folder for your `exercise0` project from last week (if you don't have it, download the [starter version](https://pippinbarr.github.io/cart253-2018/exercises/exercise0.zip) on the course website and unzip it)
- Rename the folder to `exercise0` if you haven't already, since it's a better name and names matter
- In your `cart253` folder (the local repository) create an `exercises` folder
- Move your `exercise0` folder into the new `exercises` folder
- Go to GitHub Desktop
- Notice how the interface has changed!
--

- The left-hand pane should be showing you a list of __changes__ detected in your repository (if it's not selected, select the __Changes__ tab on the left!)
- In particular, it shows you you've added a bunch of __new__ files (hence the little green plus sign)

---

## 2. Commit

- We want to __store__ these changes officially in the repository (so it remembers them)
- Therefore we want to __commit__ the changes
--

- At the bottom of the left pane you can see the interface for __committing__ changes
--

- There's a __Summary__ which you use to describe the changes you made
- So __write what you did__ in there, e.g. "Ex0: Added template"
--

- There's also a __Description__ where you can write more detailed notes about what you did if you want to expand on it (this can be super helpful and is encouraged)
--

- Finally there's the blue __Commit to master__ button
- Click it

---

## Committed!

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

## 3. Push

- In order to synchronize our updated repository with github.com we need to __push__ the changes
- Notice that there's a __Push origin__ button at the top of the window
- It should have a little number with an up arrow next to it, indicating there are commits to be pushed to the remove server
- Click it
--

- You'll see a few updating messages appear on the button as GitHub Desktop uploads the changes
- And the messages about it fetching the repository again to synchronize it...
- And then it's done and the name has changed to __Fetch origin__ because there's nothing to push

---

## Check

- Just to make sure, let's go back to [github.com](https://www.github.com/) in our browser
- Navigate to your account and click on your `cart253` repository if it's not already loaded
- If it's already loaded then __reload the page__
--

- You should see your changes reflected in the repository
- That is, there should be an `exercise0` folder with all your project files (exactly like it is on your computer)
--

- It worked!
- So that is the process you will follow whenever you start a __new project__ in your repository  
  - You add the project folder to the appropriate location in the local repository
  - commit with a message
  - and push

---

## Getting to work

- __Most__ of the time you're not starting a new project
- Most of the time you'll actually be __working__ on the project
- The process for keeping everything up to date is... the same!
- So let's repeat the process by pretending to make some changes to our project

---

## A version control workflow

The standard workflow using Git and GitHub is:
--

1. You __make some changes to your project in your local folder__. Something like an hour's work, say, reaching some sort of defined goal perhaps. (Mostly in Atom, but can also include adding files, renaming folders, etc.)
--

2. You __commit your changes to the local repository__ using GitHub Desktop with a descriptive message. This stores this newest version of the project in the repository.
--

3. You __push your changes to the remote repository__ on github.com using GitHub Desktop. This makes sure your newest version is also safe in the "cloud".

--

So basically you develop a rhythm of doing a chunk of work, committing and pushing it, doing another chunk of work, committing and pushing it, etc.

Let's do it...

---

## 0. Open the project

- To work on our `exercise0` project we would open that folder in Atom
- Remember we only want to open the `exercise0` folder, __not__ the entire repository
- So open the folder in Atom (by dragging it to the Atom icon, or going to `File > Open...` inside Atom)

---

## 1. Make some changes

- Go into `script.js` and make a change
- Maybe just change the background color, or a shape, or anything else
- This is what we do when we work on our projects, after all, we make changes to the code
- For now do something relatively minor, since we're just playing pretend
- __Save__ your work
---

## GitHub Desktop knows what you did

- Go back to GitHub Desktop
- Again, notice how the interface has changed
- The left-hand pane shows you a list of __changes__ detected by listing the files that have changed __since your last commit__ (in this case it's just `script.js`)
- If you click on the file name, the right-hand pane will show you the changes made through highlighting (green means addition, red means deletion)

---

## 2. Commit your changes

- Let's assume we want to keep the work we just did
- Write a __summary__ in the commit area at the bottom left that describes what you did!
- e.g. "Changed background color" or "Added a third eye" or something
- Then click the blue __Commit to master__ button

---

## Committed

- The __Changes__ area goes blank because there are __no new changes__ to the repository since our last commit (just now) - the repository is __up to date__
- Again, that means those changes are __stored in the local repository__
- Again, this history is especially great for keeping track of a project when you're working with other people
- Again, in this course we will be using the commit messages and history to __evaluate whether you're following good version control and development practices__
---

## 3. Push your changes

- We still need to __push__ the changes to GitHub
- Click the __Push origin__ button at the top of the window
- All going to plan, the repository is now __up to date__ on GitHub as well
- All your work is safe!

---

## Check GitHub

- One more time, let's go back to [github.com](https://www.github.com/) in our browser
- If you go to your repository you should see your commit message showing up next to the related folders/files that you changed
- If you go to the file itself, you'll see it's up to date with your local copy

---

## Done.

So that's the basic process of using version control

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
- A simple answer is just to commit __when you've made an important change__ that was work to do and you want to save it as part of the history of development
- Another answer is that __you probably can't commit too often__, it's almost always a good thing to do and you're more likely to do it too little than too much

---

## Working offline

- You can't __push__ to the remote repository if you're not online
- However you can still __commit__ to your local repository __without pushing to the remote repository__
- This means that if you aren't online you can do your work and keep __committing__ locally
- Then when you connect to the internet again you can __Push to origin__ in GitHub Desktop to synchronise all that work to GitHub

---

## Working on a different computer

- GitHub makes it possible for you to do your work on different computers as needed!
- Whenever you want to work on a computer you just need to __Clone__ the `cart253` repository again, as we did at the start of this module
- Cloning will download the latest version of the folder to that computer and you can just start working
- Then when you __push__ from that computer, it will update GitHub and you can clone it somewhere else, etc. etc.

---

## "For I am CDA, destroyer of worlds"

- In fact, because of the way CDA computers work, this will be necessary
- __CDA computers erase all local data every night__
- This means when you come in the next day it will have __deleted the `cart253` folder from your desktop__
- And it will have __deleted your GitHub Desktop settings__! Argh!
--

- Basically each day on a CDA computer you will
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

## No mega-files!

- Please, please try to avoid putting really large files into your repository
- GitHub has size limits and things can get really frustrating if you hit them
- It's better just not to include that 400MB mp3 you were thinking of using, consider compressing it a bit more...

---

## Summary

- Git, GitHub, and GitHub Desktop are the key tools we will use for version control
- The basic workflow is: make changes, commit changes, push changes
- If you keep to this workflow you will become a better developer

---

# Fin.
