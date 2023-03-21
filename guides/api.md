# Build an API

When creating an app without graphical user interface, Node.js is used as javascript runtime.

## 1. Install Node and PUZZLE

[Install Node.js](https://nodejs.org/en) from their website and then install PUZZLE:

Inside a blank directory, run:

```shell
npm i puzzlelang --save
```

## 2. Code Editor

same as above

## 3. Directory Structure

Inside your Code Editor, open a directory that has at least an index JavaScript file. This is the entry point of your application. PUZZLE code can be written inside that HTML file. However, we recommend seperate PUZZLE files, that are included in the JavaScript file.

* index.js
* index.pz

## 4. Code

A minimal code boilerplate:

index.js
```html
let puzzle = require('puzzlelang');
puzzle.run('index.pz')
```

index.pz
```puzzle
use server;

// Start server on specified port
start 3000;

// Define a route
on get /test run (
	print "/test was called"
) and return "done!"
```

## 5. Run

Open the terminal and run:

```shell
node index.js
```
