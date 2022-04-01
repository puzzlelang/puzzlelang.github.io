# Plaform Guides

The following chapters will show you how to build software using abstract language and tools for various platforms.

## Browser

PUZZLE runs in any Webbrowser. It can be included as a script tag and be used in various ways:

***Including PUZZLE***

```html
<html>
	<head>
		<script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
	</head>
	<body>
		<script type="text/x-puzzle">
			// use the ui module
			use ui;
			root body;
			create button with text "click me" and method ( alert('i was clicked') );
		</script>
	</body>
</html>
```

***Building web content***

After including PUZZLE with the easy steps shown above, you have PUZZLE running in your browser. Now, to build web content, you can use any module that makes sense, like the official ***ui*** module.


> -> Browser technology can also be used to build desktop and mobile apps

## Use with Node

To run puzzle on a server, use in node. 

```puzzle
// puzzle file: test.pz
print hi!
```

```javascript
const puzzle = require("puzzlelang");
const fs = reuire("fs");
puzzle.parse(fs.readSync("test.pz"));
```


## Embedded (in JS)

Puzzle scripts can be run embedded in javascript, both node and browsers.

***Node***

```javascript
const puzzle = require("puzzlelang");

puzzle.parse("print hi!")
```

***Browser***

```html
<script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
...
<script>
	puzzle.parse("print hi!")
</script>
...
```

## CLI

For using the PUZZLE CLI, you need npm and Node installed on your computer.

Step 1: Install PUZZLE with npm

```shell
npm i puzzlelang -g
```

Step 2: Use the CLI

```shell
$ puzzle
> print hello
```

Additional: Run files or scripts directly

```shell
puzzle run puzzlefile.pz
# or
puzzle run "print hi"
```


## PUZZLE Run

PUZZLE Run is a ready-to-use browser based puzzle environment, that comes with an editor and a virtual file system. You can use it  on [puzzlelang.org/run](https://puzzlelang.org/run)


# Quick tutorials

## Data, types and functions

In programming, you always need to store some information for later use. This information is stored in variables.
In puzzle, variables can be created with `set name value`. Puzzle variables can take any type as value:

```puzzle
// Number
set age 1

// Text
set message "hello world"

// Boolean
set decision true

// Objects
set person {name: Perer, age: 22}

// Array (collection of data)
set numbers [1,2,3]

// Script
set say-hello ( print hello )
```

Functions in puzzle are called scripts. They are pieces of puzzle code, that can be reused anywhere in your code.

```puzzle
// Create a script
script say-hello ( print hello )

// You can also use a variable to store a script
set say-hello ( print hello )

// Run it
run say-hello

// Overwrite data inside the script (this allows yout to pass parameters, that overwrite keywords inside the function)
run hello:hi in say-hello
```

## Control structures

Every program needs control structures, like if-else statements and loops. This allows for creating dynamic programs

```puzzle
set decision yes

if (decision==yes) then ( print "it's a yes" )
	else ( print "it's a no" )
```

```puzzle
// Loop over an array

set numbers [1,2,3]

// The "loop over" function lets you define an iterator (here: num),
// that can be usied inside the script to refer to the current element
loop over numbers with num do ( print num )
```