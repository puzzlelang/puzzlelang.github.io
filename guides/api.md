# Build an API

When creating an app without graphical user interface, Node.js is used as javascript runtime.

## • Install Node and PUZZLE

Install Node from [their website](https://nodejs.org/en) and then install PUZZLE:

Inside a blank directory, run:

```shell
npm i puzzlelang --save
```

[filename](code-editor.md ':include')

## • Directory Structure

Inside your Code Editor, open a directory with an index.js file as the entry point of your application. PUZZLE code is included in that JavaScript file.

* index.js
* index.pz

## • Code

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

## • Run

Open the terminal and run:

```shell
node index.js
```
