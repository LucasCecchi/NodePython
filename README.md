
Simple Node.js application
============================

This simple Node.js application demonstrates how to make an Node/Express application that spawns a Python child process.  The user interface is developed using [PUG](https://pugjs.org/api/getting-started.html), custom CSS styles, and font from [Font Awesome](https://fontawesome.com/).

Dependencies
------------
1. [Node.js (8.11.2)](https://nodejs.org/en/)
2. [Express (^4.16.3)](https://expressjs.com/)
3. [PUG (^2.0.3)](https://pugjs.org/api/getting-started.html)
4. [Nodemon (^1.17.5)](https://www.npmjs.com/package/nodemon)


Use
---------
To use this repo as a sandbox for learning Node.js download [Node.js](https://nodejs.org/en/).  Then, in the terminal clone the repository

```
$ git clone https://github.com/robert-vogel/NodePython.git
```

and move into the package's directory.  You will need to install the applications dependencies using npm.  This is simply done by,

```
$ npm install
```

which installs all the dependencies in the `package.json` file.  Now you are ready to run the server on your local machine,

```
$ npx nodemon app.js
```

This command should then print some text to the terminal, followed by `Server running on port 3000`.  To check out the webpage, open your favorite browser and type `localhost:3000` into the address bar.
