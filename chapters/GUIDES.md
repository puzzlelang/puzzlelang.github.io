# Get started

The following chapters will show you how to build software using abstract language and tools for various platforms.

# Browser

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


# Embedded (in JS)

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
<script type="text/x-puzzle">
	print hi!
</script>
...
```

# Use with Node

To run puzzle on a server, use in node. 

```puzzle
// puzzle file: test.pz
print hi!
```

```javascript
const puzzle = require("puzzlelang");
puzzle.run('test.pz');
```

# CLI

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


# Abstract Code Editor

Abstract Code (BETA) is a ready-to-use browser-based puzzle environment, that comes with an editor and a virtual file system. You can use it  on [abstractcode.dev](https://abstractcode.dev). As of now, it is intended to be used for trying and playing around with PUZZLE. In the future, the editor will get richer.

<iframe src="https://abstractcode.dev" style="border:none;height:400px;width:100%"></iframe>

# Hosted Clouds

PUZZLE can be used on hosted cloud environments.

## Replit

[Replit.com](https://replit.com)

Replit is an excellent platform for creating and running all kinds of programs that unr on web technologies. PUZZLE applications can also be built on Replit.

![Replit](../assets/replit.png)

## Glitch

[Glitch.com](https://glitch.com)

Glitch is another cool hosted cloud platform for building and running custom applications. 


# Cloud Platforms

Cloud Platforms, like Google Cloud, AWS, Azure, Digital Ocean and others can be used to build, run and ship PUZZLE apps.

TBD

# Abstract Cloud

> Official! Built by the team behind PUZZLE

Abstract Cloud is a framework for building custom cloud platforms and apps using abstract code. It can be deployed on and cloud provider, like Google Cloud, AWS, Azure, you name it.

TBD