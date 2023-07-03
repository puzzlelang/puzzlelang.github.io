# Build an API

When creating an app without graphical user interface, Node.js is used as javascript runtime.

[filename](code-editor.md ':include')


## Install Node and PUZZLE

Install Node from [their website](https://nodejs.org/en) and then install PUZZLE:

Inside a blank directory, run:

```shell
npm i puzzlelang --save
```



## Code

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
server.start 3000;

// Define a route
server.on get /test run (
	print "/test was called"
) and return "done!"
```

## Run

Open the terminal and run:

```shell
node index.js
```
