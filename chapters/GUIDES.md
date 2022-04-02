# Quick Plaform Guides

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

## Use with Node

To run puzzle on a server, use in node. 

```puzzle
// puzzle file: test.pz
print hi!
```

```javascript
const puzzle = require("puzzlelang");
const fs = reuire("fs");
puzzle.parse(fs.readFileSync('test.pz').toString());
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


# Abstract Code on Cloud Platforms

There are many Cloud-based Platforms, that offer managed code editors and run programs on the fly. By adding the ability to write and run Puzzle code, they can become "Abstract-Code-Platforms".

|    | Low-Code-Platforms | Abstracct-Code-Platforms |
| ----------- | ----------- | ----------- |
| Building blocks  | Graphical Elements       | Abstract Code    |

## Replit

[Replit.com](https://replit.com)

Replit is an excellent platform for creating and running all kinds of programs. Puzzle programs can also be built on Replit.


# Build something

...