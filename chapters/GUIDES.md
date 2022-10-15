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
			render (
				<div>hello</div>
			)
		</script>
	</body>
</html>
```

> -> Browser technology can also be used to build desktop and mobile apps


# Node

To run puzzle on a server, use in node. 

```shell
npm i puzzlelang
```

```puzzle
// puzzle file: test.pz
print hi!
```

```javascript
const puzzle = require("puzzlelang");
puzzle.run('test.pz');
```


# Embedded

Puzzle scripts can be run embedded in javascript, both node and browsers.

```javascript
let word = "hello";

puzzle.parse("print word")
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

TBD...