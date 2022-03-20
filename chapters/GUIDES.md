# Guide

The following chapters will show you how to build software using abstract language and tools for various platforms.


# PUZZLE Run

PUZZLE Run is a ready-to-use browser based puzzle environment, that comes with an editor and a virtual file system. You can use it  on [puzzlelang.org/run](https://puzzlelang.org/run)

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
			print "hi, i am a puzzle script"
		</script>

		<script type="text/javascript">
			puzzle.parse('print "hi"');
		</script>
	</body>
</html>
```

***Building web content***

After including PUZZLE with the easy steps shown above, you have PUZZLE running in your browser. Now, to build web content, you can use any module that makes sense, like the official ***web*** module.

```puzzle
// use the web module
use web;

rootNode body;

create button with text "click me" and method ( alert('i was clicked') );
```

# Desktop

To build programs for desktops, you can use web-based frameworks, like

* electron
* NW.js


# Mobile

Mobile apps with PUZZLE can either be hybrid apps, build with tools like

* Nativescript
* React Native


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

# Server

tbd

# Cloud Functions

tbd